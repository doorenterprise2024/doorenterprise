//  button Connection
 document.addEventListener('DOMContentLoaded', () => {
            const slider = document.querySelector('.slider');
            const sliderItems = document.querySelectorAll('.slider-item');
            const prevButton = document.querySelector('.prev');
            const nextButton = document.querySelector('.next');
            const stopScrollButton = document.querySelector('.stop-scroll');
            let currentIndex = 0;
            let isDragging = false;
            let startX;
            let scrollLeft;

            function updateSliderPosition() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                prevButton.disabled = currentIndex === 0;
                nextButton.disabled = currentIndex === sliderItems.length - 1;
            }

            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderPosition();
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < sliderItems.length - 1) {
                    currentIndex++;
                    updateSliderPosition();
                }
            });

            slider.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                slider.style.cursor = 'grabbing';
            });

            slider.addEventListener('mouseleave', () => {
                isDragging = false;
                slider.style.cursor = 'grab';
            });

            slider.addEventListener('mouseup', () => {
                isDragging = false;
                slider.style.cursor = 'grab';
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; // Scroll-fast
                slider.scrollLeft = scrollLeft - walk;
            });

            slider.addEventListener('transitionend', () => {
                if (currentIndex === sliderItems.length - 1 || currentIndex === 0) {
                    slider.style.transition = 'transform 1.0s ease';
                } else {
                    slider.style.transition = 'transform 1.0s ease';
                }
            });

            stopScrollButton.addEventListener('click', () => {
                prevButton.disabled = true;
                nextButton.disabled = true;
                slider.style.cursor = 'default';
                console.log('Infinite scroll stopped.');
            });

            // Initial state
            updateSliderPosition();
        });








// Right to Left Animation Backward animation 
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.consultbanner_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

//POPUP animation 
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.slider_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.exploremore_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});



// FadeUP
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.animation_rw');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.bannertext_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.lowertext_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.banner3container_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.servicecontainer_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.nav_animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});