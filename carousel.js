function startCarousel() {
    console.log("Carousel script is running!");

    document.querySelectorAll(".carousel").forEach((carousel) => {
        let index = 0;
        const slides = carousel.querySelectorAll(".slide");
        const totalSlides = slides.length;

        carousel.style.display = "flex";
        carousel.style.width = `${totalSlides * 100}%`;

        slides.forEach((slide) => {
            slide.style.flex = "0 0 100%";
        });

        function showNextSlide() {
            index = (index + 1) % totalSlides;
            const offset = index * 100;
            carousel.style.transition = "transform 0.5s ease-in-out";
            carousel.style.transform = `translateX(-${offset}%)`;
        }

        setInterval(showNextSlide, 3000);
    });
}

window.addEventListener("load", function () {
    setTimeout(startCarousel, 1000);
});
