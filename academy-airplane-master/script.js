const player = document.getElementById('player');
const enemy = document.getElementById('enemy');

const gameContainer = document.querySelector('.game-container');

let playerPosition = 175; // Inicia en el centro
let enemyPosition = 20;
let gameRunning = true;

document.addEventListener('keydown', (event) => {
    if (gameRunning) {
        if (event.key === 'ArrowLeft' && playerPosition > 30) {
            playerPosition -= 10;
        } else if (event.key === 'ArrowRight' && playerPosition < 370) {
            playerPosition += 10;
        }

        player.style.left = playerPosition + 'px';
        checkCollision();
    }
});

function moveEnemy() {
    if (gameRunning) {
        enemyPosition += 5;
        if (enemyPosition > 800) {
            enemyPosition = 20;
            enemy.style.left = Math.floor(Math.random() * 340) + 30 + 'px';
        }

        enemy.style.top = enemyPosition + 'px';
        checkCollision();
    }

    requestAnimationFrame(moveEnemy);
}

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    if (
        playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top &&
        playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left
    ) {
        gameOver();
    }
}

function gameOver() {
    gameRunning = false;
    alert('Game Over. ¡Inténtalo de nuevo!');
    resetGame();
}

function resetGame() {
  gameRunning = true;
  playerPosition = 175;
  player.style.left = playerPosition + 'px';
  enemyPosition = -30; // Aparecerá más arriba de la pantalla
  enemy.style.left = Math.floor(Math.random() * 340) + 30 + 'px';
}

requestAnimationFrame(moveEnemy);
