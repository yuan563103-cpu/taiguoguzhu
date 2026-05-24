const slides = Array.from(document.querySelectorAll(".slide"));
const dotsWrap = document.querySelector(".dots");
let current = 0;
let timer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === current);
  });
  document.querySelectorAll(".dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === current);
  });
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 5200);
}

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `第 ${index + 1} 张`);
  dot.addEventListener("click", () => {
    showSlide(index);
    startTimer();
  });
  dotsWrap.appendChild(dot);
});

document.querySelectorAll(".slider-btn").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(current + Number(button.dataset.dir));
    startTimer();
  });
});

showSlide(0);
startTimer();
