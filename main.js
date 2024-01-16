const rating_cards = document.querySelectorAll(".flex-group button");
const submit_btn = document.querySelector(".submit-btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating__section");
const thank_section = document.querySelector(".thank__section");

let rate = null;

rating_cards.forEach((rating_cards) => {
    rating_cards.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    });
});

submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
});