var galleryWrapper = document.querySelector('.gallery-wrapper');
var galleryImages = document.querySelectorAll('.gallery-image');
var galleryPrev = document.querySelector('.gallery-prev');
var galleryNext = document.querySelector('.gallery-next');
var imageIndex = 0;
var translateValue = 0;

galleryPrev.addEventListener('click', function() {
  if (imageIndex === 0) {
    imageIndex = galleryImages.length - 1;
  } else {
    imageIndex--;
  }
  translateValue = imageIndex * -100;
  galleryWrapper.style.transform = 'translateX(' + translateValue + '%)';
});

galleryNext.addEventListener('click', function() {
  if (imageIndex === galleryImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  translateValue = imageIndex * -100;
  galleryWrapper.style.transform = 'translateX(' + translateValue + '%)';
});
