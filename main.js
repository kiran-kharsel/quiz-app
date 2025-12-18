// Quiz data array
const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995",
  },
];

// dom element
const questionElem = document.querySelector(".question");
const optionsElem = document.querySelector(".options");
const questionNo = document.querySelector(".questionNo");
const nextBtn = document.querySelector(".next-btn");
const scoreElem = document.querySelector('.score')
const dialog = document.getElementById('myDialog');

// current question
let currentQuestionIndex = 0;

// score
let score = 0;

function showQuestion() {
  questionElem.innerHTML = `${quizData[currentQuestionIndex].id}. ${quizData[currentQuestionIndex].question}`;
  questionNo.innerText = `${quizData[currentQuestionIndex].id} of ${quizData.length} question.`;
  scoreElem.innerText = `🏆score : ${score}`;


  //clear previous elem
  optionsElem.innerHTML = "";

  quizData[currentQuestionIndex].options.forEach((option) => {
    let li = document.createElement("li");
    li.classList.add("answer");
    li.innerText = option;
    optionsElem.appendChild(li);

    li.addEventListener("click", function () {
      checkAnswer(option, quizData[currentQuestionIndex].answer, li);
      optionsElem.querySelectorAll(".answer").forEach((elem) => {
        elem.style.cursor = "not-allowed";
      });
    });
  });
}

showQuestion();

function checkAnswer(option, answer, liElem) {
  if (option == answer) {
    score++;
    scoreElem.innerText = `🏆score : ${score}`;
    liElem.classList.add("right");
  } else {
    liElem.classList.add("wrong");
    optionsElem.querySelectorAll(".answer").forEach((elem) => {
      elem.style.cursor = "not-allowed";
      if(elem.innerText === answer){
        elem.classList.add("right");
      }
    });
  }
}

nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex === quizData.length) {
    dialog.showModal();
    dialog.querySelector('p').innerText = `your total score is: ${score}`
  }
  showQuestion();
});



//close modal and restart game
dialog.querySelector('form button').addEventListener('click', function(){
  score = 0;
  currentQuestionIndex = 0;
  showQuestion()
  dialog.closeModal();
})