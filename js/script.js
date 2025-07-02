document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    // === Mailbox Animation (only on homepage) ===
    if (path.endsWith("index.html") || path === "/") {
        const mailboxWrapper = document.querySelector(".mailbox-wrapper");
        const mailboxFlag = document.getElementById("mailbox-flag");
        const mailboxMail = document.getElementById("mailbox-mail");
        const mailboxText = document.getElementById("mailbox-text");

        if (mailboxFlag) mailboxFlag.src = "assets/mailbox-flag.webm";
        if (mailboxMail) mailboxMail.src = "assets/mailbox-mail.webm";

        let clickedOnce = false;

        if (mailboxWrapper && mailboxFlag && mailboxText) {
            mailboxWrapper.addEventListener("mouseenter", () => {
                mailboxWrapper.classList.remove("wiggle");
                mailboxFlag.currentTime = 0;
                mailboxFlag.play();
                mailboxText.style.opacity = 1;
            });

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
        }

        if (mailboxMail) {
            mailboxMail.addEventListener("ended", () => {
                const word = document.getElementById("mailbox-word");
                if (word) word.style.opacity = 1;
            });

            mailboxMail.addEventListener("click", () => {
                window.location.href = "projects.html";
            });
        }
    }

    // === Postcard Flip (only on projects page) ===
    if (window.location.pathname.endsWith("projects.html")) {
        const flipCards = document.querySelectorAll(".js-flip");
    
        flipCards.forEach((card) => {
            const inner = card.querySelector(".flip-inner");
            if (!inner) return;
            card.addEventListener("mouseenter", () => {
            // remove flipped class from others
            document.querySelectorAll(".flip-inner.flipped").forEach((f) => {
                if (f !== inner) f.classList.remove("flipped");
            });
            inner.classList.add("flipped");
        });
    
        card.addEventListener("mouseleave", () => {
            inner.classList.remove("flipped");
        });
        });
    }
});
