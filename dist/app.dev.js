"use strict";

var all = {
  introFlex: document.getElementById("introFlex"),
  soloFlex: document.getElementById("soloFlex"),
  twoFlex: document.getElementById("twoFlex"),
  oneScore: document.getElementById("playerOneScore"),
  twoScore: document.getElementById("playerTwoScore"),
  diceImg: document.getElementById("diceImg"),
  holdDice: document.getElementById("holdDice"),
  rollDice: document.getElementById("rollDice"),
  scoreFlex: document.getElementById("scoreFlex"),
  diceFlex: document.getElementById("diceFlex"),
  resetGame: document.getElementById("resetButton")
};
playerTurn = 1;
var playerOneScore = 0;
var playerTwoScore = 0;
twoPlayerCheck = 0;

function scoreUpdate(player, roll) {
  if (player == 1) {
    if (roll == 1) {
      playerOneScore = 0;
      all.oneScore.textContent = playerOneScore;

      if (twoPlayerCheck == 1) {
        playerTurn = 2;
      }
    } else {
      playerOneScore += roll;
      all.oneScore.textContent = playerOneScore;
    }
  } else if (player == 2) {
    if (roll == 1) {
      playerTwoScore = 0;
      all.twoScore.textContent = playerTwoScore;

      if (twoPlayerCheck = 1) {
        playerTurn = 1;
      }
    } else {
      playerTwoScore += roll;
      all.twoScore.textContent = playerTwoScore;
    }
  }

  if (playerOneScore > 20) {
    all.oneScore.textContent += " Win";
    all.rollDice.style.display = "none";
    all.holdDice.style.display = "none";
    playerTurn = 2;
    all.resetGame.style.display = "flex";
  }

  if (playerTwoScore > 20) {
    all.twoScore.textContent += " Win";
    all.rollDice.style.display = "none";
    all.holdDice.style.display = "none";
    playerTurn = 1;
    all.resetGame.style.display = "flex";
  }
}

function rollDice(player) {
  diceRoll = Math.ceil(Math.random() * 6);

  switch (diceRoll) {
    case 1:
      scoreUpdate(player, 1);
      diceImg.src = "./images/One.png";
      break;

    case 2:
      scoreUpdate(player, 2);
      diceImg.src = "./images/Two.png";
      break;

    case 3:
      scoreUpdate(player, 3);
      diceImg.src = "./images/Three.png";
      break;

    case 4:
      scoreUpdate(player, 4);
      diceImg.src = "./images/Four.png";
      break;

    case 5:
      scoreUpdate(player, 5);
      diceImg.src = "./images/Five.png";
      break;

    case 6:
      scoreUpdate(player, 6);
      diceImg.src = "./images/Six.png";
      break;
  }
}

function reset() {
  document.getElementById("introFlex").style.display = "flex";
  all.soloFlex.style.display = "none";
  all.twoFlex.style.display = "none";
  all.scoreFlex.style.display = "none";
  all.oneScore.style.display = "none";
  all.twoScore.style.display = "none";
  all.holdDice.style.display = "none";
  all.diceFlex.style.display = "none";
  all.resetGame.style.display = "none";
  all.rollDice.style.display = "flex";
  playerTurn = 1;
  playerOneScore = 0;
  playerTwoScore = 0;
  twoPlayerCheck = 0;
}

all.soloFlex.style.display = "none";
all.twoFlex.style.display = "none";
all.scoreFlex.style.display = "none";
all.oneScore.style.display = "none";
all.twoScore.style.display = "none";
all.holdDice.style.display = "none";
all.diceFlex.style.display = "none";
all.resetGame.style.display = "none";
window.addEventListener('click', function (event) {
  if (event.target == solo) {
    all.introFlex.style.display = "none";
    all.soloFlex.style.display = "flex";
    twoPlayerCheck = 0;
    all.scoreFlex.style.display = "flex";
    all.oneScore.style.display = "flex";
    all.diceFlex.style.display = "flex";
    document.getElementById("introFlex").style.display = "none";
  } else if (event.target == multi) {
    all.introFlex.style.display = "none";
    all.twoFlex.style.display = "flex";
    twoPlayerCheck = 1;
    all.scoreFlex.style.display = "flex";
    all.oneScore.style.display = "flex";
    all.twoScore.style.display = "flex";
    all.holdDice.style.display = "flex";
    all.diceFlex.style.display = "flex";
    document.getElementById("introFlex").style.display = "none";
  }
});
all.rollDice.addEventListener('click', function () {
  rollDice(playerTurn);
});
all.resetGame.addEventListener('click', function () {
  reset();
});
all.holdDice.addEventListener('click', function (event) {
  if (playerTurn == 1) {
    playerTurn = 2;
  } else if (playerTurn == 2) {
    playerTurn = 1;
  }
});