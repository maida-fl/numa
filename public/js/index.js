const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.burger-nav');
    const navLinks = document.querySelectorAll('.burger-nav li');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('burger-nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.6s ease forwards ${index / 12 + 0.1}s`;
            }
        });
        //Animate Burger 
        burger.classList.toggle('toggle');
    });
}

navSlide();

const searchSlide = () => {
    const searchButton = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-wrapper');
    
    searchButton.addEventListener('click', () => {
        //Toggle SearchBar
        searchBar.classList.toggle('search-bar-active');
    });
}

searchSlide();