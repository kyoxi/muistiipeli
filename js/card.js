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

.card {
    position: relative;
    width: 100%;
    padding-top: 100%; 
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    background: #ccc;
    border-radius: 12px;
    backface-visibility: hidden;
    transition: transform 0.4s;
}


.card.flipped .card-inner {
    background: linear-gradient(135deg, #74c0fc, #1c7ed6);
    color: #fff;
    transform: rotateY(180deg);
}
