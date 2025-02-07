function startCarousel() {
    console.log("Carousel script is running!");

    document.querySelectorAll(".carousel-container").forEach((container) => {
        const carousel = container.querySelector(".carousel");
        const slides = carousel.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let index = 0;

        // Ensure slides are inline and correctly positioned
        carousel.style.display = "flex";
        carousel.style.overflow = "hidden";
        carousel.style.width = `${totalSlides * 100}%`;

        slides.forEach((slide) => {
            slide.style.flex = "0 0 100%";
        });

        function showSlide(newIndex) {
            index = (newIndex + totalSlides) % totalSlides; // Prevent negative index
            const offset = index * 100;
            carousel.style.transition = "transform 0.5s ease-in-out";
            carousel.style.transform = `translateX(-${offset}%)`;
            console.log("Slide moved to index:", index);
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        // 🔹 Fix: Force carousel to start after 2 seconds even if images aren’t loaded
        setTimeout(() => {
            console.log("Forcing carousel to start!");
            setInterval(nextSlide, 3000);
        }, 2000);

        // 🔹 Fix: Make Previous/Next Buttons Work
        const prevButton = container.querySelector(".prev");
        const nextButton = container.querySelector(".next");

        if (prevButton) prevButton.addEventListener("click", prevSlide);
        if (nextButton) nextButton.addEventListener("click", nextSlide);
    });
}

// 🔹 Ensure JavaScript runs AFTER the full page loads
window.addEventListener("load", function () {
    setTimeout(startCarousel, 1000);
});

