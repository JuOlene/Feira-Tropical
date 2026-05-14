/*=============== DATA & CONFIG (23 FRUITS) ===============*/
const fruitResults = {
    morango: { name: "Morango", icon: "🍓", theme: "theme-morango", tags: ["Carismático", "Sociável", "Romântico"], desc: "Você é a doçura e o carisma em pessoa. Sua presença ilumina o ambiente." },
    limao: { name: "Limão", icon: "🍋", theme: "theme-limao", tags: ["Intenso", "Energético", "Ousado"], desc: "Sua energia é contagiante e sua coragem para inovar é sua maior força." },
    manga: { name: "Manga", icon: "🥭", theme: "theme-manga", tags: ["Criativo", "Divertido", "Espontâneo"], desc: "Você é uma explosão de cores e ideias. A vida com você nunca é monótona." },
    uva: { name: "Uva", icon: "🍇", theme: "theme-uva", tags: ["Sofisticado", "Misterioso", "Elegante"], desc: "Elegância e mistério te definem. Você traz um ar de exclusividade por onde passa." },
    coco: { name: "Coco", icon: "🥥", theme: "theme-coco", tags: ["Tranquilo", "Equilibrado", "Minimalista"], desc: "A calma e o equilíbrio são sua essência. Você encontra beleza na simplicidade." },
    abacaxi: { name: "Abacaxi", icon: "🍍", theme: "theme-abacaxi", tags: ["Forte", "Confiante", "Autêntico"], desc: "Você nasceu para brilhar. Sua confiança e autenticidade são como uma coroa tropical." },
    pitaya: { name: "Pitaya", icon: "🌵", theme: "theme-pitaya", tags: ["Moderno", "Estiloso", "Futurista"], desc: "Sempre à frente do tempo. Seu estilo é vibrante, único e totalmente contemporâneo." },
    melancia: { name: "Melancia", icon: "🍉", theme: "theme-melancia", tags: ["Alegre", "Livre", "Descontraído"], desc: "Sua alma é leve e refrescante. Você vive a vida com alegria e total liberdade." },
    kiwi: { name: "Kiwi", icon: "🥝", theme: "theme-kiwi", tags: ["Curioso", "Criativo", "Diferente"], desc: "Você vê o mundo por outra perspectiva. Sua curiosidade te leva a lugares únicos." },
    banana: { name: "Banana", icon: "🍌", theme: "theme-banana", tags: ["Leve", "Engraçado", "Amigável"], desc: "Com você, tudo fica mais leve. Seu bom humor é o seu melhor acessório." },
    laranja: { name: "Laranja", icon: "🍊", theme: "theme-laranja", tags: ["Vibrante", "Otimista", "Comunicativo"], desc: "Sua energia é solar! Você comunica otimismo e vitalidade por onde passa." },
    jabuticaba: { name: "Jabuticaba", icon: "🟣", theme: "theme-jabuticaba", tags: ["Raro", "Reservado", "Sofisticado"], desc: "Como uma joia escondida, sua sofisticação é profunda e reservada." },
    caju: { name: "Caju", icon: "🍑", theme: "theme-caju", tags: ["Original", "Imprevisível", "Criativo"], desc: "Você é a própria essência da originalidade brasileira. Criatividade sem limites." },
    pessego: { name: "Pêssego", icon: "🍑", theme: "theme-pessego", tags: ["Delicado", "Gentil", "Acolhedor"], desc: "Sua gentileza é sua marca. Você acolhe e suaviza o mundo ao seu redor." },
    maca: { name: "Maçã", icon: "🍎", theme: "theme-maca", tags: ["Inteligente", "Clássico", "Confiável"], desc: "Você é o equilíbrio perfeito entre o clássico e o confiável. Inteligência pura." },
    maracuja: { name: "Maracujá", icon: "🟡", theme: "theme-maracuja", tags: ["Observador", "Sensível", "Calmo"], desc: "Sua sensibilidade é sua força. Você observa o mundo com calma e sabedoria." },
    cereja: { name: "Cereja", icon: "🍒", theme: "theme-cereja", tags: ["Charmoso", "Marcante", "Extrovertido"], desc: "Você é o detalhe que faz a diferença. Charmoso e impossível de ignorar." },
    goiaba: { name: "Goiaba", icon: "🍐", theme: "theme-goiaba", tags: ["Simples", "Autêntico", "Carinhoso"], desc: "Sua autenticidade é doce e simples. Você é a conexão pura com as raízes." },
    acai: { name: "Açaí", icon: "🥣", theme: "theme-acai", tags: ["Urbano", "Competitivo", "Intenso"], desc: "Energia pura e urbana. Você encara a vida com intensidade e foco total." },
    ameixa: { name: "Ameixa", icon: "🟣", theme: "theme-ameixa", tags: ["Introspectivo", "Elegante", "Profundo"], desc: "Sua profundidade é fascinante. Você traz uma elegância introspectiva única." },
    graviola: { name: "Graviola", icon: "🍈", theme: "theme-graviola", tags: ["Tranquilo", "Diferente", "Misterioso"], desc: "Exótico e sereno. Você desperta curiosidade e calma ao mesmo tempo." },
    tangerina: { name: "Tangerina", icon: "🍊", theme: "theme-tangerina", tags: ["Energético", "Sociável", "Divertido"], desc: "Sempre pronto para o próximo encontro. Sua sociabilidade é vibrante." },
    blueberry: { name: "Blueberry", icon: "🫐", theme: "theme-blueberry", tags: ["Moderno", "Reservado", "Estiloso"], desc: "Estilo minimalista e contemporâneo. Você é cool e sofisticado." }
};

