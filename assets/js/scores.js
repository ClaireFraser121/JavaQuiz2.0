// Display High Scores on the "Highscores" Page
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    const highScoresList = document.getElementById('highscores');
    highScoresList.innerHTML = '';

    highScores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
        highScoresList.appendChild(listItem);
    });
}

// Call the function to display high scores when the "Highscores" page loads
window.onload = displayHighScores;

// Clear High Scores
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    localStorage.removeItem('highScores');
    displayHighScores(); // Clear the displayed high scores
});
