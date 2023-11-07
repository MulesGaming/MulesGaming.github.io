// Load

console.log("Rock, paper, scissors Java script loaded")

// Defanitions

var Rock = document.getElementById("RockSelection");
var Paper = document.getElementById("PaperSelection");
var Scissors = document.getElementById("ScissorsSelection");
let outputDiv = document.getElementById("outputContainer")

// 

function selectionRock () {
  processResult ("Rock")
};

function selectionPaper () {
  processResult ("Paper")
};

function selectionScissors () {
  processResult ("Scissors")
};

// Main

function processResult (userSelection) {
  // Computer choice
  var randomInteger = function (number) {
    return Math.floor(Math.random() * number);
  };
  // From https://gomakethings.com/generating-random-numbers-with-vanilla-js/
  var rngOutput = randomInteger(3);
  // Defining
  if (rngOutput === 0) {
    var outputValue = "Rock"
  } else if (rngOutput === 1){
    var outputValue = "Paper"  
  } else if (rngOutput === 2){
    var outputValue = "Scissors"
  } else if (rngOutput === 3){
    var outputValue = "Scissors"
  } else {
    var outputValue = "Unknown"
    console.error("Number does not correspond to a option")
  }
  gameWinner
  // Game winner
    if (outputValue === userSelection) {
      var gameWinner = "It's a tie!"
      console.log("Game result: Tie!")
    //
    } else if (outputValue === "Rock") {
      // Computer rock and user paper
      if (userSelection === "Paper"){
        var gameWinner = "You win!"
        console.log("Player wins!")
      }
      // Computer rock and user Scissors
      if (userSelection === "Scissors"){
        var gameWinner = "You lose!"
        console.log("The player lose!")
      }
    //
    }else if (outputValue === "Paper") {
      // Computer paper and user rock
      if (userSelection === "Scissors"){
        var gameWinner = "You win!"
        console.log("Player wins!")
      }
      // Computer Paper and user Scissors
      if (userSelection === "Rock"){
        var gameWinner = "You lose!"
        console.log("The player lose!")
      }
    //
    }else if (outputValue === "Scissors") {
      // Computer paper and user rock
      if (userSelection === "Rock"){
        var gameWinner = "You win!"
        console.log("Player wins!")
      }
      // Computer Paper and user Scissors
      if (userSelection === "Paper"){
        var gameWinner = "You lose!"
        console.log("The player lose!")
      }
    } else {
      var gameWinner = "Error: Unknown winner"
      console.error("Could not determine winner")
    }

  // Result text
  outputDiv.innerHTML = `
  <p class="result-text">You chose <span class="user-selection">` + userSelection + `</span> and I chose <span class="computer-choise">` + outputValue +`</span>. <span class="game-winner">` + gameWinner + `</span></p>`  
}

