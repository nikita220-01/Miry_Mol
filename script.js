// Lesson data for Łitarhul Course
const lessonData = {
    1: {
        title: "Lesson 1: Śel'we iu znajomść",
        subtitle: "Урок 1: Знакомство",
        objective: "Научиться приветствовать, представляться и задавать простые вопросы.",
        summary: {
            items: [
                "Приветствовать и прощаться",
                "Представляться",
                "Задавать простые вопросы",
                "Использовать личные местоимения",
                "Спрягать глагол \"быть\" (jescikun)",
                "Понимать систему падежей: 2 падежа (именительный и родительный)",
                "ВСЕ существительные в Им.п. имеют НУЛЕВОЕ ОКОНЧАНИЕ",
                "Правильно образовывать родительный падеж (окончание -a для ВСЕХ слов)",
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
                        ["Śel'we!", "Привет!"],
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
                    content: '<p><strong>Gdeśe me dun?</strong> — Откуда ты?</p><p><strong>Ответ:</strong></p><p><em>Jan zi grada.</em> — Я из города.</p><p><em>Jan zi derhula.</em> — Я из леса.</p><p><em>Jan zi hata.</em> — Я из дома.</p>'
                },
                {
                    title: "1.6 Грамматика: Падежи существительных",
                    type: "text",
                    content: '<p>В Łitarhul существуют только <strong>2 падежа</strong>:</p><ul><li><strong>Именительный падеж (Им.п.)</strong> — отвечает на вопросы «кто? что?»</li><li><strong>Родительный падеж (Род.п.)</strong> — отвечает на вопросы «кого? чего?»</li></ul><p>📌 <strong>ГЛАВНОЕ ПРАВИЛО:</strong></p><p>Все существительные в именительном падеже имеют <strong>НУЛЕВОЕ ОКОНЧАНИЕ</strong>!</p><p>В именительном падеже — нулевое окончание (ничего не добавляется).</p><p>В родительном падеже — добавляется окончание <strong>-a</strong>.</p>'
                },
                {
                    title: "Таблица падежей",
                    type: "grammar",
                    intro: "",
                    tables: [
                        {
                            subtitle: "",
                            headers: ["Им.п. (кто? что?)", "Род.п. (кого? чего?)"],
                            rows: [
                                ["hućes", "hućesa"],
                                ["grad", "grada"],
                                ["derhul", "derhula"],
                                ["brat", "brata"],
                                ["sestr", "sestra"],
                                ["hat", "hata"],
                                ["mat", "mata"],
                                ["rod", "roda"],
                                ["bab", "baba"],
                                ["ćer", "ćera"],
                                ["stryn", "stryna"]
                            ]
                        }
                    ],
                    note: "📌 Важно: Не существует \"типов\" существительных! Все слова подчиняются одному простому правилу: Им.п. = нулевое окончание, Род.п. = -a."
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
                        "Śel'we! Kaśe me spravi?",
                        "Jan jesciken hućes. (или: Moj imej Jan.)",
                        "Dun jesciket hućes?",
                        "Dobre, delće.",
                        "Gdeśe me dun?",
                        "Jan zi grada.",
                        "Jan zi hata."
                    ]
                },
                {
                    title: "Упражнение 2: Поставьте существительные в родительный падеж",
                    type: "gap-fill",
                    items: [
                        { prompt: "grad →", answer: "grada" },
                        { prompt: "derhul →", answer: "derhula" },
                        { prompt: "hat →", answer: "hata" },
                        { prompt: "hućes →", answer: "hućesa" },
                        { prompt: "brat →", answer: "brata" },
                        { prompt: "s'abrek →", answer: "s'abreka" },
                        { prompt: "mat →", answer: "mata" },
                        { prompt: "sestr →", answer: "sestra" }
                    ]
                },
                {
                    title: "Упражнение 3: Заполните пропуски",
                    type: "gap-fill-with-hints",
                    items: [
                        { prompt: "Śel'we! Kaśe me", hint: "(дела)", answer: "spravi" },
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
                        { speaker: "a", text: "Śel'we! Kaśe me spravi?" },
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
                    words: "jan, dun, hućes, grad, derhul, hat, jescikun, iu, zi",
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
                    content: '<p>Используйте структуру:</p><ul><li>Приветствие</li><li>Ваше имя</li><li>Откуда вы</li><li>Как дела</li><li>Прощание</li></ul><p><strong>Пример:</strong></p><p><em>Śel\'we! Moj imej [ваше имя]. Jan zi [город/деревня]. Dobre, delće. Mel\'we!</em></p>'
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
                                "hat — дом",
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
                            items: ["śel'we, kaśe, spravi, dobre, drenge, mel'we, delće, dgel'śe"]
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
                        ["hat", "_____"],
                        ["hućes", "_____"],
                        ["derhul", "_____"],
                        ["brat", "_____"],
                        ["s'abrek", "_____"],
                        ["mat", "_____"],
                        ["sestr", "_____"]
                    ],
                    answers: ["grada", "hata", "hućesa", "derhula", "brata", "s'abreka", "mata", "sestra"]
                },
                {
                    title: "Задание 4: Переведите текст",
                    type: "translate",
                    sourceText: "Привет! Меня зовут Иван. Я из Москвы. Я человек. Мой друг — Пётр. Он из леса. Как дела? Хорошо, спасибо. Пока!",
                    answer: "Śel'we! Moj imej Iwan. Jan zi Moskwa. Jan jesciken hućes. Moj s'abrek — Peter. Jon zi derhula. Kaśe me spravi? Dobre, delće. Mel'we!"
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
                ["śel'we", "привет"],
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
                ["hat", "дом"],
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
    },
    2: {
        title: "Lesson 2: Rod' iu ćisłi",
        subtitle: "Урок 2: Семья и числа",
        objective: "Научиться считать до 10, рассказывать о семье, говорить «у меня есть…» и правильно применять систему приоритетов окончаний для существительных и прилагательных.",
        summary: {
            items: [
                "Считать до 10",
                "Называть членов семьи",
                "Использовать притяжательные местоимения (склоняются как прилагательные)",
                "Спрягать глагол majekun",
                "Строить конструкцию «у меня есть…»",
                "Применять систему приоритетов окончаний: Существительные: Основа + -i + -a → -ia (после чисел ≥2); Прилагательные/местоимения: Основа + -y + -i + -a → -yia"
            ],
            vocabCount: "~30 новых слов. Общий словарный запас: ~60 слов"
        },
        theory: {
            topics: [
                {
                    title: "2.1 Числа от 1 до 10",
                    type: "vocab-table",
                    headers: ["Число", "Łitarhul"],
                    rows: [
                        ["1", "edn'"],
                        ["2", "zwoh"],
                        ["3", "tryć'"],
                        ["4", "rah'n'"],
                        ["5", "p'en't'"],
                        ["6", "śikś'"],
                        ["7", "sew'"],
                        ["8", "woś'"],
                        ["9", "dew'"],
                        ["10", "edn'ćop"]
                    ],
                    note: "📌 Запомни: Числительные не изменяются!"
                },
                {
                    title: "2.2 Семья (Rod')",
                    type: "vocab-table",
                    headers: ["Łitarhul", "Русский", "Основа"],
                    rows: [
                        ["rod'", "семья", "мягкая"],
                        ["mat'", "мама", "мягкая"],
                        ["oćec", "папа", "твёрдая"],
                        ["syn", "сын", "твёрдая"],
                        ["ćer'", "дочь", "мягкая"],
                        ["brat", "брат", "твёрдая"],
                        ["sestr", "сестра", "твёрдая"],
                        ["bab'", "бабушка", "мягкая"],
                        ["djad", "дедушка", "твёрдая"],
                        ["stryć", "дядя", "ć мягкий"],
                        ["stryn'", "тётя", "мягкая"]
                    ]
                },
                {
                    title: "2.3 Притяжательные местоимения",
                    type: "vocab-table",
                    headers: ["Личное", "Притяжательное", "Перевод"],
                    rows: [
                        ["jan", "jany", "мой"],
                        ["dun", "duny", "твой"],
                        ["jon", "jony", "его"],
                        ["janaś", "janaśy", "её"],
                        ["weki", "weky", "наш"],
                        ["gandoni", "gandony", "ваш"]
                    ],
                    note: "Образуются от личных местоимений и всегда оканчиваются на -y (как прилагательные).<br><strong>Примеры:</strong><br><em>jany oćec</em> — мой папа<br><em>duny mat'</em> — твоя мама<br><em>janaśy sestr</em> — её сестра<br><em>weky rod'</em> — наша семья"
                },
                {
                    title: "2.4 Глагол «иметь» — majekun",
                    type: "conj-table",
                    headers: ["Лицо", "Форма"],
                    rows: [
                        ["jan", "majeken"],
                        ["dun", "majeket"],
                        ["jon / janaś / jonoś", "majeket"],
                        ["weki", "majekem"],
                        ["gandoni", "majeket"],
                        ["joni", "majekent"]
                    ]
                },
                {
                    title: "2.5 Конструкция «У меня есть…» + Правило окончаний существительных",
                    type: "text",
                    content: '<p>В Łitarhul используется прямая конструкция: <strong>Кто + majekun + что</strong>.</p><p>📌 <strong>ГЛАВНОЕ ПРАВИЛО:</strong></p><p>После числительных 2 и больше существительное получает составное окончание по системе приоритетов:</p><p><strong>Основа сущ. + -i (множественное число) + -a (падежное окончание) = -ia</strong></p><p><em>Важно: Суффикс -y добавляется ТОЛЬКО к прилагательным и притяжательным местоимениям. У существительных его нет!</em></p>'
                },
                {
                    title: "Таблица форм после чисел ≥2",
                    type: "grammar",
                    intro: "",
                    tables: [
                        {
                            subtitle: "",
                            headers: ["Им.п. (edn')", "После zwoh, tryć'...", "Разбор окончания"],
                            rows: [
                                ["brat", "bratia", "brat + i + a"],
                                ["sestr", "sestria", "sestr + i + a"],
                                ["syn", "synia", "syn + i + a"],
                                ["ćer'", "ćer'ia", "ćer' + i + a"],
                                ["mat'", "mat'ia", "mat' + i + a"],
                                ["oćec", "oćecia", "oćec + i + a"],
                                ["rod'", "rod'ia", "rod' + i + a"],
                                ["bab'", "bab'ia", "bab' + i + a"],
                                ["djad", "djadia", "djad + i + a"],
                                ["stryć", "stryćia", "stryć + i + a"],
                                ["stryn'", "stryn'ia", "stryn' + i + a"]
                            ]
                        }
                    ]
                },
                {
                    title: "2.6 Приоритеты окончаний: Существительные vs Прилагательные",
                    type: "grammar",
                    intro: "",
                    tables: [
                        {
                            subtitle: "",
                            headers: ["Часть речи", "Формула окончаний", "Пример (weły / brat)", "Мн.ч. + Падеж"],
                            rows: [
                                ["Существительное", "Основа + -i + -a", "brat → bratia", "brat + i + a"],
                                ["Прилагательное", "Основа + -y + -i + -a", "weły → wełyia", "weł + y + i + a"],
                                ["Притяж. местоимение", "Основа + -y + -i + -a", "jany → janyia", "jan + y + i + a"]
                            ]
                        }
                    ],
                    note: "📌 Запомни: -y — маркер прилагательного/местоимения. У существительных его нет никогда."
                },
                {
                    title: "2.7 Примеры предложений",
                    type: "text",
                    content: '<p><strong>С числами и существительными:</strong></p><p><em>Jan majeken edn\' brat.</em> — У меня есть один брат.</p><p><em>Jan majeken zwoh bratia.</em> — У меня есть два брата.</p><p><em>Dun majeket tryć\' sestria.</em> — У тебя есть три сестры.</p><p><em>Weky majekem rah\'n\' synia.</em> — У нас есть четыре сына.</p><p><em>Joni majekent p\'en\'t\' ćer\'ia.</em> — У них есть пять дочерей.</p><p><strong>С прилагательными и местоимениями (приоритеты -y-i-a):</strong></p><p><em>Jany rod\' jesciket weły.</em> — Моя семья большая.</p><p><em>Jan ne majet wełya rod\'a.</em> — У меня нет большой семьи. (ед.ч. род.п.)</p><p><em>Jan ne majet wełyia rod\'ia.</em> — У меня нет больших семей. (мн.ч. род.п.)</p><p><em>Jony stryć jesciket dobry.</em> — Его дядя добрый.</p><p><em>Duny oćec ne jesciket mudry.</em> — Твой папа не мудрый.</p>'
                }
            ]
        },
        practice: {
            exercises: [
                {
                    title: "Упражнение 1: Переведите на Łitarhul",
                    type: "list",
                    items: [
                        "У меня есть один брат.",
                        "У тебя есть две сестры.",
                        "Моя мама добрая.",
                        "У нас есть дедушка и бабушка.",
                        "Его семья большая.",
                        "У меня нет больших семей."
                    ],
                    answers: [
                        "Jan majeken edn' brat.",
                        "Dun majeket zwoh sestria.",
                        "Jany mat' jesciket dobry.",
                        "Weky majekem djad iu bab'.",
                        "Jony rod' jesciket weły.",
                        "Jan ne majet wełyia rod'ia."
                    ]
                },
                {
                    title: "Упражнение 2: Заполните пропуски",
                    type: "gap-fill-with-hints",
                    items: [
                        { prompt: "Jan majeken edn'", hint: "(брат)", answer: "brat" },
                        { prompt: "Dun majeket zwoh", hint: "(сестра — после числа)", answer: "sestria" },
                        { prompt: "", hint: "(моя) rod' jesciket weły.", answer: "Jany" },
                        { prompt: "Weky majekem djad iu", hint: "(бабушка)", answer: "bab'" },
                        { prompt: "Jony oćec jesciket", hint: "(мудрый)", answer: "mudry" },
                        { prompt: "Jan ne majet", hint: "(большой — мн.ч. род.п.) rod'ia.", answer: "wełyia" }
                    ]
                },
                {
                    title: "Упражнение 3: Поставьте слово в правильную форму (после числа ≥2)",
                    type: "gap-fill-with-hints",
                    items: [
                        { prompt: "Jan majeken tryć'", hint: "(syn)", answer: "synia" },
                        { prompt: "Dun majeket p'en't'", hint: "(ćer')", answer: "ćer'ia" },
                        { prompt: "Weky majekem zwoh", hint: "(stryć)", answer: "stryćia" },
                        { prompt: "Jon majeket sew'", hint: "(brat)", answer: "bratia" },
                        { prompt: "Jan ne majet miłyia", hint: "(rod' — мн.ч. род.п.)", answer: "rod'ia" }
                    ]
                },
                {
                    title: "Упражнение 4: Диалог",
                    type: "dialog",
                    lines: [
                        { speaker: "a", text: "Śel've! Jaky me duny imej?" },
                        { speaker: "b", text: "Moj imej Nikita. A dun?" },
                        { speaker: "a", text: "Moj imej Peter. Jaky me duny rod'?" },
                        { speaker: "b", text: "Jany rod' jesciket weły. Jan majeken edn' brat iu zwoh sestria." },
                        { speaker: "a", text: "Dobre! Jany rod' jesciket miły. Jan majeken edn' sestr." },
                        { speaker: "b", text: "Kaśe me spravi?" },
                        { speaker: "a", text: "Dobre, delće! Mel'we!" }
                    ],
                    translation: [
                        "A: Привет! Как твоё имя?",
                        "B: Моё имя Никита. А твоё?",
                        "A: Моё имя Пётр. Какая у тебя семья?",
                        "B: Моя семья большая. У меня есть один брат и две сестры.",
                        "A: Хорошо! Моя семья маленькая. У меня есть одна сестра.",
                        "B: Как дела?",
                        "A: Хорошо, спасибо! Пока!"
                    ]
                },
                {
                    title: "Упражнение 5: Составьте предложения",
                    type: "composition",
                    words: "jan, majekun, rod', mat', oćec, brat, sestr, syn, ćer', djad, bab', stryć, stryn', edn', zwoh, tryć', iu, jany, weky, weły, miły, dobry",
                    examples: [
                        "Jany rod' jesciket weły.",
                        "Jan majeken edn' brat iu edn' sestr.",
                        "Weky majekem zwoh synia iu tryć' ćer'ia.",
                        "Jan ne majet wełyia rod'ia."
                    ],
                    task: "Составьте ещё 5 предложений!"
                }
            ]
        },
        homework: {
            assignments: [
                {
                    title: "Задание 1: Расскажите о своей семье (7-10 предложений)",
                    type: "composition-task",
                    content: '<p>Используйте план:</p><ul><li>Приветствие</li><li>Размер семьи (weły / miły)</li><li>Кто есть в семье (majekun + числа + -ia)</li><li>Прилагательные к членам семьи</li><li>Прощание</li></ul><p><strong>Пример:</strong></p><p><em>Śel\'ve! Jany rod\' jesciket weły. Jan majeken oćec iu mat\'. Jan majeken edn\' brat iu zwoh sestria. Moj brat jesciket miły. Moj sestria jesciket dobre. Mel\'we!</em></p>'
                },
                {
                    title: "Задание 2: Выучите слова",
                    type: "vocab-list",
                    categories: [
                        {
                            name: "Числа (10):",
                            items: ["edn', zwoh, tryć', rah'n', p'en't', śikś', sew', woś', dew', edn'ćop"]
                        },
                        {
                            name: "Семья (11):",
                            items: ["rod', mat', oćec, syn, ćer', brat, sestr, bab', djad, stryć, stryn'"]
                        },
                        {
                            name: "Притяжательные (6):",
                            items: ["jany, duny, jony, janaśy, weky, gandony"]
                        }
                    ]
                },
                {
                    title: "Задание 3: Переведите текст",
                    type: "translate",
                    sourceText: "Привет! Меня зовут Никита. Моя семья большая. У меня есть папа и мама. У меня есть один брат и две сестры. Мой брат маленький. Мои сёстры добрые. У нас есть дедушка и бабушка. Наша семья хорошая. У меня нет больших семей.",
                    answer: "Śel've! Moj imej Nikita. Jany rod' jesciket weły. Jan majeken oćec iu mat'. Jan majeken edn' brat iu zwoh sestria. Jany brat jesciket miły. Jany sestria jesciket dobre. Weky majekem djad iu bab'. Weky rod' jesciket dobry. Jan ne majet wełyia rod'ia."
                },
                {
                    title: "Задание 4: Сосчитайте",
                    type: "gap-fill",
                    items: [
                        { prompt: "2 брата =", answer: "zwoh bratia" },
                        { prompt: "3 сестры =", answer: "tryć' sestria" },
                        { prompt: "4 сына =", answer: "rah'n' synia" },
                        { prompt: "5 дочерей =", answer: "p'en't' ćer'ia" },
                        { prompt: "6 дедушек =", answer: "śikś' djadia" }
                    ]
                },
                {
                    title: "Задание 5 (бонус): Придумайте рассказ",
                    type: "composition-task",
                    content: '<p>Составьте рассказ о вымышленной семье (8-12 предложений). Используйте:</p><ul><li>Числа от 1 до 10</li><li>Всех членов семьи</li><li>Прилагательные в разных формах (weły, wełyi, wełya, wełyia)</li><li>Союз iu</li></ul>'
                }
            ]
        },
        vocab: {
            headers: ["Łitarhul", "Русский"],
            rows: [
                ["edn'", "один"],
                ["zwoh", "два"],
                ["tryć'", "три"],
                ["rah'n'", "четыре"],
                ["p'en't'", "пять"],
                ["śikś'", "шесть"],
                ["sew'", "семь"],
                ["woś'", "восемь"],
                ["dew'", "девять"],
                ["edn'ćop", "десять"],
                ["rod'", "семья"],
                ["mat'", "мама"],
                ["oćec", "папа"],
                ["syn", "сын"],
                ["ćer'", "дочь"],
                ["brat", "брат"],
                ["sestr", "сестра"],
                ["bab'", "бабушка"],
                ["djad", "дедушка"],
                ["stryć", "дядя"],
                ["stryn'", "тётя"],
                ["jany", "мой"],
                ["duny", "твой"],
                ["jony", "его"],
                ["janaśy", "её"],
                ["weky", "наш"],
                ["gandony", "ваш"],
                ["majekun", "иметь"],
                ["weły", "большой"],
                ["miły", "маленький"],
                ["mudry", "мудрый"],
                ["dobry", "добрый"]
            ]
        }
    }
};

// API base URL
const API_BASE = 'http://localhost:3001/api';

// Auth state
let currentUser = localStorage.getItem('mirymol-currentUser') || null;
let currentUserId = localStorage.getItem('mirymol-currentUserId') || null;

// Progress state
async function getProgress() {
    if (!currentUserId) return {};
    try {
        const res = await fetch(API_BASE + '/progress/' + currentUserId);
        const data = await res.json();
        return data.progress || {};
    } catch (e) {
        return {};
    }
}
async function markLessonComplete(lessonId) {
    if (!currentUserId) return;
    try {
        await fetch(API_BASE + '/progress/' + currentUserId + '/' + lessonId, { method: 'POST' });
    } catch (e) {}
}
async function isLessonComplete(lessonId) {
    const progress = await getProgress();
    return !!progress[lessonId];
}
async function getCompletedCount() {
    const progress = await getProgress();
    return Object.keys(progress).length;
}

// Settings state
const settings = {
    showVocabTab: true,
    theme: 'default'
};

// Theme definitions
const themes = {
    default: {
        name: 'По умолчанию',
        primary: '#667eea',
        secondary: '#764ba2',
        bg: '#f0f2f5',
        cardBg: '#ffffff',
        text: '#333333',
        textSecondary: '#666666'
    },
    dark: {
        name: 'Тёмная',
        primary: '#5a6fd6',
        secondary: '#6a3d9a',
        bg: '#1a1a2e',
        cardBg: '#16213e',
        text: '#e0e0e0',
        textSecondary: '#a0a0a0'
    },
    forest: {
        name: 'Лесная',
        primary: '#2e7d32',
        secondary: '#1b5e20',
        bg: '#e8f5e9',
        cardBg: '#ffffff',
        text: '#1b5e20',
        textSecondary: '#4a7c4f'
    },
    ocean: {
        name: 'Океан',
        primary: '#0277bd',
        secondary: '#01579b',
        bg: '#e1f5fe',
        cardBg: '#ffffff',
        text: '#01579b',
        textSecondary: '#4a7c4f'
    },
    sunset: {
        name: 'Закат',
        primary: '#e65100',
        secondary: '#bf360c',
        bg: '#fbe9e7',
        cardBg: '#ffffff',
        text: '#3e2723',
        textSecondary: '#6d4c41'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName] || themes.default;
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--bg', theme.bg);
    document.documentElement.style.setProperty('--card-bg', theme.cardBg);
    document.documentElement.style.setProperty('--text', theme.text);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    settings.theme = themeName;
    localStorage.setItem('mirymol-theme', themeName);
    // Save to server if logged in
    if (currentUserId) {
        fetch(API_BASE + '/settings/' + currentUserId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ showVocabTab: settings.showVocabTab, theme: themeName })
        }).catch(function() {});
    }
}

