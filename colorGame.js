var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++){
    // Add event listener to each button
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        // Add class selected only to the current button
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numberOfSquares = 3;
        } else if(this.textContent === "Medium"){
            numberOfSquares = 6;
        } else {
            numberOfSquares = 9;
        }
        reset();
    });
}

function reset(){
    // Generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // Pick a new random color from array
    pickedColor = colorPicker();
    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Hide all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.display = "none";
    }
    // Change colors of squares
    for(let i = 0; i < colors.length; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    // Change the color of h1
    h1.style.backgroundColor = "steelblue";
    // Change the content of resetButton
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
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