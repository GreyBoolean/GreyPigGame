var scores, roundScore, activePlayer, gamePlaying;

//dice = Math.floor(Math.random() * 6) + 1;

//inner html 
/* document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice +'</em>'; */

//setter
/* document.querySelector('#current--' + activePlayer).textContent = dice; */

//getter
/* var x = document.querySelector('#score--1').textContent; */

//GetElementById
/*
document.getElementbyId('score--0').textContent = '0';
*/

/*******************************************************
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
*******************************************************/
//using a function
init();

//callback function
/*
function btn() {
	//do something
}
document.querySelector('.btn--roll').addEventListener('click', btn);
*/

//anonymous function
/*
document.querySelector('.btn--roll').addEventListener('click', function() {
	//do something
});
*/

document.querySelector('.btn--roll').addEventListener('click', function() {
	if (gamePlaying) {
		//1.random number
		var dice = Math.floor(Math.random() * 6) + 1;
		//2.display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		//3.update the round score if the rolled number was not '1'
		if (dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector('#current--' + activePlayer).textContent = roundScore;
		} else {
			//Next player
			/*
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;
			document.getElementById('current--0').textContent = '0';
			document.getElementById('current--1').textContent = '0';
			//document.querySelector('.player--0').classList.remove('player--active');
			//document.querySelector('.player--1').classList.add('player--active');
			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');
			document.querySelector('.dice').style.display = 'none';
			*/
			//using a function(DRY principle)
			nextPlayer();
		}
	}
	
});
document.querySelector('.btn--hold').addEventListener('click', function() {
	if (gamePlaying) {
		//Add current score to global score
		scores[activePlayer] += roundScore
		//Update the UI
		document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
		//Check if the player won the game
		if (scores[activePlayer] >= 20) {
			document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player--' + activePlayer).classList.add('player--winner');
			document.querySelector('.player--' + activePlayer).classList.remove('player--active');
			gamePlaying = false;
		} else {
			//Next player
			nextPlayer();
		}
	}
})
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';
	//document.querySelector('.player--0').classList.remove('player--active');
	//document.querySelector('.player--1').classList.add('player--active');
	document.querySelector('.player--0').classList.toggle('player--active');
	document.querySelector('.player--1').classList.toggle('player--active');
	document.querySelector('.dice').style.display = 'none';
}
/*
document.querySelector('.btn--new').addEventListener('click', function() {
	//something
})
*///ratherr
document.querySelector('.btn--new').addEventListener('click', init);
function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score--0').textContent = '0';
	document.getElementById('score--1').textContent = '0';
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';
	document.getElementById('name--0').textContent = 'Player 1';
	document.getElementById('name--1').textContent = 'Player 2';
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--0').classList.remove('player--active');
	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');
}