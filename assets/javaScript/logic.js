// Define your quiz logic here
// Functions to start and end the quiz.
// Functions to display questions and handle answer choice clicks.
// Timer functionality.
// Functions to handle the submission of initials and scores.
// Event listeners for buttons like "Start Quiz" and "Submit."

// Global variables
let currentQuestionIndex = 0;
let timeLeft = 0;
let score = 0;

// DOM elements
const startButton = document.getElementById('start');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');

function startQuiz() {
    // Initialize timer and display the first question
    timeLeft = 60; // Set your desired initial time
    displayQuestion(currentQuestionIndex);
  
    // Hide the start screen and show the questions
    startScreen.style.display = 'none';
    questionsContainer.style.display = 'block';
  
    // Start the timer countdown
    startTimer();
  }
  
  function displayQuestion(questionIndex) {
    const currentQuestion = quizQuestions[questionIndex];
    questionTitle.textContent = currentQuestion.question;
  
    // Clear previous choices
    choicesContainer.innerHTML = '';
  
    // Create buttons for answer choices
    currentQuestion.choices.forEach(choice => {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.addEventListener('click', checkAnswer); // Attach click event
      choicesContainer.appendChild(choiceButton);
    });
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Correct answer
      feedbackElement.textContent = 'Correct!';
      score += 10; // Adjust the score as needed
    } else {
      // Incorrect answer, penalize time
      feedbackElement.textContent = 'Incorrect!';
      timeLeft -= 10; // Adjust the time penalty as needed
    }
  
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      // Quiz is over
      endQuiz();
    }
  }
  
  function startTimer() {
    const timerElement = document.getElementById('time');
    const timerInterval = setInterval(function () {
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval); // Stop the timer
        endQuiz();
      }
      timeLeft--;
    }, 1000);
  }
  