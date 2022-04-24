const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.burger-nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('burger-nav-active');
    })
}

navSlide();