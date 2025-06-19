document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, setting up mobile menu");
    
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");
    
    console.log("Menu icon found:", menuIcon);
    console.log("Nav found:", nav);
    
    if (menuIcon && nav) {
        
        function toggleMenu(e) {
            console.log("Menu toggle triggered!");
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle("show-menu");
            console.log("Nav classes after toggle:", nav.className);
        }
        
        // Add multiple event listeners for better mobile support
        menuIcon.addEventListener("click", toggleMenu);
        menuIcon.addEventListener("touchstart", toggleMenu);
        menuIcon.addEventListener("touchend", function(e) {
            e.preventDefault();
        });
        
        console.log("Event listeners added successfully");
    } else {
        console.error("Menu icon or nav not found!", { menuIcon, nav });
    }
}); 