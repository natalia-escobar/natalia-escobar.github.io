document.addEventListener("DOMContentLoaded", () => {
    
    const cards = [
        {img: "assets/chopsmart-card-withclip.png", description: "a smart cutting board for gen z, it’s like living in ratatouille", tags: ["smart-products", "user-research","circular design"]},
        {img: "assets/coro-card-withclip.png", description: "a system of wearable devices to make group fitness spaces more inclusive for Deaf/Hard of Hearing participants", tags: ["inclusive design", "wearable devices", "haptics"] },
        {img: "assets/sneaker-card-withclip.png", description: "I made a bio-fabricated sneaker in 8 weeks, and I can actually wear them!", tags: ["bio-materials", "circular design", "material exploration"]}
    ];

    let currentIndex = 0;
    const cardScroll = document.querySelector(".card-scroll");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    const popUp = document.querySelector(".pop-up");
    const popUpImg = popUp.querySelector("img");
    const popUpDesc = popUp.querySelector(".pop-up-proj-description");
    const popUpTags = popUp.querySelector(".pop-up-tags");

    function showCard(index, direction = "right") {
        const oldCard = document.querySelector(".card-visible");

        const newCard = document.createElement("img");
        newCard.src = cards[index].img;
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

        popUpDesc.textContent = cards[index].description;
        popUpTags.textContent = cards[index].tags.join(" · ");
        popUp.style.opacity = "0";

        // 🐭 Show popup on hover
        newCard.addEventListener("mouseenter", () => {
            popUp.style.opacity = "1";
        });

        // 🐭 Hide popup when hover ends
        newCard.addEventListener("mouseleave", () => {
        popUp.style.opacity = "0";
        });
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
