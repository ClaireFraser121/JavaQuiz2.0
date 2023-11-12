# Coding Quiz Challenge - README

## Introduction

As a coding boot camp student, I was tasked with building a timed coding quiz with multiple-choice questions to test my knowledge of JavaScript fundamentals. The challenge aimed to simulate a coding assessment scenario often encountered in the interview process. This README documents the process and challenges I faced while developing the quiz using HTML, CSS, and JavaScript.

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Quiz Logic](#quiz-logic)
- [Local Storage](#local-storage)
- [Sound Effects](#sound-effects)
- [Development Process](#development-process)
  - [Setting Up the Project](#setting-up-the-project)
  - [Building the Quiz Logic](#building-the-quiz-logic)
  - [Handling Timer and Scoring](#handling-timer-and-scoring)
  - [Styling and Responsive Design](#styling-and-responsive-design)
  - [Saving and Displaying High Scores](#saving-and-displaying-high-scores)
- [Challenges and Solutions](#challenges-and-solutions)
  - [Challenge 1: Displaying High Scores](#challenge-1-displaying-high-scores)
  - [Challenge 2: Redirecting to Highscores](#challenge-2-redirecting-to-highscores)
  - [Challenge 3: AudioContext Error](#challenge-3-audiocontext-error)
  - [Challenge 4: Undefined Function](#challenge-4-undefined-function)

- [Conclusion](#conclusion)

## Usage

To make the most of the quiz application, follow these steps:

1. **Clone the Repository:**
   - Clone this repository to your local machine using the following command:

     ```bash
     git clone https://github.com/your-username/quiz-project.git
     ```

   - Alternatively, download the ZIP file and extract its contents.

2. **Navigate to the Project Directory:**
   - Open a terminal or command prompt and change into the project directory:

     ```bash
     cd quiz-project
     ```

3. **Open the Quiz:**
   - Locate the `index.html` file in the root directory.
   - Open this file in your preferred web browser.

4. **Start the Quiz:**
   - On the quiz landing page, click the "Start Quiz" button to initiate the quiz.

5. **Answer Questions:**
   - For each question, select the answer you believe is correct.
   - Receive immediate feedback on whether your answer is correct or incorrect.

6. **Complete the Quiz:**
   - Continue answering questions within the time limit.
   - Once the quiz is complete, the application will prompt you to enter your initials.

7. **Submit Your Score:**
   - Enter your initials in the provided input field.
   - Click the "Submit" button to save your high score.

8. **View High Scores:**
   - After submitting your score, you will be redirected to the high scores page (`highscores.html`).
   - Here, you can see a list of high scores, including your own.

9. **Explore Further:**
   - Dive into the codebase to understand the quiz logic and explore opportunities for customization.
   - Consider contributing to the project by opening issues or submitting pull requests.

Enjoy the quiz and challenge yourself with coding-related questions!

## Features

- User-friendly interface.
- Start button to initiate the quiz with a timer.
- Multiple-choice questions with dynamic content.
- Responsive design for a seamless user experience.
- Scoring system with time penalties for incorrect answers.
- Sound effects for correct and incorrect answers.
- High score saving and display functionality.

## Project Structure

The project is structured as follows:

- **`index.html`**: The main HTML file containing the structure of the quiz and linking to CSS and JavaScript files.
- **`assets`**: Directory containing subdirectories for CSS, JavaScript, sound effects, and any additional assets.
- **`questions.js`**: JavaScript file containing an array of quiz questions.
- **`logic.js`**: The main JavaScript file containing the quiz logic, event listeners, and functions for high scores.

![Project Structure](/javaQuiz2.0/assets/images/file-stucture-screenshot.png)

## Quiz Logic

The quiz logic involves the following components:

- **Starting the Quiz**: The `startQuiz` function initializes the timer, displays the first question, and hides the start screen.

- **Displaying Questions**: The `displayQuestion` function updates the HTML content based on the current question index.

- **Checking Answers**: The `checkAnswer` function compares the selected answer with the correct answer, updates the score, and provides feedback. With a correct or incorrect buzzer sound

- **Timer Functionality**: The `startTimer` function decrements the time and updates the display. The quiz ends when the timer reaches zero.

- **Ending the Quiz**: The `endQuiz` function hides the questions, displays the final score, and allows users to submit their initials.

![Quiz Logic](/javaQuiz2.0/assets/images/quiz-logic-screenshot%20.png)

## Local Storage

Local storage is used to store and retrieve high scores. The `saveHighScore` function saves scores to local storage, and the `displayHighScores` function retrieves and displays them.

![Local Storage](/path/to/local-storage-screenshot.png)

## Sound Effects

The project includes sound effects for correct and incorrect answers. The `playCorrectSound` and `playIncorrectSound` functions play audio when the user responds to a question.

![Sound Effects](/path/to/sound-effects-screenshot.png)

## Development Process

### Setting Up the Project

I started by creating the basic project structure with the provided HTML and CSS files. Then created the corresponding JavaScript flies to accompany them. The HTML file contained the structure for the quiz interface, including the start screen, question section, and end screen. CSS was used for styling, and JavaScript was set up to handle the quiz logic.

### Building the Quiz Logic

I implemented functions to start the quiz, display questions, and check answers. Event listeners were added to handle user interactions, and dynamic content was updated based on user responses.

### Handling Timer and Scoring

The timer functionality was implemented using JavaScript's `setInterval`. Time penalties were applied for incorrect answers, and the quiz ended when the timer reached zero or all questions were answered.

### Styling and Responsive Design

CSS was utilized to style the quiz interface, ensuring a clean and polished look. Responsive design principles were applied to make the quiz accessible across different devices and screen sizes.

### Saving and Displaying High Scores

Local storage was used to save and retrieve high scores. The user's initials and score were stored as objects, and the high scores were sorted and displayed on the high scores page.

## Challenges and Solutions

### Challenge 1: Displaying High Scores

**Issue:** High scores were not displayed on the high scores page.

**Solution:** I ensured that the `displayHighScores` function was defined and called it appropriately. Additionally, I verified that the HTML element for displaying high scores existed.

### Challenge 2: Redirecting to Highscores

**Issue:** Redirecting to the high scores page was not working as expected.

**Solution:** I used `window.location.href` to redirect the user to the high scores page after saving their score.

### Challenge 3: AudioContext Error

**Issue:** An `AudioContext` error was preventing sound playback.

**Solution:** I modified the functions to play sounds after user interaction, allowing the `AudioContext` to start successfully.

### Challenge 4: Undefined Function

**Issue:** ReferenceError for an undefined function (`displayHighScores`).

**Solution:** I ensured that the function was defined before being called. Placing the script tag for `logic.js` after the necessary HTML elements helped resolve this issue.

## Credits

- [Sound effects](#): Credits to [SoundBible](https://soundbible.com/) for providing free sound effects.

## GitHub Repository

- [GitHub Repository](https://github.com/ClaireFraser121/JavaQuiz2.0): Visit the project's repository for the latest updates and to contribute.

## Live Demo

- [Live Demo](https://clairefraser121.github.io/JavaQuiz2.0/): Check out the live demo of the quiz application.

## Author

- Claire Fraser

## License

This project is licensed under the [MIT License](LICENSE).

## Conclusion

Building the coding quiz challenged me to apply the JavaScript fundamentals learned throughout the module. By overcoming challenges related to functionality, styling, and responsiveness, I gained valuable experience in developing interactive web applications. This project provided a hands-on opportunity to reinforce my understanding of key web development concepts and prepare for real-world coding assessments.
