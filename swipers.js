document.addEventListener("DOMContentLoaded", () => {
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