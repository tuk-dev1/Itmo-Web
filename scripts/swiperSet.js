const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    spaceBetween: 30,
});