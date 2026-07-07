const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'mirymol.db');

app.use(cors());
app.use(express.json());

// Initialize database
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        lesson_id INTEGER NOT NULL,
        completed INTEGER DEFAULT 1,
        UNIQUE(user_id, lesson_id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL UNIQUE,
        show_vocab INTEGER DEFAULT 1,
        theme TEXT DEFAULT 'default',
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`);

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Auth endpoints
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }
    try {
        const hashed = hashPassword(password);
        const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        const result = stmt.run(username, hashed);
        // Create default settings
        db.prepare('INSERT INTO settings (user_id) VALUES (?)').run(result.lastInsertRowid);
        res.json({ id: result.lastInsertRowid, username });
    } catch (e) {
        if (e.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Пользователь уже существует' });
        }
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }
    const user = db.prepare('SELECT id, username, password FROM users WHERE username = ?').get(username);
    if (!user) {
        return res.status(401).json({ error: 'Профиль не существует' });
    }
    if (user.password !== hashPassword(password)) {
        return res.status(401).json({ error: 'Профиль не существует' });
    }
    res.json({ id: user.id, username: user.username });
});

// Progress endpoints
app.get('/api/progress/:userId', (req, res) => {
    const rows = db.prepare('SELECT lesson_id FROM progress WHERE user_id = ?').all(req.params.userId);
    const progress = {};
    rows.forEach(r => { progress[r.lesson_id] = true; });
    res.json({ progress, completed: rows.length });
});

app.post('/api/progress/:userId/:lessonId', (req, res) => {
    const { userId, lessonId } = req.params;
    db.prepare('INSERT OR IGNORE INTO progress (user_id, lesson_id, completed) VALUES (?, ?, 1)').run(userId, lessonId);
    const rows = db.prepare('SELECT lesson_id FROM progress WHERE user_id = ?').all(userId);
    const progress = {};
    rows.forEach(r => { progress[r.lesson_id] = true; });
    res.json({ progress, completed: rows.length });
});

app.delete('/api/progress/:userId/:lessonId', (req, res) => {
    const { userId, lessonId } = req.params;
    db.prepare('DELETE FROM progress WHERE user_id = ? AND lesson_id = ?').run(userId, lessonId);
    const rows = db.prepare('SELECT lesson_id FROM progress WHERE user_id = ?').all(userId);
    const progress = {};
    rows.forEach(r => { progress[r.lesson_id] = true; });
    res.json({ progress, completed: rows.length });
});

// Settings endpoints
app.get('/api/settings/:userId', (req, res) => {
    const s = db.prepare('SELECT * FROM settings WHERE user_id = ?').get(req.params.userId);
    if (!s) {
        db.prepare('INSERT INTO settings (user_id) VALUES (?)').run(req.params.userId);
        return res.json({ showVocabTab: true, theme: 'default' });
    }
    res.json({ showVocabTab: !!s.show_vocab, theme: s.theme || 'default' });
});

app.put('/api/settings/:userId', (req, res) => {
    const { showVocabTab, theme } = req.body;
    db.prepare('UPDATE settings SET show_vocab = ?, theme = ? WHERE user_id = ?')
        .run(showVocabTab ? 1 : 0, theme || 'default', req.params.userId);
    res.json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`Miry Moł server running on http://localhost:${PORT}`);
});