document.addEventListener("DOMContentLoaded", () => {
    // === Mailbox Animation ===
    const mailboxWrapper = document.querySelector(".mailbox-wrapper");
    const mailboxFlag = document.getElementById("mailbox-flag");
    const mailboxMail = document.getElementById("mailbox-mail");
    const mailboxText = document.getElementById("mailbox-text");

    if (mailboxWrapper && mailboxFlag && mailboxMail && mailboxText) {
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
            if (word) word.style.opacity = 1;
        });

        // Click on mailboxMail → go to projects
        mailboxMail.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    }

    // === Postcard Flip Animation ===
    const flipCards = document.querySelectorAll('.js-flip');
    flipCards.forEach(card => {
        const inner = card.querySelector('.flip-inner');
        if (!inner) return;

        card.addEventListener('mouseenter', () => {
            document.querySelectorAll('.flip-inner.flipped').forEach(f => {
                if (f !== inner) f.classList.remove('flipped');
            });
            inner.classList.add('flipped');
        });

        card.addEventListener('mouseleave', () => {
            inner.classList.remove('flipped');
        });
    });
});
