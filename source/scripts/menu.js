const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.main-nav');
const toggleText = toggle.querySelector('.visually-hidden');

const onToggleClick = () => {
  const isOpened = nav.classList.toggle('main-nav--opened');

  toggle.classList.toggle('header__toggle--opened', isOpened);
  toggle.setAttribute('aria-expanded', String(isOpened));
  toggleText.textContent = isOpened ? 'Закрыть меню' : 'Открыть меню';
};

const onNavClick = (evt) => {
  const link = evt.target.closest('.main-nav__link');

  if (!link) {
    return;
  }

  const currentLink = nav.querySelector('.main-nav__link--current');

  if (currentLink) {
    currentLink.classList.remove('main-nav__link--current');
    currentLink.removeAttribute('aria-current');
  }

  link.classList.add('main-nav__link--current');
  link.setAttribute('aria-current', 'page');
};

const initMenu = () => {
  toggle.addEventListener('click', onToggleClick);
  nav.addEventListener('click', onNavClick);
};

export {initMenu};
