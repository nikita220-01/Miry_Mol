// Lesson data for Łitarhul Course
const lessonData = {
    1: {
        title: "Lesson 1: Śel've iu znajomść",
        subtitle: "Урок 1: Знакомство",
        objective: "Научиться приветствовать, представляться и задавать простые вопросы.",
        summary: {
            items: [
                "Приветствовать и прощаться",
                "Представляться",
                "Задавать простые вопросы",
                "Использовать личные местоимения",
                "Спрягать глагол \"быть\" (jescikun)",
                "Понимать 3 типа существительных",
                "Правильно образовывать родительный падеж (-a для 1 и 3 типов, -y для 2 типа)",
                "Использовать союз iu (и)"
            ],
            vocabCount: "~30 слов"
        },
        theory: {
            topics: [
                {
                    title: "1.1 Приветствия и прощания",
                    type: "vocab-table",
                    headers: ["Łitarhul", "Русский"],
                    rows: [
                        ["Śel've!", "Привет!"],
                        ["Kaśe me spravi?", "Как дела?"],
                        ["Dobre.", "Хорошо."],
                        ["Drenge.", "Плохо."],
                        ["Mel'we!", "Пока!"],
                        ["Delće.", "Спасибо."],
                        ["Dgel'śe.", "Пожалуйста."]
                    ]
                },
                {
                    title: "1.2 Личные местоимения",
                    type: "vocab-table",
                    headers: ["Łitarhul", "Русский"],
                    rows: [
                        ["jan", "я"],
                        ["dun", "ты"],
                        ["jon", "он"],
                        ["janaś", "она"],
                        ["jonoś", "оно"],
                        ["weki", "мы"],
                        ["gandoni", "вы"],
                        ["joni", "они"]
                    ]
                },
                {
                    title: "1.3 Глагол \"быть\" — jescikun",
                    intro: "В настоящем времени:",
                    type: "conj-table",
                    headers: ["Лицо", "Форма", "Пример"],
                    rows: [
                        ["я", "jesciken", "Jan jesciken hućes. (Я человек.)"],
                        ["ты", "jesciket", "Dun jesciket hućes. (Ты человек.)"],
                        ["он/она/оно", "jesciket", "Jon jesciket hućes. (Он человек.)"],
                        ["мы", "jescikem", "Weki jescikem hućesi. (Мы люди.)"],
                        ["вы", "jesciket", "Gandoni jesciket hućesi. (Вы люди.)"],
                        ["они", "jescikent", "Joni jescikent hućesi. (Они люди.)"]
                    ]
                },
                {
                    title: "1.4 Вопрос \"Как тебя зовут?\"",
                    type: "text",
                    content: '<p><strong>Jaky me duny imej?</strong> — Какое твоё имя?</p><p><strong>Ответ:</strong></p><p><em>Moj imej Jan.</em> — Моё имя Ян.</p><p><em>Jan me majet.</em> — Ян я имею. (дословно)</p>'
                },
                {
                    title: "1.5 Вопрос \"Откуда ты?\"",
                    type: "text",
                    content: '<p><strong>Gdeśe me dun?</strong> — Откуда ты?</p><p><strong>Ответ:</strong></p><p><em>Jan zi grada.</em> — Я из города.</p><p><em>Jan zi derhula.</em> — Я из леса.</p><p><em>Jan zi haty.</em> — Я из дома.</p>'
                },
                {
                    title: "1.6 Грамматика: Существительные и падежи",
                    type: "grammar",
                    intro: "В Łitarhul существительные делятся на 3 типа по окончанию в именительном падеже:",
                    tables: [
                        {
                            subtitle: "Тип 1: На согласную (hućes, grad, derhul, s'abrek)",
                            headers: ["Падеж", "Окончание", "Пример"],
                            rows: [
                                ["Им.п. (кто? что?)", "нулевое", "hućes (человек), grad (город)"],
                                ["Род.п. (кого? чего?)", "-a", "hućesa (человека), grada (города)"]
                            ]
                        },
                        {
                            subtitle: "Тип 2: На -a (hata, mat', zen')",
                            headers: ["Падеж", "Окончание", "Пример"],
                            rows: [
                                ["Им.п.", "-a", "hata (дом), mat' (мама)"],
                                ["Род.п.", "-y", "haty (дома), mat'y (мамы)"]
                            ]
                        },
                        {
                            subtitle: "Тип 3: На -ek/-ak (hłopek, dzewoćak)",
                            headers: ["Падеж", "Окончание", "Пример"],
                            rows: [
                                ["Им.п.", "-ek/-ak", "hłopek (мальчик), dzewoćak (девочка)"],
                                ["Род.п.", "-a", "hłopka (мальчика), dzewoćaka (девочки)"]
                            ]
                        }
                    ]
                },
                {
                    title: "1.7 Союз \"и\" — iu",
                    type: "text",
                    content: '<p>Для соединения слов используем союз <strong>iu</strong>:</p><p><em>Jan iu Peter</em> — Ян и Пётр</p><p><em>Grad iu derhul</em> — Город и лес</p><p><em>Dobre iu drenge</em> — Хорошо и плохо</p>'
                },
                {
                    title: "1.8 Отрицание",
                    type: "text",
                    content: '<p>Для отрицания используем частицу <strong>ne</strong> перед глаголом:</p><p><em>Jan jesciken hućes.</em> — Я человек.</p><p><em>Jan ne jesciken hućes.</em> — Я не человек.</p>'
                }
            ]
        },
        practice: {
            exercises: [
                {
                    title: "Упражнение 1: Переведите на Łitarhul",
                    type: "list",
                    items: [
                        "Привет! Как дела?",
                        "Я Ян.",
                        "Ты человек?",
                        "Хорошо, спасибо.",
                        "Откуда ты?",
                        "Я из города.",
                        "Я из дома."
                    ],
                    answers: [
                        "Śel've! Kaśe me spravi?",
                        "Jan jesciken hućes. (или: Moj imej Jan.)",
                        "Dun jesciket hućes?",
                        "Dobre, delće.",
                        "Gdeśe me dun?",
                        "Jan zi grada.",
                        "Jan zi haty."
                    ]
                },
                {
                    title: "Упражнение 2: Поставьте существительные в родительный падеж",
                    type: "gap-fill",
                    items: [
                        { prompt: "grad →", answer: "grada" },
                        { prompt: "derhul →", answer: "derhula" },
                        { prompt: "hata →", answer: "haty" },
                        { prompt: "hućes →", answer: "hućesa" },
                        { prompt: "hłopek →", answer: "hłopka" },
                        { prompt: "s'abrek →", answer: "s'abreka" },
                        { prompt: "mat' →", answer: "mat'y" },
                        { prompt: "dzewoćak →", answer: "dzewoćaka" }
                    ]
                },
                {
                    title: "Упражнение 3: Заполните пропуски",
                    type: "gap-fill-with-hints",
                    items: [
                        { prompt: "Śel've! Kaśe me", hint: "(дела)", answer: "spravi" },
                        { prompt: "Jan", hint: "(есть)", answer: "jesciken" },
                        { prompt: "Moj", hint: "(имя)", answer: "imej" },
                        { prompt: "Gdeśe me", hint: "(ты)", answer: "dun" },
                        { prompt: "", hint: "(пожалуйста), delće.", answer: "Dgel'śe" },
                        { prompt: "Jan zi", hint: "(я из города)", answer: "grada" },
                        { prompt: "Jan iu Peter jescikem", hint: "(люди)", answer: "hućesi" }
                    ]
                },
                {
                    title: "Упражнение 4: Диалог",
                    type: "dialog",
                    lines: [
                        { speaker: "a", text: "Śel've! Kaśe me spravi?" },
                        { speaker: "b", text: "Dobre, delće. Jaky me duny imej?" },
                        { speaker: "a", text: "Moj imej Jan. A dun?" },
                        { speaker: "b", text: "Moj imej Peter. Gdeśe me dun?" },
                        { speaker: "a", text: "Jan zi grada. A dun?" },
                        { speaker: "b", text: "Jan zi derhula. Mel'we!" },
                        { speaker: "a", text: "Mel'we!" }
                    ],
                    translation: [
                        "A: Привет! Как дела?",
                        "B: Хорошо, спасибо. Какое твоё имя?",
                        "A: Моё имя Ян. А твоё?",
                        "B: Моё имя Пётр. Откуда ты?",
                        "A: Я из города. А ты?",
                        "B: Я из леса. Пока!",
                        "A: Пока!"
                    ]
                },
                {
                    title: "Упражнение 5: Составьте предложения",
                    type: "composition",
                    words: "jan, dun, hućes, grad, derhul, hata, jescikun, iu, zi",
                    examples: [
                        "Jan jesciken hućes.",
                        "Dun jesciket hućes.",
                        "Jan zi grada.",
                        "Jan zi derhula.",
                        "Jan iu Peter jescikem hućesi.",
                        "Jan iu Peter zi grada."
                    ],
                    task: "Составьте ещё 5 предложений!"
                }
            ]
        },
        homework: {
            assignments: [
                {
                    title: "Задание 1: Напишите о себе (5-7 предложений)",
                    type: "composition-task",
                    content: '<p>Используйте структуру:</p><ul><li>Приветствие</li><li>Ваше имя</li><li>Откуда вы</li><li>Как дела</li><li>Прощание</li></ul><p><strong>Пример:</strong></p><p><em>Śel\'ve! Moj imej [ваше имя]. Jan zi [город/деревня]. Dobre, delće. Mel\'we!</em></p>'
                },
                {
                    title: "Задание 2: Выучите слова",
                    type: "vocab-list",
                    categories: [
                        {
                            name: "Существительные (10 слов):",
                            items: [
                                "hućes — человек",
                                "hłopek — мальчик",
                                "dzewoćak — девочка",
                                "grad — город",
                                "derhul — лес",
                                "hata — дом",
                                "łlic — улица",
                                "rjat — проспект",
                                "s'abrek — друг",
                                "imej — имя"
                            ]
                        },
                        {
                            name: "Местоимения (8 слов):",
                            items: ["jan, dun, jon, janaś, jonoś, weki, gandoni, joni"]
                        },
                        {
                            name: "Приветствия (8 слов):",
                            items: ["śel've, kaśe, spravi, dobre, drenge, mel'we, delće, dgel'śe"]
                        },
                        {
                            name: "Союзы и предлоги:",
                            items: ["iu — и", "zi — из", "ne — не"]
                        }
                    ]
                },
                {
                    title: "Задание 3: Склоняйте существительные",
                    type: "table-fill",
                    headers: ["Им.п.", "Род.п."],
                    rows: [
                        ["grad", "_____"],
                        ["hata", "_____"],
                        ["hućes", "_____"],
                        ["derhul", "_____"],
                        ["hłopek", "_____"],
                        ["s'abrek", "_____"],
                        ["mat'", "_____"],
                        ["dzewoćak", "_____"]
                    ],
                    answers: ["grada", "haty", "hućesa", "derhula", "hłopka", "s'abreka", "mat'y", "dzewoćaka"]
                },
                {
                    title: "Задание 4: Переведите текст",
                    type: "translate",
                    sourceText: "Привет! Меня зовут Иван. Я из Москвы. Я человек. Мой друг — Пётр. Он из леса. Как дела? Хорошо, спасибо. Пока!",
                    answer: "Śel've! Moj imej Iwan. Jan zi Moskva. Jan jesciken hućes. Moj s'abrek — Peter. Jon zi derhula. Kaśe me spravi? Dobre, delće. Mel'we!"
                },
                {
                    title: "Задание 5 (бонус): Придумайте диалог",
                    type: "composition-task",
                    content: '<p>Составьте свой диалог между двумя людьми (5-8 реплик), используя:</p><ul><li>Приветствия и прощания</li><li>Вопросы об имени</li><li>Вопросы о происхождении</li><li>Ответы "хорошо/плохо"</li><li>Союз iu (и)</li></ul>'
                }
            ]
        },
        vocab: {
            headers: ["Łitarhul", "Русский"],
            rows: [
                ["śel've", "привет"],
                ["mel'we", "пока"],
                ["delće", "спасибо"],
                ["dgel'śe", "пожалуйста"],
                ["kaśe", "как"],
                ["spravi", "дела"],
                ["dobre", "хорошо"],
                ["drenge", "плохо"],
                ["jan", "я"],
                ["dun", "ты"],
                ["jon", "он"],
                ["janaś", "она"],
                ["weki", "мы"],
                ["gandoni", "вы"],
                ["joni", "они"],
                ["jescikun", "быть"],
                ["hućes", "человек"],
                ["grad", "город"],
                ["derhul", "лес"],
                ["hata", "дом"],
                ["imej", "имя"],
                ["gdeśe", "откуда"],
                ["zi", "из"],
                ["ne", "не"],
                ["moj", "мой"],
                ["jaky", "какой"],
                ["me", "(частица)"],
                ["iu", "и"]
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const lessonItems = document.querySelectorAll('.lesson-item');
    const contentArea = document.querySelector('.content-area');
    var currentLesson = null;
    var currentTab = 'theory';

    lessonItems.forEach(function(item) {
        item.addEventListener('click', function() {
            lessonItems.forEach(function(li) { li.classList.remove('active'); });
            this.classList.add('active');

            var lessonId = parseInt(this.getAttribute('data-lesson'));
            var lesson = lessonData[lessonId];

            if (lesson) {
                currentLesson = lesson;
                currentTab = 'theory';
                renderLesson();
            } else {
                currentLesson = null;
                var lessonTitle = this.querySelector('.lesson-title').textContent;
                contentArea.innerHTML = '<div class="lesson-content"><h2>' + lessonTitle + '</h2><div class="sections-container"><div class="section-card theory-section"><div class="section-header"><span class="section-icon">📖</span><h3>Theory</h3></div><p>This section covers the theoretical foundations and key concepts for this lesson.</p></div><div class="section-card practice-section"><div class="section-header"><span class="section-icon">⚡</span><h3>Practice</h3></div><p>Apply your knowledge with hands-on exercises and practical tasks.</p></div><div class="section-card homework-section"><div class="section-header"><span class="section-icon">📝</span><h3>Homework</h3></div><p>Complete these assignments to reinforce what you\'ve learned.</p></div></div></div>';
            }
        });
    });

    function renderLesson() {
        if (!currentLesson) return;
        var lesson = currentLesson;
        var html = '<div class="lesson-content">';
        html += '<h2>' + lesson.title + '</h2>';
        if (lesson.subtitle) {
            html += '<p class="lesson-subtitle">' + lesson.subtitle + '</p>';
        }
        if (lesson.objective) {
            html += '<div class="objective-box">';
            html += '<p>🎯 <strong>Цель урока:</strong> ' + lesson.objective + '</p>';
            html += '</div>';
        }

        // Tab buttons
        html += '<div class="tab-bar">';
        html += '<button class="tab-btn theory-tab" data-tab="theory"' + (currentTab === 'theory' ? ' style="background:#1565c0;color:white;"' : '') + '>📖 Теория</button>';
        html += '<button class="tab-btn practice-tab" data-tab="practice"' + (currentTab === 'practice' ? ' style="background:#2e7d32;color:white;"' : '') + '>⚡ Практика</button>';
        html += '<button class="tab-btn homework-tab" data-tab="homework"' + (currentTab === 'homework' ? ' style="background:#e65100;color:white;"' : '') + '>📝 Домашка</button>';
        html += '</div>';

        // Tab content
        html += '<div class="tab-content">';
        if (currentTab === 'theory') {
            html += buildTheoryContent(lesson);
            html += buildVocabSection(lesson);
            html += buildSummarySection(lesson);
            html += '<div class="lesson-intro" style="margin-top:30px;text-align:center;"><p style="color:#667eea;font-weight:600;">Следующий урок: Семья и числа (Rod\'a iu ćisła) 🔢</p></div>';
        } else if (currentTab === 'practice') {
            html += buildPracticeContent(lesson);
        } else if (currentTab === 'homework') {
            html += buildHomeworkContent(lesson);
        }
        html += '</div>';

        // Navigation arrows
        // Theory: only show forward arrow → Практика
        // Practice: show both ← Теория and → Домашка
        // Homework: show ← Практика and → Следующий урок
        if (currentTab === 'theory') {
            html += '<div class="nav-arrows" style="justify-content:flex-end;">';
            html += '<button class="nav-arrow next-arrow nav-switch" data-tab="practice">Практика →</button>';
            html += '</div>';
        } else if (currentTab === 'practice') {
            html += '<div class="nav-arrows">';
            html += '<button class="nav-arrow prev-arrow nav-switch" data-tab="theory">← Теория</button>';
            html += '<button class="nav-arrow next-arrow nav-switch" data-tab="homework">Домашка →</button>';
            html += '</div>';
        } else if (currentTab === 'homework') {
            html += '<div class="nav-arrows">';
            html += '<button class="nav-arrow prev-arrow nav-switch" data-tab="practice">← Практика</button>';
            // Find next lesson data-lesson attribute by looking at the currently active lesson item
            var activeLesson = document.querySelector('.lesson-item.active');
            var nextLessonNum = 2; // default
            if (activeLesson) {
                var currentNum = parseInt(activeLesson.getAttribute('data-lesson'));
                if (!isNaN(currentNum)) {
                    nextLessonNum = currentNum + 1;
                }
            }
            html += '<button class="nav-arrow next-arrow nav-lesson" data-lesson="' + nextLessonNum + '">Урок ' + nextLessonNum + ' →</button>';
            html += '</div>';
        }

        html += '</div>';
        contentArea.innerHTML = html;

        // Attach tab click handlers
        var tabButtons = contentArea.querySelectorAll('.tab-btn');
        for (var i = 0; i < tabButtons.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    currentTab = this.getAttribute('data-tab');
                    renderLesson();
                });
            })(tabButtons[i]);
        }

        // Attach nav arrow click handlers
        var navArrows = contentArea.querySelectorAll('.nav-arrow');
        for (var i = 0; i < navArrows.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    // Check if this is a lesson navigation button
                    var lessonAttr = this.getAttribute('data-lesson');
                    if (lessonAttr) {
                        // Switch to another lesson
                        var targetLesson = document.querySelector('.lesson-item[data-lesson="' + lessonAttr + '"]');
                        if (targetLesson) {
                            targetLesson.click();
                        }
                        return;
                    }
                    // Otherwise switch tab
                    currentTab = this.getAttribute('data-tab');
                    renderLesson();
                });
            })(navArrows[i]);
        }

        // Scroll to top of content area
        contentArea.scrollTop = 0;
    }

    function buildTable(headers, rows, extraClass) {
        var cls = extraClass ? ' ' + extraClass : '';
        var html = '<div class="table-wrapper"><table class="' + cls + '">';
        html += '<thead><tr>';
        for (var i = 0; i < headers.length; i++) {
            html += '<th>' + headers[i] + '</th>';
        }
        html += '</tr></thead><tbody>';
        for (var r = 0; r < rows.length; r++) {
            html += '<tr>';
            for (var c = 0; c < rows[r].length; c++) {
                html += '<td>' + rows[r][c] + '</td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table></div>';
        return html;
    }

    function buildTheoryContent(lesson) {
        if (!lesson.theory || !lesson.theory.topics) return '';
        var html = '<div class="section-card theory-section">';
        html += '<div class="section-header"><span class="section-icon">📖</span><h3>📖 РАЗДЕЛ 1: ТЕОРИЯ</h3></div>';
        var topics = lesson.theory.topics;
        for (var t = 0; t < topics.length; t++) {
            var topic = topics[t];
            html += '<div class="theory-topic">';
            html += '<h4>' + topic.title + '</h4>';
            if (topic.intro) {
                html += '<p>' + topic.intro + '</p>';
            }
            if (topic.type === 'vocab-table') {
                html += buildTable(topic.headers, topic.rows, 'vocab-table');
            } else if (topic.type === 'conj-table') {
                html += buildTable(topic.headers, topic.rows, 'conj-table');
            } else if (topic.type === 'grammar') {
                if (topic.tables) {
                    for (var g = 0; g < topic.tables.length; g++) {
                        var tbl = topic.tables[g];
                        html += '<p><strong>' + tbl.subtitle + '</strong></p>';
                        html += buildTable(tbl.headers, tbl.rows, 'grammar-table compact');
                    }
                }
            } else if (topic.type === 'text' && topic.content) {
                html += topic.content;
            }
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function buildPracticeContent(lesson) {
        if (!lesson.practice || !lesson.practice.exercises) return '';
        var html = '<div class="section-card practice-section">';
        html += '<div class="section-header"><span class="section-icon">⚡</span><h3>🏋️ РАЗДЕЛ 2: ПРАКТИКА</h3></div>';
        var exercises = lesson.practice.exercises;
        for (var e = 0; e < exercises.length; e++) {
            var ex = exercises[e];
            html += '<div class="exercise-block">';
            html += '<div class="exercise-title">' + ex.title + '</div>';
            if (ex.type === 'list') {
                html += '<ul class="exercise-list">';
                for (var i = 0; i < ex.items.length; i++) {
                    html += '<li><span class="russian-phrase">' + ex.items[i] + '</span></li>';
                }
                html += '</ul>';
                if (ex.answers) {
                    html += '<div class="details-wrapper"><details><summary>Показать ответы</summary><div class="answers">';
                    for (var a = 0; a < ex.answers.length; a++) {
                        html += '<div class="answer-line">' + ex.answers[a] + '</div>';
                    }
                    html += '</div></details></div>';
                }
            } else if (ex.type === 'gap-fill') {
                html += '<div class="gap-fill">';
                for (var i = 0; i < ex.items.length; i++) {
                    html += '<div class="gap-fill-item"><span>' + ex.items[i].prompt + ' </span><span class="gap-fill-answer">' + ex.items[i].answer + '</span></div>';
                }
                html += '</div>';
            } else if (ex.type === 'gap-fill-with-hints') {
                html += '<div class="gap-fill">';
                for (var i = 0; i < ex.items.length; i++) {
                    var item = ex.items[i];
                    html += '<div class="gap-fill-item">';
                    if (item.prompt) {
                        html += '<span>' + item.prompt + ' <span class="hint">' + item.hint + '</span> → </span><span class="gap-fill-answer">' + item.answer + '</span>';
                    } else {
                        html += '<span><span class="hint">' + item.hint + '</span> → </span><span class="gap-fill-answer">' + item.answer + '</span>';
                    }
                    html += '</div>';
                }
                html += '</div>';
            } else if (ex.type === 'dialog') {
                html += '<div class="dialog">';
                for (var i = 0; i < ex.lines.length; i++) {
                    html += '<div class="line speaker-' + ex.lines[i].speaker + '">' + ex.lines[i].text + '</div>';
                }
                html += '</div>';
                if (ex.translation) {
                    html += '<div class="details-wrapper"><details><summary>Показать перевод</summary><div class="dialog-translation">';
                    for (var i = 0; i < ex.translation.length; i++) {
                        html += '<div>' + ex.translation[i] + '</div>';
                    }
                    html += '</div></details></div>';
                }
            } else if (ex.type === 'composition') {
                html += '<p><strong>Используя слова:</strong> ' + ex.words + '</p>';
                html += '<p><strong>Примеры:</strong></p><ul class="exercise-list">';
                for (var i = 0; i < ex.examples.length; i++) {
                    html += '<li><span class="litarhul-phrase">' + ex.examples[i] + '</span></li>';
                }
                html += '</ul>';
                if (ex.task) {
                    html += '<p style="margin-top:10px;"><strong>' + ex.task + '</strong></p>';
                }
            }
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function buildHomeworkContent(lesson) {
        if (!lesson.homework || !lesson.homework.assignments) return '';
        var html = '<div class="section-card homework-section">';
        html += '<div class="section-header"><span class="section-icon">📝</span><h3>📝 РАЗДЕЛ 3: ДОМАШНЕЕ ЗАДАНИЕ</h3></div>';
        var assignments = lesson.homework.assignments;
        for (var h = 0; h < assignments.length; h++) {
            var hw = assignments[h];
            html += '<div class="exercise-block">';
            html += '<div class="exercise-title">' + hw.title + '</div>';
            if (hw.type === 'composition-task' && hw.content) {
                html += hw.content;
            } else if (hw.type === 'vocab-list') {
                for (var c = 0; c < hw.categories.length; c++) {
                    var cat = hw.categories[c];
                    html += '<div class="vocab-category"><h5>' + cat.name + '</h5>';
                    html += '<ul class="exercise-list">';
                    for (var i = 0; i < cat.items.length; i++) {
                        html += '<li><span class="litarhul-phrase">' + cat.items[i] + '</span></li>';
                    }
                    html += '</ul></div>';
                }
            } else if (hw.type === 'table-fill') {
                html += '<div class="table-wrapper"><table class="grammar-table compact"><thead><tr>';
                for (var i = 0; i < hw.headers.length; i++) {
                    html += '<th>' + hw.headers[i] + '</th>';
                }
                html += '</tr></thead><tbody>';
                for (var r = 0; r < hw.rows.length; r++) {
                    html += '<tr>';
                    for (var c = 0; c < hw.rows[r].length; c++) {
                        html += '<td>' + hw.rows[r][c] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody></table></div>';
                if (hw.answers) {
                    html += '<div class="details-wrapper"><details><summary>Показать ответы</summary><div class="answers">';
                    for (var i = 0; i < hw.answers.length; i++) {
                        html += '<div class="answer-line">' + hw.answers[i] + '</div>';
                    }
                    html += '</div></details></div>';
                }
            } else if (hw.type === 'translate') {
                html += '<div class="exercise-list"><li><span class="russian-phrase">' + hw.sourceText + '</span></li></div>';
                if (hw.answer) {
                    html += '<div class="details-wrapper"><details><summary>Показать перевод</summary><div class="answers">';
                    html += '<div class="answer-line">' + hw.answer + '</div>';
                    html += '</div></details></div>';
                }
            }
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function buildVocabSection(lesson) {
        if (!lesson.vocab) return '';
        var html = '<div class="section-card theory-section" style="margin-top:24px;">';
        html += '<div class="section-header"><span class="section-icon">📚</span><h3>📚 Словарь к уроку 1</h3></div>';
        html += buildTable(lesson.vocab.headers, lesson.vocab.rows, 'vocab-table');
        html += '</div>';
        return html;
    }

    function buildSummarySection(lesson) {
        if (!lesson.summary) return '';
        var html = '<div class="section-card" style="margin-top:24px;background:#f0faf0;border-color:#a5d6a7;">';
        html += '<div class="section-header"><span class="section-icon">🎯</span><h3 style="color:#2e7d32;">🎯 Итоги урока</h3></div>';
        html += '<div class="summary-box"><h4>В этом уроке вы научились:</h4><ul>';
        var items = lesson.summary.items;
        for (var i = 0; i < items.length; i++) {
            html += '<li>' + items[i] + '</li>';
        }
        html += '</ul></div>';
        html += '<p style="margin-top:12px;font-size:14px;color:#888;">Словарный запас урока: ' + lesson.summary.vocabCount + '</p>';
        html += '</div>';
        return html;
    }
});