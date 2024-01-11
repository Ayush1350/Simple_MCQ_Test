function submitQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let totalAttempt = 0;
    
    const answers = {
        q1: "Paris",
        q2: "Jupiter",
        q3: "7"
    };

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                correctAnswers++;
                totalAttempt++;
            } else {
                incorrectAnswers++;
                totalAttempt++;
            }
        } 
    }

    // Display the results
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <p>Total Attempt : ${totalAttempt}</p>
        <p>Total Unattempted: ${Object.keys(answers).length - totalAttempt}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Incorrect Answers: ${incorrectAnswers}</p>
        <p>Score: ${correctAnswers} / ${Object.keys(answers).length}</p>
    `;
}
