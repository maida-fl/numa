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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.2}s`;
            }
        });
    });
}

navSlide();