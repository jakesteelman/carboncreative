// Import everything else first
const container = document.querySelector('.hero-container')
const itemsWrapper = document.querySelector('.hero-words')

// Preload images
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(document.querySelectorAll('.webgl-shift-image'), resolve);
  });
};

// And then..
preloadImages().then(() => {
  // Remove the loader
  document.body.classList.remove('loading');
  const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
});