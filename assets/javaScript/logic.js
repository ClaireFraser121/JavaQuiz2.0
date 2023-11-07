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

