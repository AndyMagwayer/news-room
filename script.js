const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(-100%)';
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function changeSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    changeSlide(i);
  });
});

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 5000);