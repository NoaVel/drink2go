const initMenu = () => {
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) {
    return;
  }

  const toggleText = toggle.querySelector('.visually-hidden');

  const onToggleClick = () => {
    const isOpened = nav.classList.toggle('main-nav--opened');

    toggle.classList.toggle('header__toggle--opened', isOpened);
    toggle.setAttribute('aria-expanded', String(isOpened));
    toggleText.textContent = isOpened ? 'Закрыть меню' : 'Открыть меню';
  };

  toggle.addEventListener('click', onToggleClick);
};

export {initMenu};
