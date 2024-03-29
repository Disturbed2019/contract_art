// import Swiper from '../../node_modules/swiper/swiper-bundle';
import Swiper from './swiper-bundle';

const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    loop:true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
