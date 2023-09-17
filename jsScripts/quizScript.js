const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.getElementById('container'))
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Metro Manila is the capital of the Philippines.',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'Who is the National Hero of the Phillippines?',
    answers: [
      { text: 'Jose Rizal', correct: true },
      { text: 'Andres Bonifacio', correct: false },
      { text: 'Emilio Aguinaldo', correct: false },
      { text: 'Cong TV', correct: false }
    ]
  },
  {
    question: 'Philippines are consist around how many islands?',
    answers: [
      { text: '3 Islands only', correct: false },
      { text: '7,640 islands', correct: true },
      { text: '6,640 islands', correct: false },
      { text: '7,740 islands', correct: false }
    ]
  },
  {
    question: 'What is the most famous beach destination in the Philippines',
    answers: [
      { text: 'Siargao Beach', correct: false },
      { text: 'El Nido, Palawan', correct: false },
      { text: 'Boracay', correct: true },
      { text: 'Puerto Galera', correct: false }
    ]
  },
  {
    question: 'What is the name of the popular Filipino dish made with pork, vinegar, and soy sauce',
    answers: [
      { text: 'Sinigang', correct: false },
      { text: 'Kare-Kare', correct: false },
      { text: 'Dinuguan', correct: false },
      { text: 'Adobo', correct: true }
    ]
  },
  {
    question: 'What is the name of the Filipino boxing legend who won eight world titles in different weight divisions?',
    answers: [
      { text: 'Panny Pacquiao', correct: false },
      { text: 'Manny Pacquiao', correct: true },
      { text: 'Michael Pacquiao', correct: false },
      { text: 'Emmanuel Pacquiao Jr.', correct: false }
    ]
  },
  {
    question: 'Cebu City in the Philippines is home to a cross that was believed to be planted in 1521 by what “M” Spanish explorer, during his circumnavigation of the world?',
    answers: [
      { text: "Datu Zula's Cross", correct: false },
      { text: "Rajah Humabon's Cross", correct: false },
      { text: "Lapu-Lapu's Machete", correct: false },
      { text: "Magellan's Cross", correct: true }
    ]
  },
  {
    question: 'What Fort in Manila, Philippines, built in 1593 by Miguel Lopez de Legazpi for Spain, shares its name with the capital of Chile?',
    answers: [
      { text: "Punta Fuego", correct: false },
      { text: "Fort Santiago", correct: true },
      { text: "Randy Santiago", correct: false },
      { text: "Santiago", correct: false }
    ]
  },
  {
    question: 'In 1543, the islands of the Philippines were named after Philip II, king of what country?',
    answers: [
      { text: "Portugal", correct: false },
      { text: "Mexico", correct: false },
      { text: "Brazil", correct: false },
      { text: "Spain", correct: true }
    ]
  },
  {
    question: 'Batad and Banaue are two of the prominent Terraces of the Phillipine Cordilleras, dedicated to the irrigation and production of what food stuff?',
    answers: [
      { text: "Strawberry", correct: false },
      { text: "Rice", correct: true },
      { text: "Corn", correct: false },
      { text: "Ube", correct: false }
    ]
  },
  {
    question: 'The national flower of the Philippines is a five-petal white flower called Arabianjasmine, better known by what common name?',
    answers: [
      { text: "Sampaguita", correct: true },
      { text: "Gumamella", correct: false },
      { text: "Rosas", correct: false },
      { text: "Santan", correct: false }
    ]
  },
  {
    question: 'What Filipino fast food brand now sells its flagship Chicken Joy product in 1,500 outlets worldwide?',
    answers: [
      { text: "HappyBee", correct: false },
      { text: "CheerfulBee", correct: false },
      { text: "Jollibee", correct: true },
      { text: "ChowBee", correct: false }
    ]
  },
]