// Quiz data array
const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  }
];


// dom element
const questionElem = document.querySelector('.question')
const optionsElem = document.querySelector('.options')
const questionNo = document.querySelector('.questionNo')

// current question
let currentQuestionIndex = 0;


function showQuestion(){
    questionElem.innerHTML = `${quizData[currentQuestionIndex].id}. ${quizData[currentQuestionIndex].question}`;
    questionNo.innerHTML = `${quizData[currentQuestionIndex].id} of ${quizData.length} question.`

    quizData[currentQuestionIndex].options.forEach((option) => {
        let li = document.createElement('li');
        li.classList.add("answer");
        li.innerText = option;
        optionsElem.appendChild(li);
        li.addEventListener('click', function(){
            checkAnswer(option, quizData[currentQuestionIndex].answer, li);
            optionsElem.querySelectorAll('.answer').forEach((elem) =>{
                elem.style.cursor = 'not-allowed';
            })
        })
    });
};

showQuestion();


function checkAnswer(option, answer, liElem){
    if(option == answer){
        liElem.classList.add('right')
    }else{
        liElem.classList.add('wrong')
    }
}