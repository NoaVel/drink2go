export function initPriceRange() {
  const slider = document.querySelector('.filter__slider');

  if (!slider) {
    return;
  }

  const form = slider.closest('form');
  const [minInput, maxInput] = form.querySelectorAll('.filter__input');

  noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 1000,
    },
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value),
    },
    handleAttributes: [
      {'aria-label': 'Минимальная цена'},
      {'aria-label': 'Максимальная цена'},
    ],
  });

  slider.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      minInput.value = values[0] === 0 ? '' : values[0];
    } else {
      maxInput.value = values[1];
    }
  });

  minInput.addEventListener('change', () => {
    slider.noUiSlider.set([minInput.value || 0, null]);
  });

  maxInput.addEventListener('change', () => {
    slider.noUiSlider.set([null, maxInput.value]);
  });

  form.addEventListener('reset', () => {
    slider.noUiSlider.reset();
  });
}
