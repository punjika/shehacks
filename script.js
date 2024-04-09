const cards = document.querySelectorAll(".snip1390");

    cards.forEach(card => {
      card.addEventListener("mouseover", () => {
        card.style.cursor = "pointer"; // Change cursor to pointer on hover
      });
      
      card.addEventListener("mouseout", () => {
        card.style.cursor = "default"; // Reset cursor to default on mouseout
      });
    });