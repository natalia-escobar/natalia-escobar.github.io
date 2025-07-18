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

    //to appear when scrolling on projects page

    const cards = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // ScrollSpy logic
const tocLinks = document.querySelectorAll('.toc a');
const sectionIds = Array.from(tocLinks).map(link => link.getAttribute('href'));

    window.addEventListener('scroll', () => {
        let currentId = '';
        sectionIds.forEach(id => {
        const section = document.querySelector(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
            currentId = id;
        }
        });

        tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentId) {
            link.classList.add('active');
        }
        });
    });

});
