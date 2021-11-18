let carouselItems = Array.from(document.querySelectorAll(".carousel__item"));
let currentActive = 0;
let timeOutAnimation = 2000;

// direction argument must be the "left" or "rigth"
function spinCarousel(activeIndex, nextIndex, direction) {
  const active = carouselItems[activeIndex];
  const next = carouselItems[nextIndex];

  if (direction !== "left" && direction !== "rigth") {
    throw new Error("specified direction is not valid");
  }

  next.classList.add("next", direction);
  active.classList.add(direction);
    setTimeout(()=> {
      next.classList.add("active");
      next.classList.remove(direction, "next");
  }, 0);
  setTimeout(()=> active.classList.remove("active", direction), timeOutAnimation);

  currentActive = activeIndex;
}

document.addEventListener('click', ()=> spinCarousel(currentActive, currentActive + 1, "rigth"));
