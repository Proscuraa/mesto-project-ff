const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");

function createCard(card, deleteCallback) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    cardImage.src = card.link;
    cardTitle.textContent = card.name;
    cardImage.alt = `фотография места: ${card.name}`;

    deleteButton.addEventListener("click", () => {
        deleteCallback(cardElement);
    });
    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.remove();
}

initialCards.forEach((cardElement) => {
    const card = createCard(cardElement, deleteCard);
    cardsContainer.append(card);
});
