console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // this helps us clear all previous entries
  cardContainer.innerHTML = "";

  const newCard = document.createElement("li");

  newCard.classList.add("card");
  const cardText = textInput.value;

  newCard.innerHTML = `
    <h2 class="card__title">Card</h2>
    <p>${cardText}</p>
  `;

  cardContainer.append(newCard);
});
