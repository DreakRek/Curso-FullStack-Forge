// game.js

const gameContainer = document.getElementById('game-container');
const gridSize = 10;
const cellSize = 40; // Tamaño de la celda en píxeles
const moveInterval = 400; // Intervalo de tiempo para cada movimiento en milisegundos
const numberOfSushis = 5; // Número de sushis que aparecerán

let intervalId;
let ninjaPosition = { row: 0, col: 0 };
let sushis = [];

function createGrid() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.gridRow = `${row + 1}`;
            cell.style.gridColumn = `${col + 1}`;
            gameContainer.appendChild(cell);
        }
    }
}

function setNinjaPosition(row, col, direction) {
    ninjaPosition = { row, col };
    ninja.style.gridRow = `${row + 1}`;
    ninja.style.gridColumn = `${col + 1}`;

    ninja.classList.remove('rotate-up', 'rotate-down', 'rotate-left', 'rotate-right', 'flip');

    switch (direction) {
        case 'up':
            ninja.classList.add('rotate-up');
            break;
        case 'down':
            ninja.classList.add('rotate-down');
            break;
        case 'left':
            ninja.classList.add('rotate-left');
            break;
        case 'right':
            ninja.classList.add('rotate-right');
            break;
    }

    checkSushiCollision(); // Verificar si el ninja está en la misma posición que algún sushi
}

function moveNinja(direction) {
    let newRow = ninjaPosition.row;
    let newCol = ninjaPosition.col;

    switch (direction) {
        case 'up':
            newRow = (ninjaPosition.row > 0) ? ninjaPosition.row - 1 : ninjaPosition.row;
            break;
        case 'down':
            newRow = (ninjaPosition.row < gridSize - 1) ? ninjaPosition.row + 1 : ninjaPosition.row;
            break;
        case 'left':
            newCol = (ninjaPosition.col > 0) ? ninjaPosition.col - 1 : ninjaPosition.col;
            break;
        case 'right':
            newCol = (ninjaPosition.col < gridSize - 1) ? ninjaPosition.col + 1 : ninjaPosition.col;
            break;
    }

    setNinjaPosition(newRow, newCol, direction);
}

function createSushi() {
    const sushi = document.createElement('div');
    sushi.classList.add('cell', 'sushi');
    gameContainer.appendChild(sushi);

    // Generar una posición aleatoria para el sushi
    let sushiPosition;
    do {
        sushiPosition = {
            row: Math.floor(Math.random() * gridSize),
            col: Math.floor(Math.random() * gridSize)
        };
    } while (isOccupied(sushiPosition)); // Verificar si la posición ya está ocupada por otro sushi o el ninja

    sushi.style.gridRow = `${sushiPosition.row + 1}`;
    sushi.style.gridColumn = `${sushiPosition.col + 1}`;

    sushis.push(sushiPosition); // Agregar la posición del nuevo sushi al array de sushis
}

function isOccupied(position) {
    return sushis.some(sushi => sushi.row === position.row && sushi.col === position.col) ||
           (ninjaPosition.row === position.row && ninjaPosition.col === position.col);
}

function checkSushiCollision() {
    sushis.forEach((sushi, index) => {
        if (ninjaPosition.row === sushi.row && ninjaPosition.col === sushi.col) {
            // El ninja ha comido el sushi
            gameContainer.removeChild(document.querySelectorAll('.sushi')[index]); // Eliminar el sushi actual
            sushis.splice(index, 1); // Eliminar la posición del sushi del array
            createSushi(); // Generar un nuevo sushi
        }
    });
}

createGrid();

const ninja = document.createElement('div');
ninja.classList.add('cell', 'ninja');
gameContainer.appendChild(ninja);

setNinjaPosition(ninjaPosition.row, ninjaPosition.col, 'right');

for (let i = 0; i < numberOfSushis; i++) {
    createSushi(); // Generar los sushis iniciales
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveNinja('up');
            break;
        case 'ArrowDown':
            moveNinja('down');
            break;
        case 'ArrowLeft':
            moveNinja('left');
            break;
        case 'ArrowRight':
            moveNinja('right');
            break;
    }
});
