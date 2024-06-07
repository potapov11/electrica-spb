import { openCloseAccordion } from "./components/open-close-accordion.js";
import { initSwiper } from "./components/init-swiper.js";
import "./components/animation-page.js";

const btnPrice = document.querySelector(".header__price");
const modalForm = document.querySelector(".modal-form");
const btnClose = document.querySelector(".modal__close");

btnPrice.addEventListener("click", () => {
  console.log("modal__inactive");
  modalForm.classList.remove("modal__inactive");
  modalForm.style = "";
  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", () => {
  console.log("modal__inactive");
  modalForm.classList.add("modal__inactive");
  document.body.style.overflow = "";
});

const modal = document.querySelector(".modal");
const modalHeader = document.querySelector(".modal__header");
const modalSpan = modalHeader.querySelector("span");

let isDragging = false;
let currentY;
let initialY;
let currentTranslate = 0;
let initialTranslate = 0;
let currentOpacity = 1;
let currentHeight = 100;

modalHeader.addEventListener("touchstart", dragStart);
modalHeader.addEventListener("touchend", dragEnd);
modalHeader.addEventListener("touchmove", drag);

function dragStart(e) {
  initialY = e.touches[0].clientY - currentTranslate;
  isDragging = true;
}

function dragEnd(e) {
  initialTranslate = currentTranslate;

  if (Math.abs(currentY - initialY) > 100) {
    modal.classList.add("modal__inactive");
  } else {
    modal.style.height = "100%";
  }

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentY = e.touches[0].clientY;
    currentTranslate = currentY - initialY;

    modal.style.transform = `translate(0, ${currentTranslate}px)`;
    currentOpacity = 1 - Math.abs(currentTranslate) / 100;
    modal.style.opacity = currentOpacity;

    currentHeight = 100 - Math.abs(currentTranslate) / 2;
    modal.style.height = `${currentHeight}%`;
    document.body.style.overflow = "";
  }
}

// В dragStart запоминаем начальную координату Y касания.
// В drag обновляем позицию модального окна по вертикали и его высоту в процентах. Высота будет уменьшаться пропорционально перемещению вниз, достигая 50% при перемещении на 100 пикселей.
// В dragEnd проверяем, если перемещение по оси Y больше 100 пикселей, то добавляем класс modal__inactive, чтобы закрыть модальное окно. Иначе возвращаем высоту окна к 100%.
// Таким образом, при перетаскивании шапки модального окна вниз, высота окна будет плавно уменьшаться, а при отпускании, если перемещение было достаточно большим, окно закроется.

document.querySelector(".btn-send").addEventListener("click", async (e) => {
  e.preventDefault();
  let data = {
    name: document.getElementById("name").value,
    msg: document.getElementById("tel").value,
  };

  console.log(data);

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  console.log("click");

  let result = await response.text();

  alert(result);
});

//Вызовы функций
openCloseAccordion();
initSwiper();
