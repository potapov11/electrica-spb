const sr = ScrollReveal();

// Анимация для header
// sr.reveal("header", {
//   duration: 1000, // Длительность анимации в миллисекундах
//   distance: "30px", // Расстояние, на которое элемент должен сдвинуться
//   origin: "left", // Направление анимации (top, bottom, left, right)
//   delay: 200, // Задержка перед началом анимации (в миллисекундах)
//   reset: true, // Повторение анимации при повторном появлении элемента
// });

const list = document.querySelector(".qeustions__list");
const formBox = document.querySelector(".login-box");

sr.reveal(list, {
  duration: 1000, // Длительность анимации в миллисекундах
  distance: "70px", // Расстояние, на которое элемент должен сдвинуться
  origin: "left", // Направление анимации (top, bottom, left, right)
  delay: 200, // Задержка перед началом анимации (в миллисекундах)
  // opacity: null,
  reset: true, // Повторение анимации при повторном появлении элемента
  viewport: {
    // Опция для анимации при появлении в viewport
    global: true, // Применять ко всем элементам на странице
    amount: 0.25, // Доля видимости элемента в viewport, при которой происходит анимация (0-1)
  },
});

sr.reveal(formBox, {
  duration: 1000, // Длительность анимации в миллисекундах
  distance: "70px", // Расстояние, на которое элемент должен сдвинуться
  origin: "right", // Направление анимации (top, bottom, left, right)
  delay: 200, // Задержка перед началом анимации (в миллисекундах)
  // opacity: null,
  reset: true, // Повторение анимации при повторном появлении элемента
  viewport: {
    // Опция для анимации при появлении в viewport
    global: true, // Применять ко всем элементам на странице
    amount: 0.25, // Доля видимости элемента в viewport, при которой происходит анимация (0-1)
  },
});
