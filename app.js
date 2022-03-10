const etchContainer = document.querySelector('.etch-container');
const blackButton = document.querySelector('.black');
const rainbowButton = document.querySelector('.rainbow');
const amountButton = document.querySelector('.amount');
const clearButton = document.querySelector('.clear');
let gridAmount = 16;
let isDrawing = false;

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

blackButton.addEventListener("click", function() {
    blackButton.style.backgroundColor = 'rgb(140, 140, 140)';
    colorBlack();
    console.log('2');
});

function mouseMove() {
    const etchGrid = document.querySelector(".etch-container");
    etchGrid.addEventListener('mousedown', function() {
        isDrawing = true;
        console.log('3');
    });
}

function colorBlack() {
    const etchGrid = document.querySelector(".etch-container");
    console.log('1');
    if(isDrawing == true) {
        etchGrid.addEventListener("mouseout", function(event) {
        event.target.classList.replace("etch-grid", "black-color");
        });
    }
}

window.addEventListener('mouseup', function() {
    if(isDrawing === true) {
        isDrawing = false;
        console.log('4');
    }
  });



mouseMove();
createGrid(gridAmount);