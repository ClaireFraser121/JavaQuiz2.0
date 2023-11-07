// Define your quiz questions and answers here

// questions.js (Quiz Content):

// An array containing question objects with question text, answer choices, and correct answers.

const questions = [
  {
      // Each element in the 'questions' array is an object representing a question.

      questionText: "What does HTML stand for?",
      // 'questionText' property stores the text of the question.

      answerChoices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language", "Hyper Transfer Protocol"
      ],
      // 'answerChoices' property is an array that holds the available answer options for this question.
      // there are four possible answers.

      correctAnswer: 0 // Index of the correct answer in the answerChoices array
      // 'correctAnswer' property specifies the index of the correct answer within the 'answerChoices' array.
      // In this case, the correct answer is "Hyper Text Markup Language," which is at index 0.
  },
  {
      questionText: "Which of the following is a CSS property to change the font size?",
      answerChoices: ["font-style", "font-colour", "font-size", "font-family"],
      correctAnswer: 2
  },
  {
      questionText: "what is the result of 2 + 2 in JavaScript?",
      answerChoices: ["3", "4", "5", "6"],
      correctAnswer: 1
  },
  {
      questionText: "Which of the following is a JavaScript framework?",
      answerChoices: ["HTML", "CSS", "React", "MySQL"],
      correctAnswer: 2
  },
  {
      questionText: "What is the main purpose of a for loop in programming?",
      answerChoices: [
          "To make code look more complex",
          "To create an infinite loop",
          "To execute a block of code repeatedly",
          "To perform mathematical calculations"
      ],
      correctAnswer: 2
  }

  // You can add more question objects as needed for your quiz.
];
  