const questions = [
  {
    question: "1. O que é a divisão entre países centrais e periféricos?",
    options: ["a) Uma divisão política entre países desenvolvidos e subdesenvolvidos.",
              "b) Uma divisão geográfica entre países do norte e do sul.              ", 
              "c) Uma divisão econômica entre países com maior poder econômico e influência global e países menos desenvolvidos.", 
              ],
    correctAnswer: 2,
  },
  {
    question: "2. Quais são as características dos países centrais?",
    options: ["a) Baixo PIB e IDH.",
              "b) Instituições estatais fracas e dependência econômica dos países periféricos.",
              "c) Maior poder político e influência nas decisões internacionais.",],
    correctAnswer: 2,
  },
  {
    question: "3. Quais são as características dos países periféricos?",
    options: ["a) Maior poder político e influência nas decisões internacionais.s",
              "b) Instituições estatais fortes e desenvolvimento econômico elevado.",
              "c) Dependência econômica dos países centrais e baixa participação no cenário internacional.", 
 ],
    correctAnswer: 2,
  },
  {
    question: "4. Quais são os países considerados centrais na economia mundial?",
    options: ["a) Brasil, Rússia, Índia e China.",
              "b) Estados Unidos, China, Japão e Alemanha.",
              "c) França, Itália, Espanha e Portugal.", 
 ],
    correctAnswer: 1,
  },
  {
    question: "5. Quais são as principais causas do subdesenvolvimento dos países periféricos?",
    options: ["a) Alto nível de industrialização e desenvolvimento econômico.",
              "b) Instituições estatais fortes e independência econômica.",
              "c) Baixas potencialidades naturais e uso predatório das riquezas.", 
 ],
    correctAnswer: 2,
  },
  {
    question: "6. O que é a nova divisão internacional do trabalho?",
    options: ["a) Uma divisão política entre países desenvolvidos e subdesenvolvidos.",
              "b) Uma divisão geográfica entre países do norte e do sul.",
              "c) Uma divisão econômica entre países com maior valor agregado e países com menor valor agregado.", 
 ],
    correctAnswer: 2,
  },
  {
    question: "7. Quais são os grupos de países existentes na nova divisão internacional do trabalho?",
    options: ["a) Centrais, semi-periféricos e periféricos",
              "b) Desenvolvidos, emergentes e subdesenvolvidos.",
              "c) Ocidentais, orientais e africanos.  ", 
 ],
    correctAnswer: 0,
  },
  {
    question: "8. Quais são as diferenças entre os países centrais e os países semi-periféricos?",
    options: ["a) Os países semi-periféricos possuem instituições estatais mais fracas que os países periféricos.",
              "b) Os países semi-periféricos são menos desenvolvidos que os países periféricos",
              "c) Os países semi-periféricos possuem características tanto dos países centrais quanto dos países periféricos", 
 ],
    correctAnswer: 2,
  },
  {
    question: "9. Como a classificação dos países em centrais e periféricos evidencia as desigualdades econômicas e políticas existentes no sistema mundial?",
    options: ["a) A classificação dos países em centrais e periféricos não evidencia desigualdades econômicas e políticas.",
              "b) A classificação dos países em centrais e periféricos evidencia que todos os países têm as mesmas oportunidades.",
              "c) A classificação dos países mostra que os países centrais têm mais poder político e influência nas decisões internacionais.", 
 ],
    correctAnswer: 2,
  },
  {
    question: "10. Como a relação entre os países centrais e periféricos pode afetar a sustentabilidade ambiental?",
    options: ["a) A relação entre os países centrais e periféricos não afeta a sustentabilidade ambiental.",
              "b) A relação entre os países centrais e periféricos leva a práticas sustentáveis de uso dos recursos naturais.",
              "c) A relação entre os países centrais e periféricos leva a práticas insustentáveis de uso dos recursos naturais", 
 ],
    correctAnswer: 2,
  },
  {
    question: "11. Qual país não faz parte dos Países Centrais?",
    options: ["a) Estados Unidos",
              "b) Brasil",
              "c) Alemanha", 
 ],
    correctAnswer: 1,
  },
  {
    question: "12. Qual país é considerado um País Central?",
    options: ["a) China",
              "b) Índia",
              "c) Nigéria", 
 ],
    correctAnswer: 0,
  },
  {
    question: "13. Qual índice aponta um cenário de subdesenvolvimento?",
    options: ["a) Baixa taxa de alfabetização",
              "b) Igualitária renda mensal",
              "c) Alta expectativa de vida", 
 ],
    correctAnswer: 0,
  },
  {
    question: "14. Qual país não é considerado um País Periférico?",
    options: ["a) Haiti",
              "b) Japão",
              "c) Nigéria", 
 ],
    correctAnswer: 1,
  },
  {
    question: "15.Qual é um dos grupos de países emergentes?",
    options: ["a) Estados Unidos, Canadá, Itália e México",
              "b) Brasil, Rússia, Índia, China e África do Sul",
              "c) Reino Unido, França, Alemanha e Portugal", 
 ],
    correctAnswer: 1,
  }
];


let currentQuestion = 0;
let score = 0;
let playerName = "";

const playerNameInput = document.getElementById("playerName");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("reset");
const scoreElement = document.getElementById("score");
const leaderboardElement = document.getElementById("leaderboard");

playerNameInput.addEventListener("input", () => {
  playerName = playerNameInput.value;
  submitBtn.disabled = playerName === "";
});

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(button);
    });
  } else {
    finishGame();
  }
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function finishGame() {
  questionElement.textContent = "Game Over!";
  optionsElement.innerHTML = "";
  playerNameInput.style.display = "none";
  reset.style.display = "inline";
  scoreElement.textContent = `Your Score: ${score}`;

  const leaderboardEntry = document.createElement("div");
  leaderboardEntry.textContent = `${playerName}: ${score} points`;
  leaderboardElement.appendChild(leaderboardEntry);

  
}
var but = document.querySelector('#tc1');
var but2 = document.querySelector('#tc2');
var i = 0;
   
but.addEventListener('click', function trocacor() {
i++
const imagem = document.querySelector('img');
imagem.src = 'img/logo.png';

const css = document.querySelector('link');
css.setAttribute('href', 'styles2.css');

tc2.style.display = "inline";

tc1.style.display = "none";

button.removeEventListener('click', click);
});


but2.addEventListener('click', function trocacor2() {
i++
const imagem = document.querySelector('img');
imagem.src = 'img/log0.png';

const css = document.querySelector('link');
css.setAttribute('href', 'styles.css');

tc2.style.display = "none"
tc1.style.display = "inline"

button.removeEventListener('click', click);
});

displayQuestion();
