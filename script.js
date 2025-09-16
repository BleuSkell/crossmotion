document.addEventListener("DOMContentLoaded", () => {
    // Select the image track container from the DOM
    const track = document.getElementById("image-track");

    // Handle mouse/touch down: store the starting X coordinate for drag tracking
    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    // Handle mouse/touch up: reset drag state and store current percentage after dragging ends
    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0"; // Not dragging anymore
        track.dataset.prevPercentage = track.dataset.percentage; // Save as new starting point for future drags
    }

    // Calculate the maximum amount the track is allowed to scroll left (in % of its width)
    // Ensures the last image lines up with the right edge of the viewport
    function getMaxNegativePercentage() {
        const track = document.getElementById("image-track");
        const trackRect = track.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const trackWidth = trackRect.width;

        // If track not wider than viewport, don't allow negative scrolling
        if (trackWidth <= viewportWidth) return 0;

        // Convert how much extra width is scrollable into a negative percent value (relative to track width)
        return -100 * (trackWidth - viewportWidth) / trackWidth;
    }

    // Handle mouse/touch move: scroll the track and animate images based on drag distance
    const handleOnMove = e => {
        // Only proceed if dragging (otherwise do nothing)
        if(track.dataset.mouseDownAt === "0") return;

        // Get updated max negative percent for responsive layouts
        const maxNegativePercentage = getMaxNegativePercentage();

        // Calculate how far the mouse has moved since starting the drag
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        // Use half the window width as sensitivity baseline for percentage
        const maxDelta = window.innerWidth / 2;

        // Convert drag distance to a percentage movement (negative means rightward)
        const percentage = (mouseDelta / maxDelta) * -100;
        // Calculate what the next scroll percentage would be (unconstrained)
        const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
        // Constrain result so you can't scroll past first/last image
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), maxNegativePercentage);

        // Update drag data to the new value
        track.dataset.percentage = nextPercentage;

        // Animate the track's position horizontally
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, {duration: 1200, fill: "forwards"});

        // Animate each image's object position for parallax effect
        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${80 + nextPercentage}% center`
            }, {duration: 1200, fill: "forwards"});
        }
    }

    // Attach mouse and touch event listeners for drag interaction (works on desktop and mobile)
    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches);
    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches);
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches);

    const circles = document.querySelectorAll(".service-card");

    circles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            circles.forEach(circle => {
                circle.classList.remove("active");
                circle.querySelector(".service-card-title").classList.remove("hidden");
                circle.querySelector(".service-content").classList.add("hidden");
            });

            circle.classList.add("active");
            circle.querySelector(".service-card-title").classList.add("hidden");
            circle.querySelector(".service-content").classList.remove("hidden");
        });
    });
});