function loadSettings() {
    const savedTheme = localStorage.getItem('mirymol-theme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
    const savedVocab = localStorage.getItem('mirymol-showVocab');
    if (savedVocab !== null) {
        settings.showVocabTab = savedVocab === 'true';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const lessonItems = document.querySelectorAll('.lesson-item');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.querySelector('.content-area');
    var currentLesson = null;
    var currentTab = 'theory';
    var currentPage = 'dashboard';

    loadSettings();
    renderAuthOverlay();

    // Nav link click handlers
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(function(l) { l.classList.remove('active'); });
            this.classList.add('active');
            currentPage = this.getAttribute('data-page');

            if (currentPage === 'settings') {
                currentLesson = null;
                renderSettings();
            } else if (currentPage === 'dashboard') {
                currentLesson = null;
                renderDashboard();
            } else if (currentPage === 'progress') {
                currentLesson = null;
                renderProgress();
            } else {
                currentLesson = null;
                contentArea.innerHTML = '<div class="welcome-message"><h1>' + this.textContent + '</h1><p>Coming soon!</p></div>';
            }
        });
    });

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

    async function renderLesson() {
        if (!currentLesson) return;
        if (!settings.showVocabTab && currentTab === 'vocab') {
            currentTab = 'homework';
        }
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
        if (settings.showVocabTab) {
            html += '<button class="tab-btn vocab-tab" data-tab="vocab"' + (currentTab === 'vocab' ? ' style="background:#7b1fa2;color:white;"' : '') + '>📚 Словарь</button>';
        }
        html += '</div>';

        // Tab content
        html += '<div class="tab-content">';
        if (currentTab === 'theory') {
            html += buildTheoryContent(lesson);
            html += buildSummarySection(lesson);
            html += '<div class="lesson-intro" style="margin-top:30px;text-align:center;"><p style="color:#667eea;font-weight:600;">Следующий урок: Rod\' iu ćisłi (Семья и числа) 🔢</p></div>';
        } else if (currentTab === 'practice') {
            html += buildPracticeContent(lesson);
        } else if (currentTab === 'homework') {
            html += buildHomeworkContent(lesson);
        } else if (currentTab === 'vocab') {
            html += buildVocabSection(lesson);
        }
        html += '</div>';

        // Navigation arrows
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
            if (settings.showVocabTab) {
                html += '<button class="nav-arrow next-arrow nav-switch vocab-arrow" data-tab="vocab">Словарь →</button>';
            } else {
                var activeLesson = document.querySelector('.lesson-item.active');
                var nextLessonNum = 2;
                if (activeLesson) {
                    var currentNum = parseInt(activeLesson.getAttribute('data-lesson'));
                    if (!isNaN(currentNum)) nextLessonNum = currentNum + 1;
                }
                html += '<button class="nav-arrow next-arrow nav-lesson" data-lesson="' + nextLessonNum + '">Урок ' + nextLessonNum + ' →</button>';
            }
            html += '</div>';
        } else if (currentTab === 'vocab') {
            html += '<div class="nav-arrows">';
            html += '<button class="nav-arrow prev-arrow nav-switch" data-tab="homework">← Домашка</button>';
            var activeLesson = document.querySelector('.lesson-item.active');
            var nextLessonNum = 2;
            if (activeLesson) {
                var currentNum = parseInt(activeLesson.getAttribute('data-lesson'));
                if (!isNaN(currentNum)) {
                    nextLessonNum = currentNum + 1;
                }
            }
            html += '<button class="nav-arrow next-arrow nav-lesson" data-lesson="' + nextLessonNum + '">Урок ' + nextLessonNum + ' →</button>';
            html += '</div>';
        }

        // Mark as complete button
        var activeLesson = document.querySelector('.lesson-item.active');
        var lessonId = activeLesson ? parseInt(activeLesson.getAttribute('data-lesson')) : null;
        var isComplete = lessonId ? isLessonComplete(lessonId) : false;
        html += '<div class="complete-section">';
        if (isComplete) {
            html += '<div class="complete-badge">✅ Урок пройден</div>';
        } else if (currentUser) {
            html += '<button class="complete-btn" data-lesson="' + lessonId + '">✅ Отметить урок как пройденный</button>';
        }
        html += '</div>';

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
                    var lessonAttr = this.getAttribute('data-lesson');
                    if (lessonAttr) {
                        var targetLesson = document.querySelector('.lesson-item[data-lesson="' + lessonAttr + '"]');
                        if (targetLesson) {
                            targetLesson.click();
                        }
                        return;
                    }
                    currentTab = this.getAttribute('data-tab');
                    renderLesson();
                });
            })(navArrows[i]);
        }

        // Attach complete button handler
        var completeBtn = contentArea.querySelector('.complete-btn');
        if (completeBtn) {
            completeBtn.addEventListener('click', function() {
                var lid = parseInt(this.getAttribute('data-lesson'));
                if (lid) {
                    markLessonComplete(lid);
                    renderLesson();
                }
            });
        }

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
                if (topic.note) {
                    html += '<p class="info-note">' + topic.note + '</p>';
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
        var activeLesson = document.querySelector('.lesson-item.active');
        var lessonNum = activeLesson ? parseInt(activeLesson.getAttribute('data-lesson')) : 1;
        var html = '<div class="section-card">';
        html += '<div class="section-header"><span class="section-icon">📚</span><h3 style="color:#7b1fa2;">📚 Словарь к уроку ' + lessonNum + '</h3></div>';
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

    async function renderAuthOverlay() {
        if (currentUser) {
            document.querySelector('#userName').textContent = currentUser;
            document.querySelector('#userAvatar').textContent = currentUser.charAt(0).toUpperCase();
            document.querySelector('.top-nav').style.display = 'flex';
            document.querySelector('.app-container').style.display = 'flex';
            var overlay = document.getElementById('authOverlay');
            if (overlay) overlay.remove();

            // Setup user dropdown
            var userMenu = document.getElementById('userMenu');
            var dropdown = document.getElementById('userDropdown');
            userMenu.onclick = function(e) {
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                e.stopPropagation();
            };
            document.onclick = function() {
                dropdown.style.display = 'none';
            };
            document.getElementById('logoutBtn').onclick = function() {
                currentUser = null;
                currentUserId = null;
                localStorage.removeItem('mirymol-currentUser');
                localStorage.removeItem('mirymol-currentUserId');
                renderAuthOverlay();
            };
            return;
        }
        document.querySelector('.top-nav').style.display = 'none';
        document.querySelector('.app-container').style.display = 'none';
        if (document.getElementById('authOverlay')) return;
        var overlay = document.createElement('div');
        overlay.id = 'authOverlay';
        overlay.className = 'auth-overlay';
        overlay.innerHTML = '<div class="auth-card">' +
            '<div class="auth-brand">Miry Moł</div>' +
            '<p class="auth-subtitle">Łitarhul Language Course</p>' +
            '<div id="authForm">' +
                '<div class="auth-tabs">' +
                    '<button class="auth-tab active" data-mode="login">Войти</button>' +
                    '<button class="auth-tab" data-mode="register">Регистрация</button>' +
                '</div>' +
                '<div class="auth-fields">' +
                    '<input type="text" id="authUsername" placeholder="Имя пользователя" class="auth-input">' +
                    '<input type="password" id="authPassword" placeholder="Пароль" class="auth-input">' +
                    '<p id="authError" class="auth-error"></p>' +
                    '<button id="authSubmit" class="auth-submit">Войти</button>' +
                '</div>' +
            '</div>' +
        '</div>';
        document.body.appendChild(overlay);

        var tabs = overlay.querySelectorAll('.auth-tab');
        var mode = 'login';
        tabs.forEach(function(t) {
            t.addEventListener('click', function() {
                tabs.forEach(function(x) { x.classList.remove('active'); });
                this.classList.add('active');
                mode = this.getAttribute('data-mode');
                document.getElementById('authSubmit').textContent = mode === 'login' ? 'Войти' : 'Зарегистрироваться';
                document.getElementById('authError').textContent = '';
            });
        });

        document.getElementById('authSubmit').addEventListener('click', async function() {
            var username = document.getElementById('authUsername').value.trim();
            var password = document.getElementById('authPassword').value.trim();
            var errorEl = document.getElementById('authError');
            if (!username || !password) {
                errorEl.textContent = 'Заполните все поля';
                return;
            }
            try {
                var res, data;
                if (mode === 'register') {
                    res = await fetch(API_BASE + '/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    });
                    data = await res.json();
                    if (!res.ok) {
                        errorEl.textContent = data.error || 'Ошибка регистрации';
                        return;
                    }
                } else {
                    res = await fetch(API_BASE + '/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    });
                    data = await res.json();
                    if (!res.ok) {
                        errorEl.textContent = data.error || 'Неверное имя или пароль';
                        return;
                    }
                }
                currentUser = username;
                currentUserId = data.id;
                localStorage.setItem('mirymol-currentUser', currentUser);
                localStorage.setItem('mirymol-currentUserId', currentUserId);
                var sRes = await fetch(API_BASE + '/settings/' + currentUserId);
                var sData = await sRes.json();
                settings.showVocabTab = sData.showVocabTab;
                settings.theme = sData.theme;
                applyTheme(sData.theme);
                renderAuthOverlay();
                var dashLink = document.querySelector('.nav-link[data-page="dashboard"]');
                if (dashLink) dashLink.click();
            } catch (e) {
                errorEl.textContent = 'Ошибка соединения с сервером';
            }
        });

        document.getElementById('authPassword').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') document.getElementById('authSubmit').click();
        });
    }

    async function renderDashboard() {
        if (!currentUser) { renderAuthOverlay(); return; }
        var completed = await getCompletedCount();
        var totalLessons = Object.keys(lessonData).length;
        var progressPercent = totalLessons > 0 ? Math.round(completed / totalLessons * 100) : 0;
        contentArea.innerHTML = '<div class="lesson-content">' +
            '<h2>🏠 Dashboard</h2>' +
            '<p class="lesson-subtitle">Добро пожаловать, <strong>' + currentUser + '</strong>!</p>' +
            '<div class="section-card">' +
                '<div class="section-header"><span class="section-icon">📊</span><h3 style="color:var(--primary);">Ваш прогресс</h3></div>' +
                '<div class="progress-stat">' +
                    '<div class="progress-stat-number">' + completed + '</div>' +
                    '<div class="progress-stat-label">из ' + totalLessons + ' уроков пройдено</div>' +
                '</div>' +
                '<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + progressPercent + '%;"></div></div>' +
                '<div class="progress-stat-percent">' + progressPercent + '% завершено</div>' +
            '</div>' +
            '<div class="section-card" style="margin-top:24px;">' +
                '<div class="section-header"><span class="section-icon">📖</span><h3 style="color:var(--primary);">Быстрый старт</h3></div>' +
                '<p style="color:var(--text-secondary);">Выберите урок из бокового меню, чтобы начать обучение.</p>' +
            '</div>' +
        '</div>';
    }

    async function renderProgress() {
        if (!currentUser) { renderAuthOverlay(); return; }
        var completed = await getCompletedCount();
        var total = Object.keys(lessonData).length;
        var pct = total > 0 ? Math.round(completed / total * 100) : 0;
        var html = '<div class="lesson-content">' +
            '<h2>📈 Progress</h2>' +
            '<p class="lesson-subtitle">Ваш прогресс по курсу</p>' +
            '<div class="section-card">' +
                '<div class="section-header"><span class="section-icon">📊</span><h3 style="color:var(--primary);">Статистика</h3></div>' +
                '<div class="progress-stat">' +
                    '<div class="progress-stat-number">' + completed + '</div>' +
                    '<div class="progress-stat-label">уроков пройдено из ' + total + '</div>' +
                '</div>' +
                '<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + pct + '%;"></div></div>' +
                '<div class="progress-stat-percent">' + pct + '% курса завершено</div>' +
            '</div>' +
            '<div class="section-card" style="margin-top:24px;">' +
                '<div class="section-header"><span class="section-icon">📋</span><h3 style="color:var(--primary);">Список уроков</h3></div>';
        var lessonIds = Object.keys(lessonData).sort(function(a,b) { return a - b; });
        for (var i = 0; i < lessonIds.length; i++) {
            var id = lessonIds[i];
            var ls = lessonData[id];
            var done = await isLessonComplete(id);
            html += '<div class="lesson-progress-item' + (done ? ' done' : '') + '" data-lesson="' + id + '">' +
                '<span class="lesson-progress-icon">' + (done ? '✅' : '⏳') + '</span>' +
                '<span class="lesson-progress-title">' + ls.title + '</span>' +
            '</div>';
        }
        html += '</div></div>';
        contentArea.innerHTML = html;

        var items = contentArea.querySelectorAll('.lesson-progress-item');
        for (var i = 0; i < items.length; i++) {
            (function(el) {
                el.addEventListener('click', function() {
                    var lid = this.getAttribute('data-lesson');
                    var target = document.querySelector('.lesson-item[data-lesson="' + lid + '"]');
                    if (target) target.click();
                });
            })(items[i]);
        }
    }

    function renderSettings() {
        var html = '<div class="lesson-content">';
        html += '<h2>⚙️ Settings</h2>';
        html += '<p class="lesson-subtitle">Настройки приложения</p>';

        html += '<div class="section-card">';
        html += '<div class="section-header"><span class="section-icon">🎨</span><h3 style="color:var(--primary);">Тема оформления</h3></div>';
        html += '<div class="theme-grid">';
        var themeKeys = Object.keys(themes);
        for (var t = 0; t < themeKeys.length; t++) {
            var key = themeKeys[t];
            var th = themes[key];
            var isActive = settings.theme === key;
            html += '<div class="theme-card' + (isActive ? ' active' : '') + '" data-theme="' + key + '">';
            html += '<div class="theme-preview" style="background:' + th.bg + ';border:2px solid ' + th.primary + ';">';
            html += '<div class="theme-preview-bar" style="background:linear-gradient(135deg,' + th.primary + ',' + th.secondary + ');"></div>';
            html += '<div class="theme-preview-body" style="background:' + th.cardBg + ';">';
            html += '<div class="theme-preview-line" style="background:' + th.primary + ';width:60%;"></div>';
            html += '<div class="theme-preview-line" style="background:' + th.textSecondary + ';width:40%;"></div>';
            html += '</div></div>';
            html += '<div class="theme-name">' + th.name + '</div>';
            if (isActive) html += '<div class="theme-check">✓</div>';
            html += '</div>';
        }
        html += '</div></div>';

        html += '<div class="section-card" style="margin-top:24px;">';
        html += '<div class="section-header"><span class="section-icon">📚</span><h3 style="color:var(--primary);">Вкладка словаря</h3></div>';
        html += '<div class="toggle-row">';
        html += '<span>Показывать вкладку «Словарь» в уроках</span>';
        html += '<label class="toggle-switch"><input type="checkbox" id="vocabToggle"' + (settings.showVocabTab ? ' checked' : '') + '><span class="toggle-slider"></span></label>';
        html += '</div></div>';

        html += '<div class="section-card" style="margin-top:24px;">';
        html += '<div class="section-header"><span class="section-icon">ℹ️</span><h3 style="color:var(--primary);">О приложении</h3></div>';
        html += '<p style="color:var(--text-secondary);font-size:14px;line-height:1.7;">Miry Moł — интерактивный курс языка Łitarhul. Версия 1.0.0</p>';
        html += '</div>';

        html += '</div>';
        contentArea.innerHTML = html;

        var themeCards = contentArea.querySelectorAll('.theme-card');
        for (var i = 0; i < themeCards.length; i++) {
            (function(card) {
                card.addEventListener('click', function() {
                    var themeName = this.getAttribute('data-theme');
                    applyTheme(themeName);
                    renderSettings();
                });
            })(themeCards[i]);
        }

        var vocabToggle = document.getElementById('vocabToggle');
        if (vocabToggle) {
            vocabToggle.addEventListener('change', function() {
                settings.showVocabTab = this.checked;
                localStorage.setItem('mirymol-showVocab', settings.showVocabTab);
                // Save to server if logged in
                if (currentUserId) {
                    fetch(API_BASE + '/settings/' + currentUserId, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ showVocabTab: settings.showVocabTab, theme: settings.theme })
                    }).catch(function() {});
                }
            });
        }
    }
});