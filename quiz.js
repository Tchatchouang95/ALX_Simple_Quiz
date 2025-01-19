function checkAnswer() {
    const correctAnswer = "4";
    var userAnswer;
    var textContent;
    var checked = document.querySelector('input[name="quiz"]:checked');
    userAnswer = checked.value;
    textContent = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        textContent.innerHTML = "Correct! Well done."
    }
    else {
        textContent.innerHTML = "That's incorrect. Try again!"
    }  
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);