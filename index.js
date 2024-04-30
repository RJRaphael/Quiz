const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}
document.querySelector('.start-quiz').addEventListener('click', function() {
  document.querySelector('.quiz-message').classList.add('hide');
});


function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é o principal objetivo da economia solidária?",
    answers: [
      { text: " Maximizar os lucros individuais", correct: false },
      { text: "Promover a competição entre os trabalhadores", correct: false },
      { text: "Garantir a inclusão social e o desenvolvimento sustentável", correct: true },
      { text: "Ignorar os problemas sociais", correct: false }
    ]
  },
  {
    question: "O que é destacado como pilar da economia solidária no documentário?",
    answers: [
      { text: "Competição desenfreada", correct: false },
      { text: "Colaboração e solidariedade", correct: true },
      { text: "Lucro individual", correct: false },
      { text: "Isolamento social", correct: false }
    ]
  },
  {
    question: 'Qual é o papel das comunidades na economia solidária?',
    answers: [
      { text: 'Competir entre si', correct: false },
      { text: 'Unir-se para criar soluções inovadoras', correct: true },
      { text: 'Isolar-se das questões sociais', correct: false },
      { text: "Depender exclusivamente de recursos governamentais", correct: false }
    ]
  },
  {
    question: 'Por que a economia solidária é considerada uma alternativa importante?',
    answers: [
      { text: "Porque promove a inclusão social e a sustentabilidade", correct: true },
      { text: "Porque enfatiza a competição", correct: false },
      { text: "Porque beneficia apenas alguns indivíduos", correct: false },
      { text: "Porque ignora os problemas sociais", correct: false }
    ]
  },
  {
    question: 'Qual é a mensagem final transmitida pelo documentário?',
    answers: [
      { text: 'Desistir de encontrar soluções colaborativas', correct: false },
      { text: 'Engajar-se na promoção da economia solidária em comunidades locais', correct: true },
      { text: 'Acreditar que a competição é a única forma de sucesso', correct: false },
      { text: 'Ignorar as vozes eco-sociais', correct: false }
    ]
  },
  {
    question: 'Qual é o papel das cooperativas na economia solidária?',
    answers: [
      { text: 'Excluir membros da comunidade', correct: false },
      { text: ' Promover a competição desleal', correct: false },
      { text: 'Ignorar os problemas sociais  ', correct: false },
      { text: 'Fomentar a colaboração e a autogestão', correct: true }
    ]
  },
  {
    question: 'Como as iniciativas de economia solidária contribuem para o desenvolvimento sustentável?',
    answers: [
      { text: 'Ignorando questões ambientais', correct: false },
      { text: 'Adotando práticas econômicas responsáveis e sustentáveis', correct: true },
      { text: ' Priorizando o lucro individual ', correct: false },
      { text: 'Desconsiderando a importância da preservação ambiental ', correct: false },
    ]
  },
  {
    question: 'Quais são os valores fundamentais da economia solidária?',
    answers: [
      { text: 'Competição e individualismo', correct: false },
      { text: 'Cooperação e solidariedade', correct: true },
      { text: 'Desigualdade e exclusão ', correct: false },
      { text: 'Concorrência e lucro máximo  ', correct: false },
    ]
  },
  {
    question: 'Como as comunidades podem se beneficiar da economia solidária?',
    answers: [
      { text: 'Isolando-se das questões sociais  ', correct: false },
      { text: 'Dependendo exclusivamente de recursos externos', correct: false },
      { text: 'Desenvolvendo relações colaborativas e fortalecendo a economia local ', correct: true },
      { text: 'Competindo entre si por recursos escassos', correct: false },
    ]
  },
  {
    question: 'Qual é o principal desafio enfrentado pela economia solidária?',
    answers: [
      { text: 'Falta de interesse da comunidade', correct: false },
      { text: 'Resistência de instituições tradicionais ', correct: true },
      { text: 'Abordagem individualista', correct: false },
      { text: 'Ausência de problemas sociais', correct: false },
    ]
  },
  
]