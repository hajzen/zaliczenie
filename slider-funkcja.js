let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlides();
}

// Leniwe ładowanie obrazów
function lazyLoad() {
    slides.forEach(slide => {
        const imageSrc = slide.getAttribute('data-src');
        if (imageSrc && slide.getBoundingClientRect().top <= window.innerHeight) {
            slide.style.backgroundImage = `url('${imageSrc}')`;
            slide.removeAttribute('data-src');
        }
    });
}

// Obsługa przesuwania palcem
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX) moveSlide(1);
    if (touchEndX > touchStartX) moveSlide(-1);
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);

    const slider = document.querySelector('.slider');
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchend', handleTouchEnd, false);
});
