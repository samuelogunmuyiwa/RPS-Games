const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#playerText");
const resultText = document.querySelector("#playerText");
const choiceBtns = document.querySelector("#choiceBtns");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

	player = button.textContent;
	computerTurn();
		
}));


function computerTurn(){

	const randNum = math.floor(math.random() * 3) + 1;

	switch(randNum){

	  case 1 :
	  	computer = "ROCK";
	  	break;

	  case 2 :
	  	computer = "PAPER";
	  	break;

	  case 3 :
	  	computer = "SCISSORS";
	  	break;
	}
}