let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"]; 

let started = false;
let level = 0;
let hei = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        started = true; 

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    }, 250)
}

function levelUp() { 
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq)

    btnFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {

       if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
            hei = level;
       }

    } else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br>Press any key to continue and your highest score is ${hei + 1}`
        reset();
    };


}

function btnPress() {
    userFlash(this);

    userColor = this.getAttribute("id")
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq)

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}