const GRID_CONTAINER = document.querySelector('.grid-container');
const SAVE_BTN = document.querySelector('.save-btn');


//settings window and grid square event listeners
const SETTINGS_BTN = document.querySelector('.settings-btn');
const SETTINGS_WINDOW = document.querySelector('.settings-popup-window');
const SETTINGS_CLOSE_BTN = document.querySelector('.close-settings-btn');
const OVERLAY = document.querySelector('.overlay');

let COLUM_CONTAINER = '';
let GRID_SQUARES = '';


createGrid(16);

function createGrid(size) {
    for (let i = 0; i < size; i++)
    {
        COLUM_CONTAINER = document.createElement('div');
        COLUM_CONTAINER.classList.add('colum-container');
        GRID_CONTAINER.appendChild(COLUM_CONTAINER);
        for (let j = 0; j < size; j++)
        {
            const GRID_SECTION = document.createElement('div');
            GRID_SECTION.classList.add('grid-section');
            COLUM_CONTAINER.appendChild(GRID_SECTION);
        }
    }

    GRID_SQUARES = document.querySelectorAll('.grid-section');
    hoverGrid();
    
}



function hoverGrid()
{
    GRID_SQUARES.forEach((square) => {
        square.addEventListener('mouseover', () => {
            //checks if settings window is open and stops evenlistener from working
            if (SETTINGS_WINDOW.classList.contains('settings-popup-active'))
            {
                return;
            }
            square.classList.toggle('grid-square-hover');
        });
    });
}

function resetGrid()
{
    while (GRID_CONTAINER.hasChildNodes())
    {
        GRID_CONTAINER.removeChild(GRID_CONTAINER.firstChild);
    }
}



SETTINGS_BTN.addEventListener('click', () => {
    SETTINGS_WINDOW.classList.add('settings-popup-active');
    OVERLAY.classList.add('overlay-active');
});

SETTINGS_CLOSE_BTN.addEventListener('click', () => {
    SETTINGS_WINDOW.classList.remove('settings-popup-active');
    OVERLAY.classList.remove('overlay-active');
});

SAVE_BTN.addEventListener('click', () => {
    let gridSize = document.querySelector('.input-size').value;
    resetGrid();
    createGrid(gridSize);
    SETTINGS_WINDOW.classList.remove('settings-popup-active');
    OVERLAY.classList.remove('overlay-active');
});
