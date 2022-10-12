"use strict";

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
//-----------------------------СТРЕЛКА------------------------------


if (isMobile.any()) {
  document.body.classList.add("_touch");  
  const menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];      
      menuArrow.addEventListener("click", function (event) {
        menuArrow.classList.toggle("_active");
        menuArrow.parentElement.classList.toggle("_active");
        event.stopPropagation();
      });
      
    }
  }
} else {
  document.body.classList.add("_pc");
}

//------------------АКТИВАЦИЯ БУРГЕРА--------------------

const menuBody = document.querySelector(".menu__menu");
const BurgerMenu = document.querySelector(".menu__burger");
if (BurgerMenu) {
  BurgerMenu.addEventListener("click", function (event) {
    BurgerMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    event.stopPropagation();
  });
}

//-----------------СКРОЛЛ 1 уровеь---------------------
const sectionsForScroll = document.querySelectorAll(".section");
const linksOfSections = document.querySelectorAll(".menu__link");
for (let i = 0; i < linksOfSections.length; i++) {
  const sectionForScroll = sectionsForScroll[i];
  const linkOfSections = linksOfSections[i];
  const subMenuListToggle = document.querySelector('.sub-menu__list');
  linkOfSections.addEventListener("click", function () {
    const valeuOffset =
      sectionForScroll.getBoundingClientRect().top -
      document.querySelector(".header").offsetHeight +
      pageYOffset;
    BurgerMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    subMenuListToggle.classList.remove("_active");
    linkOfSections.classList.remove('_active');
    window.scrollTo({
      top: valeuOffset,
      behavior: "smooth",
    });
  });
}
//-----------------СКРОЛЛ 2 уровеь---------------------

const subSectionsForScroll = document.querySelectorAll(".sub-section");
const subLinksOfSections = document.querySelectorAll(".sub-sub-link");
const subMenuLinkExit = document.querySelector('.menu__link');
for (let i = 0; i < subLinksOfSections.length; i++) {
  const subSectionForScroll = subSectionsForScroll[i];
  const subLinkOfSection = subLinksOfSections[i];
  subLinkOfSection.addEventListener("click", function (event) {
    const valeuOffset1 =
      subSectionForScroll.getBoundingClientRect().top -
      document.querySelector(".header").offsetHeight +
      pageYOffset;

    BurgerMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    subMenuLinkExit.classList.remove("_active");
    
    window.scrollTo({
      top: valeuOffset1,
      behavior: "smooth",
    });
    event.stopPropagation();
  });
}

//-------СЛАЙДЕР---------
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptivHeight: true,
    slidesToShow: 1,
    //slidesToScroll: 2,
    speed: 1000,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1550,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    draggable: false, //-------Прокрутка на ПК
    swipe: true, //-------Прокрутка на телефоне
    touchThreshold: 1,
    touchMove: true, //----отменяет свайпб но не прокрутку
    waitForAnimate: false, //------отменяет паузу анимации
    variableWidth: false,
    centerMode: true, //-----выделяет центральный слайд(добавляет класс slick-center)
    //rows:2,
    //slidesPerRow:2
  });
});

