function checkAnswer() {
        const correctAnswer = "4";
const userAnswer = document.querySelector('input[name="quiz"]:checked'); 
   const userValue = userAnswer.value;
if (userValue === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
} else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
}
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);