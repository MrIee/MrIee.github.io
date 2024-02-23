const setupMenuNav = () => {
  const menuBtnEl = document.getElementById('menuBtn');
  const menuEl = document.getElementById('menu');
  const menuLinkEls = document.querySelectorAll('#menu a');

  const onClickMenuBtn = () => {
    menuEl.classList.remove('tw-hidden');
    menuEl.classList.toggle('tw-translate-y-full');
  };

  const onClickMenuLink = () => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    if (mediaQuery.matches) {
      return;
    }

    menuEl.classList.add('tw-hidden');
    menuEl.classList.remove('tw-translate-y-full');
  };

  menuBtnEl.addEventListener('click', onClickMenuBtn);
  menuLinkEls.forEach((menuLinkEl) => {
    menuLinkEl.addEventListener('click', onClickMenuLink);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  setupMenuNav();
});