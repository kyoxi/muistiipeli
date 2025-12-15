import { createBoard, resetGame } from "./board.js";

document.addEventListener("DOMContentLoaded", () => {
    let cardCount = parseInt(
        prompt("Syötä korttien määrä (parillinen luku):"),
        10
    );

    if (isNaN(cardCount) || cardCount % 2 !== 0) {
        alert("Korttien määrän täytyy olla parillinen luku.");
        return;
    }

    createBoard(cardCount);

    const restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", () => {
        resetGame(cardCount);
    });
});

