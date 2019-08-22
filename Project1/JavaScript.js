/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

initRound();
var lastDice;
/*
 * To access any element in a HTML page, we always neeed to start by accessing the document object. 
 * More reference: https://www.w3schools.com/js/js_htmldom_document.asp
 */
//Queryselector use select an element from the webpage, it select the first element it finds
//document.querySelector('#current-' + activePlayer).textContent = dice;
//.innertHTML will change the inner element of HTML, for HTML need to be a string in javaScript
//document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + '</em>'; //change text font
//QuerySelector can also used to read a element and store it in a var
//use '#' is for id || use '.' when selecting classes
//var x = document.querySelector('#score-0').textContent;  | select a value and set it to a var


//https://developer.mozilla.org/en-US/docs/Web/Events for more event listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    // This is anonymous function
    if (gamePlaying) {
        //1. Need a random number as soon as a user click the button
        //Math.floor() is to round the number, math.random() will generate a random number, 
        // *6 will generate random number between 0 -5, +1 will generate a random number between 1-6
        var dice = Math.floor(Math.random() * 6 + 1);
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';  //selecting the corresponding dice image
        if (dice === 6 && lastDice === 6) {
            //Player roll six twice, loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        }
        //3. Update the round score IF the rolled number was NOT a 1 
        else if (dice !== 1) {
            //Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
        lastDice = dice;
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    //1. Add current socre to global socre
    if (gamePlaying) { //if the game is actively playing
        scores[activePlayer] += roundScore;
        //2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            //Next player
            nextPlayer();
        }
    }
})



function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //Display the content
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Change the ative player by removing or add 'active' indicator
    //Toggle method is great for hide(remove) or show(add)
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Hide the dice if active player roll a 1, and other player turn
    document.querySelector('.dice').style.display = 'none';
}

//New Game button, call initRound when click
document.querySelector('.btn-new').addEventListener('click', initRound);

function initRound() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    //For class use '.' instead of '#', Use querySelector to change CSS style
    // style = method, display = CSS property , none = value for the property
    document.querySelector('.dice').style.display = 'none';

    //Set Player score and round score to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Change the winner back to player when new game begins
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //Remove any active player to ensure there's no active player
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('avtive');
    document.querySelector('.player-1-panel').classList.remove('active');
    //Set player 0 back to the initial player
    document.querySelector('.player-0-panel').classList.add('active');
}


/*
Challenges 3
Change the Game to the following Rules:
1. A player loosese his ENTIRE Score when he rolls two 6 in a row. After that, its the next
player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they
can change the predefined score of 100. (Hint: you can read that value with the .value property
in JavaScript. This is a good opportuniry to use google to figure this out)
3. Add another dice to the game, so that there are two dice now. The player looses his current 
score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a 
look at the CSS code for the first one.)
 */

