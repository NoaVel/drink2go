const initSlider = () => {
  const slider = document.querySelector('.slider');

  if (!slider) {
    return;
  }

  const slides = slider.querySelectorAll('.slider__item');
  const prevButton = slider.querySelector('.slider__button--prev');
  const nextButton = slider.querySelector('.slider__button--next');
  const paginationButtons = slider.querySelectorAll('.slider__pagination-button');

  let currentIndex = [...slides].findIndex((slide) => slide.classList.contains('slider__item--current'));

  const showSlide = (index) => {
    slides[currentIndex].classList.remove('slider__item--current');
    paginationButtons[currentIndex].classList.remove('slider__pagination-button--current');
    paginationButtons[currentIndex].removeAttribute('aria-current');

    currentIndex = index;

    slides[currentIndex].classList.add('slider__item--current');
    paginationButtons[currentIndex].classList.add('slider__pagination-button--current');
    paginationButtons[currentIndex].setAttribute('aria-current', 'true');

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  };

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
    });
  });
};

export {initSlider};
