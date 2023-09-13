const carousel = document.querySelector('#carousel-overlay');
const carouselScroller = carousel.querySelector('.carousel-scroller');
const carouselItemSize = carouselScroller.querySelector('.carousel-item').clientWidth;

carousel.querySelector('.carousel-button.next').addEventListener('click', scrollNext);
carousel.querySelector('.carousel-button.previous').addEventListener('click', scrollPrevious);

function scrollNext() {
    carouselScroller.scrollBy(carouselItemSize, 0);
}

function scrollPrevious() {
    carouselScroller.scrollBy(-carouselItemSize, 0);
}