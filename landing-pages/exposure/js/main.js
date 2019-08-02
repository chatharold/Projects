// Target
let hamIcon = document.querySelector(".ham-menu");
let displayNav = document.querySelector(".active");

// Event
hamIcon.addEventListener("click", () => {
    displayNav.classList.toggle("active");
})