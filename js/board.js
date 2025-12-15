import { createCardElement, flipCard } from "./card.js";

const allCards = [
    "🍎", "🍐", "🍒", "🍉", "🍇", "🍓", "🍌", "🍍",
    "🥝", "🥥", "🍑", "🍈", "🍋", "🍊", "🍏", "🍅"
];

const gameBoard = document.getElementById("game-board");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let totalPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function createBoard(cardCount) {
    gameBoard.innerHTML = "";
    matchedPairs = 0;
    totalPairs = cardCount / 2;

    const selectedCards = allCards.slice(0, totalPairs);
    const cards = [...selectedCards, ...selectedCards];
    shuffle(cards);

    cards.forEach(symbol => {
        const cardElement = createCardElement(symbol);
        cardElement.addEventListener("click", () => handleCardFlip(cardElement));
        gameBoard.appendChild(cardElement);
    });
}

function handleCardFlip(cardElement) {
    if (lockBoard) return;
    if (cardElement === firstCard) return;

    flipCard(cardElement);

    if (!firstCard) {
        firstCard = cardElement;
        return;
    }

    secondCard = cardElement;
    lockBoard = true; 

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.card === secondCard.dataset.card;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    matchedPairs++;
    resetTurn();

    if (matchedPairs === totalPairs) {
        setTimeout(() => alert("🎉 Voitit pelin!"), 300);
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.textContent = "";
        secondCard.textContent = "";
        resetTurn();
    }, 1000);
}

function resetTurn() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

export function resetGame(cardCount) {
    createBoard(cardCount);
}

