function startCarousel() {
    console.log("Carousel script is running!");

    document.querySelectorAll(".carousel").forEach((carousel) => {
        let index = 0;
        const slides = carousel.querySelectorAll(".slide");
        const totalSlides = slides.length;

        // Ensure slides are inline and correctly positioned
        carousel.style.display = "flex";
        carousel.style.overflow = "hidden";
        carousel.style.width = `${totalSlides * 100}%`;

        slides.forEach((slide) => {
            slide.style.flex = "0 0 100%"; // Each slide takes full width
        });

        function showNextSlide() {
            index = (index + 1) % totalSlides;
            const offset = index * 100;
            carousel.style.transition = "transform 0.5s ease-in-out";
            carousel.style.transform = `translateX(-${offset}%)`;
            console.log("Slide moved to index:", index);
        }

        setInterval(showNextSlide, 3000);
    });
}

// Wait until the page is fully loaded before running the script
window.addEventListener("load", function () {
    setTimeout(startCarousel, 1000);
});

