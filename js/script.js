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

document.addEventListener("DOMContentLoaded", () => {
    const mailboxWrapper = document.querySelector(".mailbox-wrapper");
    const mailboxFlag = document.getElementById("mailbox-flag");
    const mailboxMail = document.getElementById("mailbox-mail");
    const mailboxText = document.getElementById("mailbox-text");

    if (!mailboxFlag || !mailboxMail || !mailboxText) {
        console.error("One or more mailbox elements not found.");
        return;
    }
        
    mailboxFlag.src = "assets/mailbox-flag.webm";
    mailboxMail.src = "assets/mailbox-mail.webm";

    let clickedOnce = false;

    // Hover → stop wiggle, play flag animation, show text
    mailboxWrapper.addEventListener("mouseenter", () => {
        mailboxWrapper.classList.remove("wiggle");
    
        mailboxFlag.currentTime = 0;
        mailboxFlag.play();
        mailboxText.style.opacity = 1;
    });

    // Click → switch to mail animation or go to projects
    mailboxFlag.addEventListener("click", () => {
        if (!clickedOnce) {
            mailboxFlag.style.display = "none";
            mailboxMail.style.display = "block";
            mailboxMail.currentTime = 0;
            mailboxMail.play();
            clickedOnce = true;
    } else {
        window.location.href = "projects.html";
    }
    });

    mailboxMail.addEventListener("ended", () => {
        const word = document.getElementById("mailbox-word");
        word.style.opacity = 1;
    });
});
