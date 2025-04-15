function checkQuiz() {
    let score = 0;

    // Verificarea răspunsurilor
    if (document.getElementById("question1_1").checked) {
        score++;
        document.getElementById("feedback1").textContent = "Corect! România era o monarhie constituțională.";
    } else {
        document.getElementById("feedback1").textContent = "Greșit! Răspunsul corect este monarhie constituțională.";
    }

    if (document.getElementById("question2_1").checked) {
        score++;
        document.getElementById("feedback2").textContent = "Corect! Partidul Național Liberal era cel mai important.";
    } else {
        document.getElementById("feedback2").textContent = "Greșit! Răspunsul corect este Partidul Național Liberal.";
    }

    if (document.getElementById("question3_1").checked) {
        score++;
        document.getElementById("feedback3").textContent = "Corect! Marea Unire a avut loc în 1918.";
    } else {
        document.getElementById("feedback3").textContent = "Greșit! Răspunsul corect este 1918.";
    }

    if (document.getElementById("question4_1").checked) {
        score++;
        document.getElementById("feedback4").textContent = "Corect! Modernismul a fost mișcarea culturală dominantă.";
    } else {
        document.getElementById("feedback4").textContent = "Greșit! Răspunsul corect este Modernismul.";
    }

    // Afișarea rezultatului
    let resultMessage = `Ai răspuns corect la ${score} din 4 întrebări.`;
    if (score === 4) {
        resultMessage += " Felicitări! Ai un punctaj perfect!";
    } else if (score === 0) {
        resultMessage += " Ai nevoie de mai multe informații!";
    } else {
        resultMessage += " Continuă să înveți!";
    }

    document.getElementById("quiz-result").innerText = resultMessage;
}
