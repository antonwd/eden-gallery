window.onload = () => {
    if(window.innerWidth < 1200) {
        const itemsContainer = document.querySelector(".carousel-items");
        const carouselNav = document.querySelector(".carousel .carousel-nav");
        const carouselNavIndicators = Array.from(carouselNav.children);

        const updateIndicator = (targetIndicator) => {
            const currentIndicator = carouselNav.querySelector(".active-slide");
            currentIndicator.classList.remove("active-slide");
            targetIndicator.classList.add("active-slide");
        }

        function nextSlide() {
            let slidesLeft = ((itemsContainer.scrollWidth - itemsContainer.scrollLeft)/itemsContainer.clientWidth);
            let totalSlides = (itemsContainer.scrollWidth / itemsContainer.clientWidth);
            let previousSlide = totalSlides - slidesLeft;
            let currentSlide = (previousSlide + 1) <= totalSlides -1 ? previousSlide + 1 : 0;

            if(itemsContainer.scrollLeft >= itemsContainer.scrollWidth - itemsContainer.clientWidth) {
                itemsContainer.scrollLeft = 0;
            } else {
                itemsContainer.scrollLeft += itemsContainer.clientWidth;
            }

            updateIndicator(carouselNavIndicators[currentSlide]);
        }

        let autoScrollCarousel = setInterval(nextSlide, 3500);

        carouselNav.addEventListener('click', e => {
            const targetIndicator = e.target.closest("button");
            if(!targetIndicator) return;

            const targetIndex = carouselNavIndicators.findIndex(indicator => indicator === targetIndicator);
            itemsContainer.scrollLeft = itemsContainer.clientWidth * targetIndex;
            clearInterval(autoScrollCarousel);
            autoScrollCarousel = setInterval(nextSlide, 3500);

            updateIndicator(targetIndicator);
        });
    }
}

