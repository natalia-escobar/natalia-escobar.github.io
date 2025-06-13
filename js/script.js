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
        // Stop blinking cursor
        textElement.style.animation = "none";
        textElement.style.borderRight = "none";

        return;
    }
}

function deleteEffect() {
    if (lines.length > 0) {
        lines.pop(); // Remove the last line
        updateText();
        setTimeout(deleteEffect, 300); // Deleting speed
    } else {
        // Reset for the next cycle
        index = 0;
        isDeleting = false;
        charIndex = 0;
        lines = []; // Clear all stored lines
        setTimeout(typeEffect, 1000); // Pause before restarting
    }
}

function updateText() {
    if (index < phrases.length) {
        if (index === 0) {
            lines[index] = phrases[index].substring(0, charIndex);
        } else {
            lines[index] = invisibleSpacing + phrases[index].substring(0, charIndex);
        }
    }
    textElement.innerHTML = lines.join("<br>"); // Display each phrase on a new line
}

document.addEventListener("DOMContentLoaded", typeEffect);

const mailboxWiggle = document.getElementById("mailbox-wiggle");
const mailboxFlagup = document.getElementById("mailbox-flagup");
const mailboxMail = document.getElementById("mailbox-mail");
const mailboxText = document.getElementById("mailbox-text");

let clickedOnce = false;

// On hover: play flag-up animation
mailboxWiggle.addEventListener("mouseenter", () => {
    mailboxWiggle.style.display = "none";
    mailboxFlagup.style.display = "block";
    mailboxFlagup.play();
    mailboxText.style.opacity = 1;
});

// On click: play mail animation or redirect
mailboxFlagup.addEventListener("click", () => {
    if (!clickedOnce) {
        mailboxFlagup.style.display = "none";
        mailboxMail.style.display = "block";
        mailboxMail.play();
        clickedOnce = true;
    } else {
        window.location.href = "projects.html";
    }
});

