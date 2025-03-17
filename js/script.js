const textElement = document.getElementById("typing-text");

const namePrefix = "Natalia Escobar is "; // Visible only for the first phrase
const invisibleSpacing = "&nbsp;".repeat(namePrefix.length); // Invisible space equivalent to prefix
const phrases = [
    "a creative problem-solver",
    "passionate about sustainability",
    "interested in material innovation",
    "a storyteller",
    "a mechanical design engineer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let lines = []; // Stores typed lines

function typeEffect() {
    if (index < phrases.length) {
        const currentPhrase = phrases[index];

        if (!isDeleting) {
            // Typing phase
            if (charIndex < currentPhrase.length) {
                charIndex++;
                updateText();
                setTimeout(typeEffect, 100); // Typing speed
            } else {
                setTimeout(() => {
                    index++;
                    charIndex = 0;
                    typeEffect();
                }, 1000); // Pause before moving to the next phrase
            }
        }
    } else {
        // Start deleting all lines
        isDeleting = true;
        setTimeout(deleteEffect, 1000); // Pause before deleting
    }
}

function deleteEffect() {
    if (lines.length > 0) {
        lines.pop(); // Remove the last line
        updateText();
        setTimeout(deleteEffect, 50); // Deleting speed
    } else {
        // Reset for the next cycle
        index = 0;
        isDeleting = false;
        charIndex = 0;
        setTimeout(typeEffect, 1000); // Pause before restarting
    }
}

function updateText() {
    if (index === 0) {
        lines[index] = phrases[index].substring(0, charIndex);
    } else {
        lines[index] = invisibleSpacing + phrases[index].substring(0, charIndex);
    }
    textElement.innerHTML = lines.join("<br>"); // Display each phrase on a new line
}

document.addEventListener("DOMContentLoaded", typeEffect);

