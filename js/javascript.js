// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) {
        console.error('Carousel container not found');
        return;
    }

    const carouselImages = document.querySelectorAll('.carousel-images li');

    let currentImageIndex = 0;
    const totalImages = carouselImages.length;

    // Hide all images initially except the first one
    carouselImages.forEach((image, index) => {
        image.style.opacity = '0';
        image.style.display = 'block';
        image.style.transition = 'opacity 1s ease-in-out';
        if (index === 0) {
            image.style.opacity = '1';
        }
    });

    function showNextImage() {
        // Fade out current image
        carouselImages[currentImageIndex].style.opacity = '0';
        
        // Update index
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        // Fade in next image
        carouselImages[currentImageIndex].style.opacity = '1';
    }

    // Start the carousel
    const intervalId = setInterval(showNextImage, 5000);

    // Cleanup function
    return () => clearInterval(intervalId);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});
