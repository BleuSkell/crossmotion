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
            }, 50);
        });
        if (window.innerWidth <= 768) {
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
            }, 50);
            if (window.innerWidth <= 768) {
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
});