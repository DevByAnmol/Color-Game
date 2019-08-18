var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

mediumBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

resetButton.addEventListener("click", function(){
    // Generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // Pick a new random color from array
    pickedColor = colorPicker();
    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Change colorsof squares
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // Change the color of h1
    h1.style.backgroundColor = "#232323";
    // Change the content of resetButton
    resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    // Added initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add Click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab the color of square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColor(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function colorPicker(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // Create an array
    var arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // Pick "Red"
    var r = Math.floor(Math.random() * 256);
    // Pick "Green"
    var g = Math.floor(Math.random() * 256);
    // Pick "Blue"
    var b = Math.floor(Math.random() * 256);
    // Return random color
    return "rgb(" + r + ", " + g + ", " + b + ")";
}