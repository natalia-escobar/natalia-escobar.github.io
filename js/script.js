document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const textElement = document.getElementById("typing-text");

    const phrases = [
        "a creative problem-solver",
        "passionate about sustainability",
        "interested in material innovation",
        "a storyteller",
        "a designer"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[index];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 3000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length; // Move to next phrase
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }

    typeEffect(); // Start typing effect

    // Envelope Shuffle Effect
    const container = document.querySelector(".envelope-container");
    let envelopes = Array.from(container.children);
    const shuffleButton = document.getElementById("shuffle-button");

    function shuffleEnvelopes() {
        envelopes.sort(() => Math.random() - 0.5);
        container.innerHTML = "";
        envelopes.forEach(env => container.appendChild(env));
        shuffleButton.style.display = "block"; // Show shuffle button
    }

    // Initial shuffle on page load
    shuffleEnvelopes();

    // Shuffle envelopes when "Shuffle Again" is clicked
    shuffleButton.addEventListener("click", shuffleEnvelopes);
});
