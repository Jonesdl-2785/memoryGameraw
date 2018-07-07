const cardImages = ["gem.png", "paper-plane.png", "bolt.png",
                  "leaf.png", "cube.png", "sun.png", "bell.png",
                  "anchor.png"];
let board = document.getElementById('gameBoard');
let messageTop = document.getElementById('message');
let cardArray = cardImages.concat(cardImages);
let cardsClicked = 0;
let previousCard = -1;
let timer = '';
let score = 100;
let msgText = '';
let seconds = 0;
let milsecs = 0;
let mins = 0;
let hours = 0;
let time;
let t;
let scorePanel = 0;
let moves = 0;
let gmtime = document.getElementById('gmtime');
let btnText = document.getElementById('gameConsole');
let restartGame = document.getElementById('gameConsole').addEventListener('click', beginGame);
toggleArr = new Array();

// Start game
beginGame();
function beginGame(){
  clearInterval(timer);
  clearTimeout(t);
  timerG();
  seconds = 0;
  milsecs = 0;
  minutes = 0;
  moves = 0;
  hours = 0;
  score = 100;
    // clear gameboard
    shuffleArray(cardArray);
    score = 0;
    board.innerHTML = "";
    // create new gameboard
    btnText.innerHTML = "Restart Game";
    msgText = "Choose card to begin Game";
    for (let i = 0; i <= ((cardArray.length)-1); i++) {
//       showImage(i);
      board.innerHTML += '<div class="col-md-3 col-xs-4 gamecard"><img id="cards'+i+'" src="img/heart.png" onclick="clickCard(\''+cardArray[i]+'\',\''+i+'\',this); return false;" class="shuffleimage"></div>';
    }
}

// function showImage(i){
//
// }

function clickCard(a,b,c) {
  // console.log(c);
  previousCard = b;
  if(cardsClicked < 2 && previousCard != b){
    toggleArr[cardsClicked] = cardArray[b];
    toggleArr[(cardsClicked + 2)] = c. id;
    cardsClicked++;
    c.src = 'img/' + cardArray[b];
      if(cardsClicked  == 2){
        if(toggleArr[0] == toggleArr[1]){
          msgText('It\'s a MATCH');
            choosenewCards();
            score = score + 1;
            // Check if Game is over
            if(cardImages <= score) {
                console.log("GAME OVER");
                endGame();
            }
        } else {
            timer = setInterval(resetCard, 3000);
            console.log('no match');
            msgText('Not a MATCH');
        }
    }
    previousCard = b;
  }
}

function addMove(){
  moves++
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
  if(cardsClicked.length === 2){
    checkForMatch(clickCard);
    addMove();
  }
}

function messageText(message){
  clearInterval(msgText);
  messageTop.innerHTML = message;
  if(message!='Find a match'){
  msgText = setInterval(msgText, 1100, 'Find a match');
  }
}
function addTime(){
  score--;
  seconds++;
  if(seconds >= 60){
    seconds = 0;
    minutes++;
      if(minutes >= 60){
        minutes = 0;
        hours++;
      }
  }
  gmtime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timerG();
}
function timerG(){
  time = setTimeout(addTime, 1100);
}
function endGame(){
    if(score < 0) {
      score = 0;
    }
    msgText("GAME OVER<br> Thanks for Playing!<br>You Scored = "+score);
  // document.getElementById('gameConsole').innerHTML = "New Game";
    btnText.innerHTML = "Click to Play Again";
}

function choosenewCards(){
  cardsClicked = 0;
  toggleArr = [];
  previousCard = -1;
  clearInterval(timer);
}

function resetCard(){
  if(toggleArr[2]){
    document.getElementById(toggleArr[2]).src = "img/heart.png";
  }
  if(toggleArr[3]){
    document.getElementById(toggleArr[3]).src = "img/heart.png";
  }
  choosenewCards();
}

function shuffleArray(d) {
for (var c = d.length - 1; c > 0; c--) {
var b = Math.floor(Math.random() * (c + 1));
var a = d[c];
d[c] = d[b];
d[b] = a;
}
return d
};

function getScore() {
  if (moves === 12 || moves === 36
  ){  deleteStar();
  }
}

function hideStar () {
  let starsLi = document.querySelectorAll('.stars li');
  for (star of starsLi) {
    if (star.style.display !== 'none') {
      star.style.display = 'none';
    }
  }
}
hideStar();