const quizData = [
    { question: "Como seus amigos te descreveriam?", options: [
        { id: 1, text: "Divertido(a)", icon: "😄", archetypes: ["manga", "melancia", "banana", "tangerina", "laranja"] },
        { id: 2, text: "Misterioso(a)", icon: "🎭", archetypes: ["uva", "jabuticaba", "ameixa", "graviola", "maracuja"] },
        { id: 3, text: "Calmo(a)", icon: "🧘", archetypes: ["coco", "pessego", "goiaba", "maca"] },
        { id: 4, text: "Criativo(a)", icon: "🎨", archetypes: ["morango", "pitaya", "kiwi", "caju", "blueberry"] },
        { id: 5, text: "Ousado(a)", icon: "🔥", archetypes: ["limao", "abacaxi", "acai", "cereja"] }
    ]},
    { question: "Qual ambiente combina mais com você?", options: [
        { id: 6, text: "Praia", icon: "🏖️", archetypes: ["manga", "melancia", "coco", "goiaba"] },
        { id: 7, text: "Cidade à noite", icon: "🌃", archetypes: ["uva", "acai", "blueberry", "pitaya"] },
        { id: 8, text: "Natureza", icon: "🍃", archetypes: ["kiwi", "graviola", "maracuja", "caju"] },
        { id: 9, text: "Festa", icon: "🎉", archetypes: ["morango", "limao", "tangerina", "cereja"] },
        { id: 10, text: "Café tranquilo", icon: "☕", archetypes: ["maca", "pessego", "banana", "laranja"] }
    ]},
    { question: "Seu estilo é mais:", options: [
        { id: 11, text: "Colorido e chamativo", icon: "🌈", archetypes: ["manga", "morango", "laranja", "pitaya"] },
        { id: 12, text: "Minimalista", icon: "⚪", archetypes: ["coco", "blueberry", "maca", "ameixa"] },
        { id: 13, text: "Fashion e moderno", icon: "🧥", archetypes: ["uva", "acai", "cereja", "abacaxi"] },
        { id: 14, text: "Casual e confortável", icon: "👕", archetypes: ["banana", "goiaba", "pessego", "melancia"] },
        { id: 15, text: "Diferente e criativo", icon: "🎨", archetypes: ["kiwi", "caju", "graviola", "jabuticaba"] }
    ]},
    { question: "O que mais importa em uma roupa?", options: [
        { id: 16, text: "Conforto", icon: "☁️", archetypes: ["coco", "banana", "pessego", "goiaba"] },
        { id: 17, text: "Estilo", icon: "✨", archetypes: ["uva", "cereja", "abacaxi", "morango"] },
        { id: 18, text: "Exclusividade", icon: "💎", archetypes: ["jabuticaba", "acai", "pitaya", "blueberry"] },
        { id: 19, text: "Expressão pessoal", icon: "🎭", archetypes: ["caju", "kiwi", "manga", "tangerina"] },
        { id: 20, text: "Chamar atenção", icon: "👀", archetypes: ["limao", "melancia", "laranja", "maca"] }
    ]},
    { question: "Qual cor mais combina com você?", options: [
        { id: 21, text: "Verde", icon: "🌿", archetypes: ["limao", "kiwi", "graviola", "goiaba"] },
        { id: 22, text: "Roxo", icon: "🍇", archetypes: ["uva", "jabuticaba", "ameixa", "blueberry"] },
        { id: 23, text: "Vermelho", icon: "🍓", archetypes: ["morango", "cereja", "melancia", "maca"] },
        { id: 24, text: "Amarelo", icon: "🥭", archetypes: ["manga", "abacaxi", "laranja", "banana"] },
        { id: 25, text: "Branco", icon: "🥥", archetypes: ["coco", "pessego", "maracuja", "caju"] }
    ]},
    { question: "Você prefere:", options: [
        { id: 26, text: "Liderar", icon: "👑", archetypes: ["limao", "abacaxi", "acai", "maca"] },
        { id: 27, text: "Observar", icon: "🔭", archetypes: ["uva", "maracuja", "ameixa", "jabuticaba"] },
        { id: 28, text: "Criar", icon: "🎨", archetypes: ["manga", "caju", "kiwi", "pitaya"] },
        { id: 29, text: "Socializar", icon: "🤝", archetypes: ["morango", "tangerina", "laranja", "banana"] },
        { id: 30, text: "Relaxar", icon: "🌊", archetypes: ["coco", "melancia", "pessego", "goiaba"] }
    ]},
    { question: "Qual energia mais te representa?", options: [
        { id: 31, text: "Alegre", icon: "☀️", archetypes: ["manga", "melancia", "banana", "laranja"] },
        { id: 32, text: "Intensa", icon: "🌋", archetypes: ["limao", "acai", "abacaxi", "cereja"] },
        { id: 33, text: "Elegante", icon: "💎", archetypes: ["uva", "ameixa", "jabuticaba", "maca"] },
        { id: 34, text: "Tranquila", icon: "🌙", archetypes: ["coco", "maracuja", "graviola", "pessego"] },
        { id: 35, text: "Espontânea", icon: "🎈", archetypes: ["morango", "caju", "kiwi", "pitaya"] }
    ]},
    { question: "Como você reage a mudanças?", options: [
        { id: 36, text: "Me adapto rápido", icon: "🏃", archetypes: ["manga", "morango", "tangerina", "laranja"] },
        { id: 37, text: "Gosto de estabilidade", icon: "⚓", archetypes: ["coco", "maca", "ameixa", "jabuticaba"] },
        { id: 38, text: "Vejo como aventura", icon: "🗺️", archetypes: ["kiwi", "limao", "melancia", "abacaxi"] },
        { id: 39, text: "Fico curioso(a)", icon: "🔍", archetypes: ["caju", "graviola", "maracuja", "pitaya"] },
        { id: 40, text: "Tento controlar", icon: "🕹️", archetypes: ["uva", "acai", "cereja", "blueberry"] }
    ]},
    { question: "Seu rolê ideal seria:", options: [
        { id: 41, text: "Show/festa", icon: "🎸", archetypes: ["morango", "limao", "acai", "cereja"] },
        { id: 42, text: "Viagem", icon: "✈️", archetypes: ["kiwi", "caju", "abacaxi", "uva"] },
        { id: 43, text: "Rolê gastronômico", icon: "🍣", archetypes: ["manga", "laranja", "tangerina", "maca"] },
        { id: 44, text: "Cinema ou café", icon: "🎬", archetypes: ["pessego", "ameixa", "maracuja", "blueberry"] },
        { id: 45, text: "Praia ou natureza", icon: "🏖️", archetypes: ["coco", "melancia", "goiaba", "graviola"] }
    ]},
    { question: "Qual palavra mais combina com você?", options: [
        { id: 46, text: "Carisma", icon: "✨", archetypes: ["morango", "tangerina", "banana", "laranja"] },
        { id: 47, text: "Mistério", icon: "🌑", archetypes: ["uva", "jabuticaba", "graviola", "ameixa"] },
        { id: 48, text: "Liberdade", icon: "🕊️", archetypes: ["melancia", "manga", "kiwi", "abacaxi"] },
        { id: 49, text: "Criatividade", icon: "🌈", archetypes: ["pitaya", "caju", "limao", "acai"] },
        { id: 50, text: "Equilíbrio", icon: "⚖️", archetypes: ["coco", "maca", "maracuja", "pessego"] }
    ]}
];

