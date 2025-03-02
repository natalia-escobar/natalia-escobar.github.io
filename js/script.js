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
        setTimeout(() => isDeleting = true, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % phrases.length; // Move to next phrase
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
}

document.addEventListener("DOMContentLoaded", typeEffect);
