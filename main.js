let carouselItems = Array.from(document.querySelectorAll(".carousel__item"));
let carouselIndicators = Array.from(document.querySelector('.carousel__indicators').children);
let nextButton = document.querySelector('.carousel__button.right');
let prevButton = document.querySelector('.carousel__button.left');
let currentActive = 0;
let timeOutAnimation = 500;
let autoRotation;
let rotationTimer = 5000;

// direction argument must be the "left" or "right"
function spinCarousel(activeIndex, nextIndex, direction) {
  document.removeEventListener('click', clickHandler);
  clearTimeout(autoRotation);

  const active = carouselItems[activeIndex];
  const next = carouselItems[nextIndex];

  if (direction !== "left" && direction !== "right") {
    throw new Error("specified direction is not valid");
  }

  next.classList.add("next", direction);
  setTimeout(()=> {
    next.classList.add("active");
    active.classList.add(direction);
    next.classList.remove(direction, "next");
    carouselIndicators[activeIndex].classList.remove('active');
    carouselIndicators[nextIndex].classList.add('active');
  }, 10);
  setTimeout(()=> {
    active.classList.remove("active", direction)
    currentActive = nextIndex;
    autoRotation = setTimeout(()=> spinCarousel(currentActive, (currentActive + 1 >= carouselIndicators.length)? 0 : currentActive + 1 , "left"), rotationTimer);
    document.addEventListener('click', clickHandler);
  }, timeOutAnimation);
}


function clickHandler(e) {
  let nextIndex;
  switch(e.target) {
    case prevButton:
      spinCarousel(currentActive, (currentActive - 1 < 0)? carouselItems.length - 1 : currentActive - 1, "right");
      break;
    case nextButton:
      spinCarousel(currentActive, (currentActive + 1>= carouselItems.length)? 0 : currentActive + 1, "left");
      break;
    case carouselIndicators[nextIndex = carouselIndicators.indexOf(e.target)]:
      const direction = (nextIndex > currentActive) ? "left" : "right";
      if (nextIndex !== currentActive) {
        spinCarousel(currentActive, nextIndex, direction);
      }
      break;
    default:
  }
}

autoRotation = setTimeout(()=> spinCarousel(currentActive, (currentActive + 1 >= carouselIndicators.length)? 0 : currentActive + 1 , "left"), rotationTimer);
document.addEventListener('click', clickHandler);
