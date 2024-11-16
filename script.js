let redScore = 0;
let blueScore = 0;

function addScore(team) {
    if (team === 'red') {
        redScore++;
        document.getElementById('red-score').innerText = redScore;
    } else if (team === 'blue') {
        blueScore++;
        document.getElementById('blue-score').innerText = blueScore;
    }
}

function resetGame() {
    redScore = 0;
    blueScore = 0;
    document.getElementById('red-score').innerText = redScore;
    document.getElementById('blue-score').innerText = blueScore;
}
