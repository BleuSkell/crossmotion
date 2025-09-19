document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".service-card");
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
        });
    });
    document.addEventListener('click', e => {
        if (!e.target.closest(".service-card")) {
            closeAllServiceCards();
        }
    });
    closeAllServiceCards();

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 600,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperCompanies = new Swiper('.swiper-companies', {
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 100,
        speed: 2000,
        autoplay: { delay: 600, disableOnInteraction: false },
    });

    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 3,
        spaceBetween: 200,
        enabled: true,
        sticky: false,
    });


    const navbar = document.querySelector(".navbar");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add("bg-black");
        } else {
            navbar.classList.remove("bg-black");
        }
    });
});