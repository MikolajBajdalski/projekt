const openModalButton = document.querySelector(".button");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("is-hidden");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("is-hidden");
});
