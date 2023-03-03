//'use strict';
//Selecting elements
let p1=prompt('Enter the name of 1st palyer');
let p2=prompt('Enter the name of 2nd palyer');
let player0E1=document.querySelector('.player--0');
let player1El=document.querySelector('.player--1');
//Enter the names to P1 & P2
const play1=document.querySelector('#name--0');
const play2=document.querySelector('#name--1');
play1.textContent=p1;
play2.textContent=p2;

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');


const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//Starting conditions
let currentScore,activePlayer,playing,score;

const inti=function() {
     score=[0,0];
     currentScore=0;
     activePlayer=0;
     playing=true;

    ///score0El.textContent=0;
    //score1El.textContent=0;
   

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    
    diceEl.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1El.classList.remove('player--active');
};
inti();

const switchPlayer=function() {
     //Switching the player
     document.getElementById(`current--${activePlayer}`).textContent=0;
     activePlayer=activePlayer === 0 ? 1:0;
     currentScore=0;

};
//Actions to rolling a dice
btnRoll.addEventListener('click',function() {
        if(playing) {
        //1.Genrating a random number
        const dice=Math.trunc(Math.random()*6)+1;
        console.log(dice);
        //2.Display dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;

        //3.Checking if dice turnsout to be one,if so switch the player
        if(dice !==1) {
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            //current0El.textContent=currentScore; //Change Later
        }else{
            switchPlayer();
            player0E1.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
    

});

btnHold.addEventListener('click',function() {
    if(playing) {
            //console.log('Hold Button');
        //1.Add current score to activePlayer
        score[activePlayer]+=currentScore;
        //console.log(score[activePlayer]);
        //score[1]=score[1]+ currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
        //If score is greater than 100
        if(score[activePlayer]>=100) {
            playing=false;
            
            //Removing the dice
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`score--${activePlayer}`).textContent="You Won";
        }
        else{
            //Switch the player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click',inti);
       
