document.addEventListener("DOMContentLoaded", () => {
    
    const cards = [
        "assets/chopsmart-card-withclip.png",
        "assets/coro-card-withclip.png",
        "assets/sneaker-card-withclip.png"
    ];

    let currentIndex = 0;
    const cardScroll = document.querySelector(".card-scroll");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    function showCard(index, direction = "right") {
        const oldCard = document.querySelector(".card-visible");

        const newCard = document.createElement("img");
        newCard.src = cards[index];
        newCard.classList.add("card-visible");

        // Start off-screen but hidden until old card starts moving
        newCard.style.opacity = "0";
        cardScroll.appendChild(newCard);

        // Force browser to register DOM addition before applying animation
    requestAnimationFrame(() => {
      // Apply correct slide-in direction after one frame
        newCard.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");
        newCard.style.opacity = "1";
        });

        if (oldCard) {
        // Animate old card out
        oldCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

        // Wait for the old card's animation to finish before removing
        oldCard.addEventListener("animationend", () => oldCard.remove(), { once: true });
        }
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex, "right");
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex, "left");
    }

    rightArrow.addEventListener("click", nextCard);
    leftArrow.addEventListener("click", prevCard);

// Show the first card
    showCard(currentIndex);

});
