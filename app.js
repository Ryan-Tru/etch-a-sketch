const etchContainer = document.querySelector('.etch-container');
const blackButton = document.querySelector('.black');
const rainbowButton = document.querySelector('.rainbow');
const amountButton = document.querySelector('.amount');
const clearButton = document.querySelector('.clear');
let gridAmount = 16;

//prompts the user to enter amount of grids
amountButton.addEventListener('click', function() {
    gridAmount = prompt("Please Enter A Number Between 0 - 100:");

    if(gridAmount > 100 || isNaN(gridAmount) == true) {
        prompt("Please Enter A Valid Number (0-100)");
    } else {
        createGrid(gridAmount);
    }
});

//create grid based on user input
function createGrid(amount) {
    etchContainer.style.setProperty('--grid-column', amount);
    etchContainer.style.setProperty('--grid-rows', amount);
    for(let i = 0; i < amount; i++) {
        for(let j = 0; j < amount; j++) {
            const etchGrid = document.createElement('div');
            etchGrid.classList.add('etch-grid');
            etchContainer.appendChild(etchGrid);
        }
    }
}

blackButton.addEventListener('click', function() {
    colorBlack();
});

function colorBlack() {
    let etchGrid = document.querySelectorAll('.etch-grid');
    console.log(etchGrid);
}

createGrid(gridAmount);