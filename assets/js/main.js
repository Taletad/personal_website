//menu scroll bars
const menu = document.querySelector("#menu");
const progressionBar = document.querySelector("#progression-bar");
const introSection = document.querySelector("#intro");
const blurredSection = document.querySelector(".blur");

window.addEventListener('scroll', () => {
    const windowScrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    let scrollProgression = (windowScrollTop - window.innerHeight)/ (documentHeight - window.innerHeight - window.innerHeight);

    scrollProgression = Math.trunc(scrollProgression * 100);

    if(scrollProgression >= 0) {
        progressionBar.style.width = scrollProgression + "vw";
        menu.style.opacity = 1;
    } else {
        progressionBar.style.width = 0;
        menu.style.opacity = windowScrollTop / window.innerHeight;
        blurredSection.style.opacity = (windowScrollTop / window.innerHeight) * 2.5;
    }
});

//scroll animations
const scrollAnimations = document.querySelectorAll(".scroll-animation");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const introObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting == false) {
                entry.target.classList.add("hide");
            }
        });
    }, {
        threshold: 0.6,
    }
)

const scrollObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    }, {
        threshold: 0.5,
    }
);

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            navLinks.forEach( navLink => {
                if(navLink.attributes[0].value === "#" + entry.target.id){
                    navLink.classList.toggle("nav-current", entry.isIntersecting);
                }
            });
        });
    }, {
        threshold: 0.7,
    }
);

introObserver.observe(introSection);

scrollAnimations.forEach(scrollAnimation => {
    scrollObserver.observe(scrollAnimation);
});

sections.forEach(section => {
    sectionObserver.observe(section);
});



//project carousel
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