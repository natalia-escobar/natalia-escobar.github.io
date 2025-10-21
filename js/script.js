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

  // Start off-screen depending on direction
        newCard.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");

        cardScroll.appendChild(newCard);

        if (oldCard) {
    // Animate old card out
            oldCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

    // Remove it after animation ends
            setTimeout(() => {
                oldCard.remove();
        // then fade in the new card
                newCard.style.animationDelay = "0.1s";
            }, 600);
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
