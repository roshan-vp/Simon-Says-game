let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "blue", "orange"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn);
};

function checkAns(idx) {

    if (gameSeq[idx] == userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! your score was <b>${level}</b> <br> press any key to start.`;
        reset();
        document.querySelector("body").classList.add("bgRed");
        setTimeout(() => {
            document.querySelector("body").classList.remove("bgRed");
        }, 250);
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
};

function reset() {
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}
