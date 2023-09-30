// script.js
// Example: Toggle a dark mode

const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

// Example: Lazy load images

document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    lazyImages.forEach((lazyImage) => {
        lazyImage.addEventListener('load', () => {
            lazyImage.classList.remove('lazy');
        });
        
        lazyImage.src = lazyImage.dataset.src;
    });
});
