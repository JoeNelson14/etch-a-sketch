const GRID_CONTAINER = document.querySelector('.grid-container');

createGrid();

function createGrid() {
    for (let i = 0; i < 16; i++)
    {
        const COLUM_CONTAINER = document.createElement('div');
        COLUM_CONTAINER.classList.add('colum-container');
        GRID_CONTAINER.appendChild(COLUM_CONTAINER);
        for (let j = 0; j < 16; j++)
        {
            const GRID_SECTION = document.createElement('div');
            GRID_SECTION.classList.add('grid-section');
            COLUM_CONTAINER.appendChild(GRID_SECTION);
        }
    }
}

const GRID_SQUARES = document.querySelectorAll('.grid-section');

GRID_SQUARES.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.toggle('grid-square-hover');
    });
});


const SETTINGS_BTN = document.querySelector('.settings-btn');
const SETTINGS_WINDOW = document.querySelector('.settings-popup');
const SETTINGS_CLOSE_BTN = document.querySelector('.close-settings-btn');

SETTINGS_BTN.addEventListener('click', () => {
    SETTINGS_WINDOW.classList.add('settings-popup-active');
});

SETTINGS_CLOSE_BTN.addEventListener('click', () => {
    SETTINGS_WINDOW.classList.remove('settings-popup-active');
});