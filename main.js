const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-item");


// Navbar style change on scroll

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});



// Active menu item on click

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});