let bubbleContainer = document.getElementById("bubble-container")
let gameOverContainer = document.getElementById("game-over");
let startButton = document.getElementById("start")
let resetButton = document.getElementById("reset")
let score = document.getElementById("score")
let hitCounter = document.getElementById("hit");
let gameTime = document.getElementById("time");
let scoreCounter = 0;
let hitRn = 0;

function displayNone() {
    bubbleContainer.style.opacity = "0";
}
function displayGame() {
    bubbleContainer.style.opacity = "1";
}
function resewtScore(){
    scoreCounter = 0;
    score.innerHTML = scoreCounter;
}

function finishGame(){
    gameOverContainer.style.display = "block";
}

resetButton.addEventListener("click",finishGame)

function makeBubble() {
    let clutter = "";
    for (var i = 0; i < 99; i++) {
        clutter = clutter + `<div id="bubble"></div>`;
        bubbleContainer.innerHTML = clutter;
    }
    let bubble = document.querySelectorAll("#bubble")
    bubble.forEach(bubble => {
        let randomNum = Math.floor(Math.random() * 20);
        bubble.textContent = randomNum;
    });
}
startButton.addEventListener("click", function () {
    resewtScore();
    displayGame();
    setTime();
    makeBubble();
    getRandomHit();
})

function getRandomHit() {
    hitRn = Math.floor(Math.random() * 20);
    hitCounter.textContent = hitRn;
}

function scoreIncrease() {
    scoreCounter = scoreCounter + 5;
    document.getElementById("score").innerHTML = scoreCounter;
}
function setTime() {
    let time = 60;
    var timer = setInterval(function () {
        if (time > 0) {
            time--;
            gameTime.innerText = time;
        }
        else {
            clearInterval(timer);
            displayNone();
        }
    }, 1000)
}
bubbleContainer.addEventListener("click", function (dets) {
    let clickedNum = (Number(dets.target.innerHTML));
    if (clickedNum == hitRn) {
        scoreIncrease();
        getRandomHit();
        makeBubble();
    }
})
