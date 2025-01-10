/* в этот файл добавляет скрипты*/
const menuElement = document.querySelector('.page-header__menu');
const menuToggler = document.querySelector('.page-header__mobile-menu-toggler');
const interactiveMap = document.querySelector('.page-footer__interactive-map');

const onTogglerClick = () => {
  if (menuToggler.classList.contains('page-header__mobile-menu-toggler--closed')) {
    menuToggler.classList.remove('page-header__mobile-menu-toggler--closed');
    menuToggler.classList.add('page-header__mobile-menu-toggler--opened');
    menuElement.classList.remove('page-header__menu--closed');
    return;
  }
  menuToggler.classList.remove('page-header__mobile-menu-toggler--opened');
  menuToggler.classList.add('page-header__mobile-menu-toggler--closed');
  menuElement.classList.add('page-header__menu--closed');
};

menuElement.classList.remove('page-header__menu--nojs');
menuToggler.classList.remove('page-header__mobile-menu-toggler--nojs');
interactiveMap.classList.remove('page-footer__interactive-map--nojs');
menuToggler.addEventListener('click', onTogglerClick);
