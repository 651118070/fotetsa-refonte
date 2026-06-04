const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn2");
const btn1 = document.querySelector(".btn3");
const btn2 = document.querySelector(".btn4");
const btn3 =document.querySelector(".btn5")
const btn4 = document.querySelector(".btn6");
const navbar = document.querySelector(".navbar");
const dropdown = document.querySelector(".dropdown");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const dropdown4 = document.querySelector(".dropdown4");
const arrow=document.querySelector(".arrow")
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("scale-y-100");
  navbar.classList.toggle("scale-y-0");
});
btn.addEventListener("click", () => {
  const icon = btn.querySelector(".icon-plus");

  dropdown.classList.toggle("hidden");

  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
});
btn1.addEventListener("click", () => {
  const icon = btn1.querySelector(".icon-plus");

  dropdown1.classList.toggle("hidden");

  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
});
btn2.addEventListener("click", () => {
  const icon = btn2.querySelector(".icon-plus");

  dropdown2.classList.toggle("hidden");

  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
});
btn3.addEventListener("click", () => {
  const icon = btn3.querySelector(".icon-plus");

  dropdown3.classList.toggle("hidden");

  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
});
btn4.addEventListener("click", () => {
  const icon = btn4.querySelector(".icon-plus");

  dropdown4.classList.toggle("hidden");

  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
window.addEventListener("scroll", () => {
  const threshold = 100;

  if (window.scrollY > threshold) {
    arrow.classList.add("translate-x-0");
    arrow.classList.remove("translate-x-full");
  } else {
    arrow.classList.add("translate-x-full");
    arrow.classList.remove("translate-x-0");
  }
});
arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});