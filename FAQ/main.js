/* const plusButtons = document.querySelectorAll(".plus-button");
const answers = document.querySelectorAll(".answer-invisible");

plusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const answer = button.parentElement.nextElementSibling;
        answer.classList.toggle("answer-visible");
    })
})
 */
const plusButtons = document.querySelectorAll(".plus-button");
const minusButtons = document.querySelectorAll(".minus-button");

plusButtons.forEach((plusButton, index) => {
    const minusButton = minusButtons[index];
    const answer = plusButton.parentElement.nextElementSibling;

    plusButton.addEventListener("click", () => {
        answer.classList.toggle("answer-visible"); // Show the answer
        plusButton.style.display = "none"; // Hide the plus button
        minusButton.style.display = "block"; // Show the minus button
    });

    minusButton.addEventListener("click", () => {
        answer.classList.toggle("answer-visible"); // Hide the answer
        plusButton.style.display = "block"; // Show the plus button
        minusButton.style.display = "none"; // Hide the minus button
    });
});
