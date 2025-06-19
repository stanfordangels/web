document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, setting up mobile menu");
    
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");
    
    console.log("Menu icon found:", menuIcon);
    console.log("Nav found:", nav);
    
    if (menuIcon && nav) {
        menuIcon.addEventListener("click", function (e) {
            console.log("Menu icon clicked!");
            e.preventDefault();
            nav.classList.toggle("show-menu");
            console.log("Nav classes after toggle:", nav.className);
        });
        
        // Add visual feedback for debugging
        menuIcon.addEventListener("touchstart", function() {
            console.log("Touch start on menu icon");
        });
        
        console.log("Event listeners added successfully");
    } else {
        console.error("Menu icon or nav not found!", { menuIcon, nav });
    }
}); 