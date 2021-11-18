let carouselItems = Array.from(document.querySelectorAll(".carousel__item"));
let currentActive = 0;
let timeOutAnimation = 2000;

// direction argument must be the "left" or "right"
function spinCarousel(activeIndex, nextIndex, direction) {
  const active = carouselItems[activeIndex];
  const next = carouselItems[nextIndex];

  if (direction !== "left" && direction !== "right") {
    throw new Error("specified direction is not valid");
  }

  next.classList.add("next", direction);
  active.classList.add(direction);
    setTimeout(()=> {
      next.classList.add("active");
      next.classList.remove(direction, "next");
  }, 10);
  setTimeout(()=> active.classList.remove("active", direction), timeOutAnimation);

  currentActive = nextIndex;
}

document.addEventListener('click', ()=> spinCarousel(currentActive, currentActive + 1, "right"));
