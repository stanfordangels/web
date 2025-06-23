document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, setting up mobile menu");
    
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    
    console.log("Menu toggle found:", menuToggle);
    console.log("Nav found:", nav);
    
    if (menuToggle && nav) {
        
        function toggleMenu(e) {
            console.log("Menu toggle triggered!");
            e.preventDefault();
            e.stopPropagation();
        nav.classList.toggle("show-menu");
            console.log("Nav classes after toggle:", nav.className);
        }
        
        // Add multiple event listeners for better mobile support
        menuToggle.addEventListener("click", toggleMenu);
        menuToggle.addEventListener("touchstart", toggleMenu);
        menuToggle.addEventListener("touchend", function(e) {
            e.preventDefault();
        });
        
        console.log("Event listeners added successfully");
    } else {
        console.error("Menu toggle or nav not found!", { menuToggle, nav });
    }
}); 