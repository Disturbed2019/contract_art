import Swiper from './swiper-bundle';

const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