let currentStep = 0;
let scores = {};
Object.keys(fruitResults).forEach(f => scores[f] = 0);
let userName = "";
let selectedOptions = [];

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.innerText = navMenu.classList.contains('active') ? '✕' : '☰';
    });
}

function resetToHome() {
    // Restore Hero and About
    document.getElementById('hero-content').style.display = 'block';
    document.getElementById('quiz-wrapper').style.display = 'none';
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) aboutSection.style.display = 'block';
    
    // Ensure header/hero are not hidden by classes
    document.querySelector('.header').classList.remove('hide-section');
    document.querySelector('.hero').classList.remove('hide-section');
}

function startQuizFromHero() {
    userName = document.getElementById('user-name-hero')?.value || "Tropicaler";
    
    // Swap content instantly in the Hero area
    document.getElementById('hero-content').style.display = 'none';
    document.getElementById('quiz-wrapper').style.display = 'block';
    
    // Hide About section for focused mode
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) aboutSection.style.display = 'none';

    // Hide header and floating elements for immersive quiz
    const header = document.querySelector('.header');
    if (header) header.style.display = 'none';
    const floating = document.querySelector('.floating-container');
    if (floating) floating.style.display = 'none';
    
    setTimeout(() => {
        document.getElementById('quiz-content').style.display = 'block';
        showQuestion();
    }, 100);
}

