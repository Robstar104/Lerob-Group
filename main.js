const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
if (menu && links) {
  menu.hidden = false;
  const closeMenu = (restoreFocus = false) => {
    menu.setAttribute('aria-expanded', 'false');
    const span = menu.querySelector('span');
    if (span) span.textContent = '+';
    links.classList.remove('nav-links-open');
    if (restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const isOpen = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(isOpen));
    const span = menu.querySelector('span');
    if (span) span.textContent = isOpen ? '−' : '+';
    links.classList.toggle('nav-links-open', isOpen);
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.navigation')) closeMenu();
  });
  matchMedia('(min-width: 480px)').addEventListener('change', () => closeMenu());
}
