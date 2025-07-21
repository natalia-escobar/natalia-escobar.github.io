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

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

// === ScrollSpy for Dropdown Menu ===
    const dropdown = document.querySelector('.section-dropdown');
    const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
    const currentSection = dropdown?.querySelector('#current-section');
    const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
    const dropdownLinks = dropdownMenu?.querySelectorAll('a');

    if (dropdown && dropdownToggle && currentSection && dropdownMenu && dropdownLinks) {
        // Close/open dropdown on click
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });

    // Update section title when user clicks a link
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                const text = link.textContent || '';
                currentSection.textContent = text;
                dropdownMenu.classList.remove('show'); // Close menu after click
            });
        });

    // ScrollSpy to update section title based on scroll
        const sectionIds = Array.from(dropdownLinks).map(link => link.getAttribute('href'));

        window.addEventListener('scroll', () => {
            let currentId = '';
            sectionIds.forEach(id => {
                const section = document.querySelector(id);
                if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
                    currentId = id;
                }
            });

            if (currentId) {
                const activeLink = Array.from(dropdownLinks).find(link => link.getAttribute('href') === currentId);
                if (activeLink) {
                    currentSection.textContent = activeLink.textContent || '';
                }
            }
        });

        // Optional: Close dropdown if user clicks outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

});
