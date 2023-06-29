// Define your quiz questions and answers
var quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0
  }
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById('question');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit-button');
var resultElement = document.getElementById('result');

// Function to load the current question and choices
function loadQuestion() {
  var currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  choicesElement.innerHTML = '';

  for (var i = 0; i < currentQuizData.choices.length; i++) {
    var choice = currentQuizData.choices[i];

    var choiceLabel = document.createElement('label');
    var radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'answer';
    radioInput.value = i;
    radioInput.required = true;

    choiceLabel.appendChild(radioInput);
    choiceLabel.appendChild(document.createTextNode(choice));

    var choiceItem = document.createElement('li');
    choiceItem.appendChild(choiceLabel);

    choicesElement.appendChild(choiceItem);
  }

  submitButton.style.display = 'none';
}

// Function to handle answer selection
function checkAnswer() {
  var selectedChoice = document.querySelector('input[name="answer"]:checked');

  if (!selectedChoice) {
    alert('Please select an answer!');
    return;
  }

  var selectedChoiceIndex = parseInt(selectedChoice.value);

  if (selectedChoiceIndex === quizData[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to show the final result
function showResult() {
  questionElement.style.display = 'none';
  choicesElement.style.display = 'none';
  submitButton.style.display = 'none';
  resultElement.textContent = 'You scored ' + score + ' out of ' + quizData.length + '!';
}

// Show the submit button when an answer is selected
choicesElement.addEventListener('change', function() {
  submitButton.style.display = 'block';
});

// Start the quiz by loading the first question
loadQuestion();
