document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contactanos form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });
        if (isValid) {
            alert('Formulario enviado correctamente');
            form.submit();
        } else {
            alert('Por favor, completa todos los campos requeridos');
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

updateCarousel();

function initMap() {
    const location = { lat: 4.30667, lng: -74.80755 }; 
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
