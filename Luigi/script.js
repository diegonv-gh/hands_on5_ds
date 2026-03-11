class Carousel {
    constructor() {
        this.currentIndex = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');

        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                this.currentIndex = parseInt(e.target.dataset.index);
                this.updateCarousel();
            });
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    }

    previousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    }

    updateCarousel() {
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        this.slides[this.currentIndex].classList.add('active');

        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        this.indicators[this.currentIndex].classList.add('active');
    }

    autoPlay() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

document.addEventListener('keydown', (e) => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        if (e.key === 'ArrowLeft') {
            document.querySelector('.carousel-btn.prev').click();
        } else if (e.key === 'ArrowRight') {
            document.querySelector('.carousel-btn.next').click();
        }
    }
});