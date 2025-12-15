export function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.card = card;
    return cardElement;
}

export function flipCard(cardElement) {
    if (cardElement.classList.contains("flipped")) return;
    cardElement.classList.add("flipped");
    cardElement.textContent = cardElement.dataset.card;
}

export function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const cardInner = document.createElement('span');
    cardInner.classList.add('card-inner');
    cardInner.textContent = card;

    cardElement.appendChild(cardInner);
    cardElement.dataset.card = card;
    return cardElement;
}


