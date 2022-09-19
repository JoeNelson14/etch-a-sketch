const GRID_CONTAINER = document.querySelector('.grid-container');
let mouseDown = false;
let colorMode = 'color';

//creats grid on page load and gives it a default size of 16
createGrid(16);

function createGrid(size) {
    GRID_CONTAINER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    GRID_CONTAINER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++)
    {
        const GRID_SQUARE = document.createElement('div');
        GRID_CONTAINER.appendChild(GRID_SQUARE);
        GRID_SQUARE.addEventListener('mouseup', () => {
            mouseDown = false;
        });
        GRID_SQUARE.addEventListener('mousedown', () => {
            mouseDown = true;
        });
        
        GRID_SQUARE.addEventListener('mouseover', draw);
    }
}

//chooses color to draw with based on button selection
//returns right away if mouseDown is false allowing user not to draw
function draw(e) {
    if (mouseDown === false)
    {
        return;
    }

    if (colorMode === 'color')
    {
        e.target.style.backgroundColor = COLOR_PICKER.value;
    }
    else if (colorMode === 'rainbow')
    {
        e.target.style.backgroundColor = `rgb(${createRainbow()}, ${createRainbow()}, ${createRainbow()})`;
    }
    else //eraser
    {
        e.target.style.backgroundColor = '';
    }
}
    
function removeOldGrid()
{
    while (GRID_CONTAINER.hasChildNodes())
    {
        GRID_CONTAINER.removeChild(GRID_CONTAINER.firstChild);
    }
}

//generates number from 0-255 for r,g,and b values
function createRainbow ()
{
    return Math.floor(Math.random() * 256);
}

const COLOR_PICKER = document.querySelector('.color-input');

COLOR_PICKER.addEventListener('change', () => {
    COLOR_PICKER.parentNode.style.backgroundColor = COLOR_PICKER.value;
});

//COLOR BUTTON
const COLOR_BTN = document.querySelector('.mode-button.color');
COLOR_BTN.style.backgroundColor = '#374785';

COLOR_BTN.addEventListener('click', () => {
    colorMode = 'color';
    COLOR_BTN.style.backgroundColor = '#374785';
    RAINBOW_BTN.style.backgroundColor = '';
    ERASER_BTN.style.backgroundColor = '';
    GRID_CONTAINER.style.cursor = 'default';
});

//RAINBOW BUTTON
const RAINBOW_BTN = document.querySelector('.mode-button.rainbow');

RAINBOW_BTN.addEventListener('click', () => {
    colorMode = 'rainbow';
    RAINBOW_BTN.style.backgroundColor = '#374785';
    COLOR_BTN.style.backgroundColor = '';
    ERASER_BTN.style.backgroundColor = '';
    GRID_CONTAINER.style.cursor = 'default';
});

//ERASER BUTTON
const ERASER_BTN = document.querySelector('.mode-button.eraser');

ERASER_BTN.addEventListener('click', () => {
    colorMode = 'eraser';
    ERASER_BTN.style.backgroundColor = '#374785';
    COLOR_BTN.style.backgroundColor = '';
    RAINBOW_BTN.style.backgroundColor = '';
    GRID_CONTAINER.style.cursor = 'url("images/eraser_cursor.svg"), default';
});

//CLEAR BUTTON
const CLEAR_BTN = document.querySelector('.mode-button.clear');

CLEAR_BTN.addEventListener('click', () => {
    removeOldGrid();
    createGrid(SLIDER_SIZE.value);
    GRID_CONTAINER.style.cursor = 'default';
});

// SLIDER
const SLIDER_SIZE = document.querySelector('.grid-size-slider');
const GRID_SIZE_TEXT = document.querySelector('.grid-size-text');

SLIDER_SIZE.addEventListener('input', () => {
    GRID_SIZE_TEXT.textContent = `${SLIDER_SIZE.value} x ${SLIDER_SIZE.value}`;
    removeOldGrid();
    createGrid(SLIDER_SIZE.value);
});