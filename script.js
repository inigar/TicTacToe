let boxes = document.querySelectorAll(".box");
let turnText = document.getElementById("turn");
let resetBtn = document.getElementById("reset");

let turn = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameActive) {
            box.innerText = turn;
            checkWinner();
            turn = turn === "X" ? "O" : "X";
            if (gameActive) turnText.innerText = "Turn for " + turn;
        }
    });
});

function checkWinner() {
    winPatterns.forEach(pattern => {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            turnText.innerText = boxes[a].innerText + " Won!";
            gameActive = false;

            boxes[a].style.background = "#b3ffb3";
            boxes[b].style.background = "#b3ffb3";
            boxes[c].style.background = "#b3ffb3";
        }
    });
}

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.background = "white";
    });
    turn = "X";
    gameActive = true;
    turnText.innerText = "Turn for X";
});
