const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (event) => {
  if (event.target.parentNode.classList.contains("rating")) {
    removeActive();
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (event) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br />
    <strong>Feedback:${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
