var colors = generateRandomColors(9);

var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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