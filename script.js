const questions = [

{
  question:
    "Too much/too many",
  answers: [
    { text: "trop", correct: true },
    { text: "très", correct: false },
  ],
},
{
  question: "Very",
  answers: [
    { text: "très", correct: true },
    { text: "trop", correct: false },
  ],
},
{
  question:
    "To get on well with",
  answers: [
    { text: "s'entendre bien avec", correct: true },
    { text: "attendre", correct: false },
  ],
},
{
  question: "I get on well with",
  answers: [
    { text: "Je m'entends bien avec", correct: true },
    { text: "S'entendre bien avec", correct: false },
  ],
},
{
  question:
    "It was",
  answers: [
    { text: "C'était", correct: true },
    { text: "C'est", correct: false },
  ],
},
{
  question: "It is",
  answers: [
    { text: "C'était", correct: false },
    { text: "C'est", correct: true },
  ],
},

  {
    question:
      "I would like",
    answers: [
      { text: "Je voudrais", correct: true },
      { text: "Il voulait", correct: false },
    ],
  },
  {
    question: "He wanted",
    answers: [
      { text: "Il voulait", correct: true },
      { text: "Je voudrais", correct: false },
    ],
  },
  {
    question:
      "I visited",
    answers: [
      { text: "j'ai visité", correct: true },
      { text: "je voudrais visiter", correct: false },
    ],
  },
  {
    question: "I would like to visit",
    answers: [
      { text: "j'ai visité", correct: false },
      { text: "je voudrais visiter", correct: true },
    ],
  },
  {
    question:
      "I went to",
    answers: [
      { text: "je vais aller à", correct: false },
      { text: "je suis allé à", correct: true },
    ],
  },
  {
    question: "I will go to (spoken by a male)",
    answers: [
      { text: "je suis allé à", correct: false },
      { text: "je vais aller à", correct: true },
    ],
  },
  {
    question:
      "A cake",
    answers: [
      { text: "un cadeau", correct: false },
      { text: "un gateau", correct: true },
    ],
  },
  {
    question: "A gift",
    answers: [
      { text: "un gateau", correct: false },
      { text: "un cadeau", correct: true },
    ],
  },



  {
    question: "He climbed",
    
    answers: [
      { text: "l\’escalade", correct: false },
      { text: "il a escaladé", correct: true },
    ],
  },

  {
    question: "Climbing",
    
    answers: [
      { text: "l\’escalade", correct: true },
      { text: "il a escaladé", correct: false },
    ],
  },
  {
    question: "Without",
    
    answers: [
      { text: "sur", correct: false },
      { text: "sans", correct: true },
    ],
  },
  {
    question: "on",
    
    answers: [
      { text: "sans", correct: false },
      { text: "sur", correct: true },
    ],
  },
  {
    question: "then",
    
    answers: [
      { text: "puis", correct: true },
      { text: "alors", correct: false },
    ],
  },
  {
    question: "so",
    
    answers: [
      { text: "puis", correct: false },
      { text: "alors", correct: true },
    ],
  },

  {
    question: "to want to",
    
    answers: [
      { text: "écrit par", correct: false },
      { text: "vouloir", correct: true },
    ],
  },
  {
    question: "written by",
    
    answers: [
      { text: "vouloir", correct: false },
      { text: "écrit par", correct: true },
    ],
  },
  {
    question: "also",
    
    answers: [
      { text: "aussi", correct: true },
      { text: "assez", correct: false },
    ],
  },
  {
    question: "quite",
    
    answers: [
      { text: "assez", correct: true },
      { text: "aussi", correct: false },
    ],
  },
  {
    question: "it/he/she was",
    
    answers: [
      { text: "être", correct: false },
      { text: "il était", correct: true },
    ],
  },
  {
    question: "to be",
    
    answers: [
      { text: "être", correct: true },
      { text: "il était", correct: false },
    ],
  },
  {
    question: "he waited",
    
    answers: [
      { text: "il a assisté à", correct: false },
      { text: "il a attendu", correct: true },
    ],
  },
  {
    question: "he attended",
    
    answers: [
      { text: "il a assisté à", correct: true },
      { text: "il a attendu", correct: false },
    ],
  },
  {
    question: "one in the morning",
    
    answers: [
      { text: "une heure de l'après-midi", correct: false },
      { text: "une heure du matin", correct: true },
    ],
  },
  {
    question: "one in the afternoon",
    
    answers: [
      { text: "une heure du matin", correct: false },
      { text: "une heure de l'après-midi", correct: true },
    ],
  },
  {
    question: "he promised",
    
    answers: [
      { text: "il a promis", correct: true },
      { text: "la promesse", correct: false },
    ],
  },
  {
    question: "the promise",
    
    answers: [
      { text: "la promesse", correct: true },
      { text: "il a promis", correct: false },
    ],
  },


// he promised - il a promis 
// the promise - la promesse 

// a plane - un avion 
// wide - gros

// to do/to make - faire
// make someone laugh - faire rire


// he takes - il prend
// to take - prendre

// offer (said as a command, when speaking to multiple people) - offrez
// to offer - offrir

// give (said as a command, when speaking to multiple people) - donnez
// to give - donner

// to have to - devoir 
// you must - vous devez 

// to go out - sortir 
// to go - aller


// the rules - les règles
// breaktime - la pause 


//  make-up - le maquillage -
// to put - mettre

// trouver - to find 
// je trouvais - I found 

// homework allows us - les devoirs nous permettent 
// dull/monotonous - monotone

// a shop - un magasin - a shop 
// a magazine - un magazine

// penser - to think
// cela - that 

// to help - aider - 
// cela m’aiderait - this would help me 

// jamais - never 
// apprendre - to learn 

// tous - all 
// surtout - most of all


  {
    question: "on the other hand",
    
    answers: [
      { text: "par contre", correct: true },
      { text: "écrit par", correct: false },
    ],
  },






];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.setAttribute("tabindex", 0);
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    // const notSelected = Array.from(answerButtons.children).filter(element => e != target);
    const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    
}

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = `Play again`;
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();
