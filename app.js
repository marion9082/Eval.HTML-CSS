const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',  function(event) {
    event.preventDefault();

    if (window.scrollY > 20) {
        navbar.classList.add('nav-height');
    } else {
        navbar.classList.remove('nav-height');
    }
})

