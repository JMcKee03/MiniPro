const carousel = document.querySelector(".carousel");

let isDragging = false;
let startX;
let startScrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const delta = e.clientX - startX;
  carousel.scrollLeft = startScrollLeft - delta;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});