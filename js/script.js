document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const textElement = document.getElementById("typing-text");

    if (textElement) { // Check if the element exists
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

    }

    // Envelope Scrolling
    const container = document.querySelector(".envelope-container");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");

    if (container && prevArrow && nextArrow) { // Check if elements exist
        const scrollAmount = 140; // Adjust based on envelope size

        prevArrow.addEventListener("click", () => {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        nextArrow.addEventListener("click", () => {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }
});
