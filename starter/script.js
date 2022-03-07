
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

function downScore() {
    score--;
    document.querySelector('.score').textContent = score;
}

let displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener
('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener
('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {

        if(!guess) {
            document.querySelector('.message').textContent = 'No number!';
            downScore();

        } else if (guess === secretNumber) {
            displayMessage('Número correctouuu');
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            } 

        } else if (guess > secretNumber) {
            displayMessage('muy grande he compa');
            downScore();
    
        } else if (guess < secretNumber) {
            displayMessage('muy bajo compa');
            downScore();
        }
    } else {
        displayMessage('Maldito perdedor');
        document.querySelector('.score').textContent = 0;
    }
});

