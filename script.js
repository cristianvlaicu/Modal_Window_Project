"use strict"; // Enforces strict mode to catch common coding mistakes and unsafe actions.

// Selects the modal element with the class "modal".
const modal = document.querySelector(".modal");

// Selects the overlay element with the class "overlay".
const overlay = document.querySelector(".overlay");

// Selects the button with the class "close-modal".
const btnCloseModal = document.querySelector(".close-modal");

// Selects all elements with the class "show-modal" (NodeList).
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open the modal by removing the "hidden" class.
const openModal = function () {
  modal.classList.remove("hidden"); // Removes the "hidden" class from the modal, making it visible.
  overlay.classList.remove("hidden"); // Removes the "hidden" class from the overlay, making it visible.
};

// Function to close the modal by adding the "hidden" class.
const closeModal = function () {
  modal.classList.add("hidden"); // Adds the "hidden" class to the modal, hiding it.
  overlay.classList.add("hidden"); // Adds the "hidden" class to the overlay, hiding it.
};

// Loops through all "show-modal" buttons and adds a click event listener to each.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal); // Calls the openModal function when a button is clicked.

// Adds a click event listener to the close button to close the modal.
btnCloseModal.addEventListener("click", closeModal);

// Adds a click event listener to the overlay to close the modal when clicked.
overlay.addEventListener("click", closeModal);

// Adds a keydown event listener to the entire document to detect key presses.
document.addEventListener("keydown", function (e) {
  // Checks if the pressed key is "Escape" and if the modal is currently visible.
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal(); // Calls the closeModal function to hide the modal and overlay.
  }
});
