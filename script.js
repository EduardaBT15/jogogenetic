// Perguntas e respostas
const questionBank = [
    {
        question: "O que é DNA?",
        options: ["Proteína", "Carboidrato","Ácido Desoxirribonucleico", "Lipídio"],
        correctAnswer: 2
    },
    {
        question: "Qual a função do RNA?",
        options: ["Transporte de informações genéticas", "Transporte de proteínas", "Formação de lipídios", "Transporte de lipídios"],
        correctAnswer: 0
    },
    {
        question: "O que é um gene?",
        options: ["Unidade básica da hereditariedade", "Uma proteína", "Um tipo de célula", "Um órgão"],
        correctAnswer: 0
    },
    {
        question: "Qual das seguintes opções é uma mutação genética?",
        options: ["Oxidação", "Deleção", "Evaporação", "Digestão"],
        correctAnswer: 1
    },
    {
        question: "O que são cromossomos?",
        options: ["Moléculas de lipídios", "Estruturas que contêm DNA", "Órgãos celulares", "Parte do RNA"],
        correctAnswer: 1
    },
    {
        question: "Qual é a base nitrogenada presente no RNA, mas não no DNA?",
        options: ["Timina", "Citosina", "Guanina", "Uracila"],
        correctAnswer: 3
    },
    {
        question: "O que é um fenótipo?",
        options: ["A sequência de DNA", "O tipo de mutação", "A aparência física ou característica observável", "O ambiente"],
        correctAnswer: 2
    },
    {
        question: "O que é um genótipo?",
        options: ["A estrutura do RNA", "A aparência física", "A composição genética de um organismo", "O ambiente onde o organismo vive"],
        correctAnswer: 2
    },
    {
        question: "Qual das seguintes é uma base nitrogenada encontrada no DNA?",
        options: ["Uracila", "Adenina", "Lisina", "Arginina"],
        correctAnswer: 1
    },
    {
        question: "O que é herança mendeliana?",
        options: ["A formação de novas espécies", "A transmissão de características de uma geração para outra conforme as leis de Mendel", "A mutação de genes", "A evolução das espécies"],
        correctAnswer: 1
    },
    {
        question: "O que significa a sigla F1 na genética mendeliana?",
        options: ["Forma da primeira célula", "Primeira mutação detectada", "Filamento 1 de DNA", "Primeira geração filial"],
        correctAnswer: 3
    },
    {
        question: "Qual cientista é conhecido como o 'pai da genética'?",
        options: ["Charles Darwin","Gregor Mendel", "James Watson", "Rosalind Franklin"],
        correctAnswer: 1
    },
    {
        question: "O que é uma alelo?",
        options: ["Um tipo de proteína", "Uma sequência de RNA","Uma forma alternativa de um gene", "Uma célula mutante"],
        correctAnswer: 2
    },
    {
        question: "O que são organismos homozigotos?",
        options: ["Organismos com dois alelos diferentes para uma característica", "Organismos sem alelos", "Organismos com dois alelos idênticos para uma característica", "Organismos com apenas um alelo"],
        correctAnswer: 2
    },
    {
        question: "O que é dominância incompleta?",
        options: ["Quando um alelo domina completamente o outro", "Quando nenhum alelo é expresso", "Quando ambos os alelos se anulam", "Quando o fenótipo resultante é intermediário entre os dois alelos"],
        correctAnswer: 3
    },
    {
        question: "O que é codominância?",
        options: ["Quando apenas um alelo é expresso","Quando ambos os alelos são expressos igualmente", "Quando nenhum dos alelos se manifesta", "Quando os alelos se misturam em um único fenótipo"],
        correctAnswer: 1
    },
    {
        question: "O que é pleiotropia?",
        options: [ "Um gene que influencia apenas uma característica", "Vários genes que influenciam uma característica", "Uma única mutação que afeta múltiplos organismos", "Um gene que influencia várias características"],
        correctAnswer: 0 //nao sei
    },
    {
        question: "O que são genes ligados ao sexo?",
        options: ["Genes que determinam o comportamento", "Genes localizados nos cromossomos sexuais", "Genes que estão presentes apenas em fêmeas", "Genes que são herdados apenas pela mãe"],
        correctAnswer: 1
    },
    {
        question: "O que é uma mutação pontual?",
        options: ["Uma mudança em uma sequência completa de DNA", "Uma duplicação de genes", "Uma alteração em um único nucleotídeo no DNA", "Uma troca de cromossomos inteiros"],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel da enzima DNA polimerase?",
        options: [ "Quebrar o DNA em fragmentos", "Transportar RNA para fora do núcleo", "Formar ligações de hidrogênio entre nucleotídeos", "Adicionar nucleotídeos à cadeia de DNA durante a replicação"],
        correctAnswer: 3
    }
    // Adicione mais perguntas conforme necessário
];

// Variáveis para armazenar pontuação
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function loadQuestion() {
    const questionData = questionBank[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // Atualizar pontuação
    updateScore();
}

function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");
    const questionData = questionBank[currentQuestionIndex];

    if (selectedOption === questionData.correctAnswer) {
        correctAnswers++;
        feedbackElement.innerText = "Correto!";
        feedbackElement.className = "happy";
    } else {
        wrongAnswers++;
        feedbackElement.innerText = "Errado!";
        feedbackElement.className = "sad";
    }

    // Carregar próxima pergunta após um pequeno delay
    setTimeout(() => {
        feedbackElement.innerText = ""; // Limpar feedback
        currentQuestionIndex++;

        if (currentQuestionIndex < questionBank.length) {
            loadQuestion();
        } else {
            displayFinalScore();
        }
    }, 1000);
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Acertos: ${correctAnswers} | Erros: ${wrongAnswers}`;
}

function displayFinalScore() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    questionElement.innerText = "Fim do jogo!";
    optionsElement.innerHTML = "";
    feedbackElement.innerText = `Pontuação Final - Acertos: ${correctAnswers}, Erros: ${wrongAnswers}`;
}

// Carregar a primeira pergunta ao iniciar o jogo
loadQuestion();
