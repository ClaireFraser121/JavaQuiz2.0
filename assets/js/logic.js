// Define your quiz logic here
// Functions to start and end the quiz.
// Functions to display questions and handle answer choice clicks.
// Timer functionality.
// Functions to handle the submission of initials and scores.
// Event listeners for buttons like "Start Quiz" and "Submit."

// Global variables
// Define global variables to keep track of the current question, the timer, and the user's score.
let currentQuestionIndex = 0;
let timeLeft = 0;
let score = 0;

// DOM elements
// variables to store references to DOM elements that you will manipulate.
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start');
const questionTitle = document.getElementById('question-title');
const questionsContainer = document.getElementById('questions');
const choicesContainer = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const submitButton = document.getElementById('submit');
const endScreen = document.getElementById('end-screen');



// Start Quiz Function
// Implement a function to start the quiz when the "Start Quiz" button is clicked. This function should initialize the timer, display the first question, and hide the start screen.
function startQuiz() {
  console.log('startQuiz function called'); // Check if this message appears in the console
  timeLeft = 60; // Set your desired initial time
  displayQuestion(currentQuestionIndex);

  // Hide the start screen and show the questions
  startScreen.style.display = 'none';
  questionsContainer.style.display = 'block';

  // Start the timer countdown
  startTimer();
}

//   Display Question Function
// a function to display a question and its answer choices. Update the HTML content of the question and choices based on the current question index
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


//   Check Answer Function
//  a function to check if the user's selected answer is correct. Compare the selected answer with the correct answer from the current question object. Update the score and provide feedback to the user.
function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.choices[currentQuestion.correctAnswer]) {
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


//   Timer Functionality
// a function to start the timer and update the timer display. Use setInterval to decrement the time and check if the timer reaches zero.
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

//   End Quiz Function
// a function to handle the end of the quiz. Display the user's score and allow them to enter their initials and submit their score.
function endQuiz() {
  // Hide questions, display end screen
  questionsContainer.style.display = 'none';
  endScreen.style.display = 'block';
  finalScoreElement.textContent = score;
}

//   Submit Score Function
// a function to handle the submission of initials and scores
function submitScore() {
  const initials = document.getElementById('initials').value;
  // Save the initials and score, e.g., to local storage
  // Handle your high scores logic here
}

//   Event Listeners
// event listeners for the "Start Quiz" button, answer choices, and the submit button for initials and score.
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitScore);
