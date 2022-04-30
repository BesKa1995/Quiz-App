const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]
const quizContainer = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0


submitBtn.addEventListener('click', (e) => {
  answerEls.forEach(answerEl => {
    if (answerEl.checked && answerEl.id === quizData[currentQuiz].correct) {
      score++
    }
  })

  if (currentQuiz < quizData.length - 1) {
    currentQuiz++
    loadQuiz()
  }
  else {
    quizContainer.innerHTML = ''
    displayQuizResult()
  }
  resetCheckedAnswers()
})



loadQuiz()

const resetCheckedAnswers = () => answerEls.forEach(answerEl => answerEl.checked = false)



function displayQuizResult() {
  quizContainer.innerHTML = `
    <h2>You answere correctly at ${score}/${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button>
  `
}

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerHTML = currentQuizData.question
  answerEls.forEach((answerEl) => {
    answerEl.nextElementSibling.innerHTML = currentQuizData[answerEl.id]
  })
}

