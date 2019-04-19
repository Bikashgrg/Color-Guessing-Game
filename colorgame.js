console.log("connected");

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click",function(){
	// generate only 3 boxes rather than 6 boxes
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardButton.addEventListener("click",function(){
	// generate only 3 boxes rather than 6 boxes
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	
});

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color form array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	msgDisplay.textContent = "";
	//change color of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickColor = this.style.backgroundColor;
		console.log(clickColor,pickedColor);
		if(clickColor === pickedColor){
			msgDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickColor);
			h1.style.backgroundColor = clickColor;
		}
		else{
			this.style.backgroundColor = "#232323";	
			msgDisplay.textContent = "Try again!"; 
		}
	});
}

function changeColor(color){
	// loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i=0;i<num;i++){
		// get random colors and push into array
		arr.push(randomColor());
	}

	// return that array
	return arr;
}

function randomColor(){
	// pick a red form 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green form 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue form 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";

}