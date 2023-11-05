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



// also - aussi
// quite - assez

// it/he/she was - il était 
// to be - etre


// he waited - il a attendu
// he attended - il a assisté à

// one in the morning - une heure du matin 
// one in the afternoon - une heure de l'après-midi 

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