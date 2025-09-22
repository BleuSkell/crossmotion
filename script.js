document.addEventListener("DOMContentLoaded", () => {
    const serviceCircle = document.querySelector(".services-circle");
    const circles = document.querySelectorAll(".service-card");
    function updateCircleWrapperMargin() {
        serviceCircle.classList.remove('top-margin', 'bottom-margin');

        const active = Array.from(circles).findIndex(c => c.classList.contains('active'));
        if (active === 2 || active === 3) {
            serviceCircle.classList.add('top-margin');
        } else if (active === 0 || active === 1) {
            serviceCircle.classList.add('bottom-margin');
        }
    }
    function closeAllServiceCards() {
        circles.forEach(circle => {
            circle.classList.remove("active");
            setTimeout(() => {
                circle.querySelector(".service-card-title").classList.remove("hidden-fade");
                circle.querySelector(".service-card-title").classList.add("visible-fade");
                circle.querySelector(".service-content").classList.remove("visible-fade");
                circle.querySelector(".service-content").classList.add("hidden-fade");
            }, 200);
        });
        if (window.innerWidth <= 640) {
            serviceCircle.classList.remove('top-margin', 'bottom-margin');
        }
    }
    circles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            e.stopPropagation();

            closeAllServiceCards();

            circle.classList.add("active");
            setTimeout(() => {
                circle.querySelector(".service-card-title").classList.remove("visible-fade");
                circle.querySelector(".service-card-title").classList.add("hidden-fade");
                circle.querySelector(".service-content").classList.remove("hidden-fade");
                circle.querySelector(".service-content").classList.add("visible-fade");
            }, 200);
            if (window.innerWidth <= 640) {
                updateCircleWrapperMargin();
            }
        });
    });
    document.addEventListener('click', e => {
        if (!e.target.closest(".service-card")) {
            closeAllServiceCards();
        }
    });
    closeAllServiceCards();

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        lazy: true,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }
    });

    const swiperCompanies = new Swiper('.swiper-companies', {
        lazy: true,
        loop: true,
        centeredSlides: true,
        speed: 2000,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 100,
            }
        }
    });

    const projectsSwiper = new Swiper('.projects-swiper', {
        lazy: true,
        slidesPerView: 3,
        spaceBetween: 200,
        enabled: true,
        sticky: false,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 200,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 100,
            }
        }
    });

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});