function showQuestion() {
    const question = quizData[currentStep];
    const optionsEl = document.getElementById('quiz-options');
    const progressInner = document.getElementById('progress-inner');
    
    progressInner.style.width = `${((currentStep + 1) / quizData.length) * 100}%`;
    document.getElementById('quiz-question').innerText = question.question;
    
    selectedOptions = [];
    const allOptions = [...question.options, { id: 'other', text: 'Outro', icon: '✨', archetypes: [] }];

    // Render HTML structure first
    optionsEl.innerHTML = `
        <div class="quiz-options-list">
            ${allOptions.map((opt, idx) => `
                <div class="quiz-list-item" data-idx="${idx}">
                    <div class="custom-checkbox"></div>
                    <span style="font-size: 1.5rem;">${opt.icon}</span>
                    <span style="font-weight: 700;">${opt.text}</span>
                </div>
            `).join('')}
        </div>
        <div class="next-button-container">
            <button id="btn-next" class="button-next" onclick="nextQuestion()">Responder &rarr;</button>
        </div>
    `;

    // Attach listeners after rendering to avoid loss
    const items = optionsEl.querySelectorAll('.quiz-list-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const idx = item.getAttribute('data-idx');
            const opt = allOptions[idx];

            if (selectedOptions.includes(opt)) {
                selectedOptions = selectedOptions.filter(o => o !== opt);
                item.classList.remove('selected');
            } else if (selectedOptions.length < 2) {
                selectedOptions.push(opt);
                item.classList.add('selected');
            }
            updateUIState();
        });
    });

    updateUIState();
}

function updateUIState() {
    const btnNext = document.getElementById('btn-next');
    const items = document.querySelectorAll('.quiz-list-item');
    
    if (selectedOptions.length >= 1) btnNext.classList.add('active');
    else btnNext.classList.remove('active');

    items.forEach((item, index) => {
        const isSelected = item.classList.contains('selected');
        if (selectedOptions.length >= 2 && !isSelected) item.classList.add('disabled');
        else item.classList.remove('disabled');
    });
}

function nextQuestion() {
    selectedOptions.forEach(opt => {
        if (opt.archetypes) opt.archetypes.forEach(f => scores[f]++);
    });

    currentStep++;
    if (currentStep < quizData.length) showQuestion();
    else showResult();
}

function showResult() {
    document.getElementById('quiz-content').style.display = 'none';
    const winningFruit = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const fruit = fruitResults[winningFruit];
    const resultEl = document.getElementById('quiz-result');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
        <div class="result-container-immersive ${fruit.theme}" style="padding: 8rem 0; text-align: center;">
            <div class="container">
                <div class="result-card-magazine">
                    <p style="text-transform: uppercase; font-weight: 800; letter-spacing: 2px;">Olá, ${userName}! Sua essência é</p>
                    <h2 style="font-family: 'Bebas Neue'; font-size: 8rem; text-transform: uppercase; line-height: 1;">${fruit.name}</h2>
                    <div style="margin: 2rem 0;">${fruit.tags.map(t => `<span class="result-tag-editorial">${t}</span>`).join('')}</div>
                    <span style="font-size: 10rem; display: block; margin-bottom: 2rem;">${fruit.icon}</span>
                    <p style="font-size: 1.5rem; max-width: 600px; margin: 0 auto 3rem; font-weight: 700; color: #444;">${fruit.desc}</p>
                    <h4 style="font-family: 'Bebas Neue'; font-size: 2rem; margin-bottom: 2rem;">Curadoria de Look</h4>
                    <div class="looks-grid-editorial">${["👗", "👞", "🕶️"].map(l => `<div class="look-item-editorial">${l}</div>`).join('')}</div>
                </div>
                <button class="button-hero" style="margin-top: 4rem; background: #000; color: #fff;" onclick="location.reload()">Recomeçar Jornada</button>
            </div>
        </div>
    `;
}
