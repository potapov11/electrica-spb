function initSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000, // Время (в миллисекундах) между переключениями слайдов
      disableOnInteraction: false, // Продолжать автоматическое проигрывание после взаимодействия пользователя
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // effect: "cube",
    slidesPerView: "auto",

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  console.log(swiper);
}

export { initSwiper };
