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

//creates grid based on user input
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
    etchContainer.querySelectorAll('.etch-grid').forEach(function(e) {
        e.style.backgroundColor = 'white';
    });

    rainbowButton.classList.remove('active-button');
    rainbowButton.classList.remove('active');

    blackButton.classList.remove('active-button');
    blackButton.classList.remove('active');
}

rainbowButton.addEventListener('click', function() {
    blackButton.classList.remove('active-button');
    blackButton.classList.remove('active');

    rainbowButton.classList.toggle('active-button');
    rainbowButton.classList.toggle('active');

    if(rainbowButton.classList.contains('active')) {
        rainbowColor();
    }
});

blackButton.addEventListener('click', function() {
    rainbowButton.classList.remove('active-button');
    rainbowButton.classList.remove('active');

    blackButton.classList.toggle('active-button');
    blackButton.classList.toggle('active');

    if(blackButton.classList.contains('active')) {
        blackColor();
    } 
});

function blackColor() {
    etchContainer.addEventListener("mouseover", function coloring(event) {
        event.target.style.backgroundColor = 'black';
    });
}

function rainbowColor() {
    etchContainer.addEventListener("mouseover", function coloring(event) {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * (100 - 10) + 10}%)`;
    });
    
}

clearButton.addEventListener('click', function() {
    etchContainer.querySelectorAll('.etch-grid').forEach(function(e) {
        e.style.backgroundColor = 'white';
    });

    rainbowButton.classList.remove('active-button');
    rainbowButton.classList.remove('active');

    blackButton.classList.remove('active-button');
    blackButton.classList.remove('active');
});



createGrid(gridAmount);