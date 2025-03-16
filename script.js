document.addEventListener("DOMContentLoaded", () =>{
    const toggleButton = document.querySelector(".toggle-button");
    const navLinks = document.querySelector(".nav-links");
    const arrow = document.querySelector(".arrow");

    toggleButton.addEventListener("click", () =>{
        if (navLinks.style.display === "flex") {
            // If menu is already visible, hide it and reset arrow
            navLinks.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        } else {
            // If menu is hidden, show it and rotate arrow
            navLinks.style.display = "flex";
            arrow.style.transform = "rotate(180deg)";
        }
    })
    
    window.addEventListener("resize",()=>{
        if (window.innerWidth>600){
            navLinks.style.display = "flex";
            arrow.style.transform = "rotate(0deg)";
        }
    })
})

