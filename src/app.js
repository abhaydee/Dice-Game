/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, activePlayer, dice, roundScore;
var gamePlaying=true;
scores = [0, 0];
console.log(scores);
activePlayer = 0;
roundScore = 0;





//At the starting point of the game , the dice should be invisible
document.querySelector(".dice").style.display = 'none';

//the dice operation.

document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("score-1").textContent = "0";


document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying){
     // use the calculation random number
     dice = Math.floor(Math.random() * 6) + 1;
     console.log(dice);
     //display the result.
     var diceinteract = document.querySelector(".dice")
     diceinteract.style.display = "block";
     diceinteract.src = 'dice-' + dice + '.png';

     //update the round score

     if (dice != 1) {
       //we are adding a score
       roundScore += dice;
       console.log(roundScore);
       // var tempScore=roundScore;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
       //document.querySelector("#score-" +activePlayer).textContent=roundScore ;

     } else {
       //next player should play
       nextPlayer();
     }
}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  //add current score to player's global score.
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //winning the GAME
  console.log("winner score" + roundScore);
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = "WINNER";
    document.querySelector(".dice").style.display = "none";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    nextPlayer();

  }




});


function nextPlayer() {

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById("current-0").textContent = '0';
  document.getElementById("current-1").textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.dice').style.display = "none";
}

document.querySelector(".btn-new").addEventListener('click' , function(){
    scores=[0,0];
    activePlayer=0;
roundScore=0;
document.querySelector('.dice').style.display="none";
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById("name-0").textContent="Player 1";
document.getElementById("name-1").textContent="Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
});
