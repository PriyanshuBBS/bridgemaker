function expandCard(card) {
    // Add the "expanded" class to the clicked card
    card.classList.add('expanded');
    document.getElementById('overlay').style.display = 'block';
}

function closeExpanded() {
    // Remove the "expanded" class from all cards
    const expandedCards = document.querySelectorAll('.expanded');
    expandedCards.forEach(card => {
        card.classList.remove('expanded');
    });
    document.getElementById('overlay').style.display = 'none';
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active");
})