let activeIndex = 0;
const slider = document.querySelector('.slider');
const dots = slider.querySelectorAll('.slider__dot');
const slides = slider.querySelectorAll('.slider__item');
const leftArrow = slider.querySelector('.slider__arrow.slider__arrow_prev');
const rightArrow = slider.querySelector('.slider__arrow.slider__arrow_next');

const render = () => {
  for (let i = 0; i < slides.length; i++) {
    if (activeIndex === i) {
      dots[i].classList.add('slider__dot_active')
      slides[i].classList.add('slider__item_active')
    } else {
      dots[i].classList.remove('slider__dot_active')
      slides[i].classList.remove('slider__item_active')
    }
  }
}

const right  = () => {
  activeIndex++;
  if (activeIndex >= slides.length) {
    activeIndex = 0;
  }
  render();
}

const left  = () => {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = slides.length - 1;
  }
  render();
}

const setIndex = (index, e) => {
  console.log(index, e)
  activeIndex = index;
  render();
}

render();

leftArrow.addEventListener('click', left);
rightArrow.addEventListener('click', right);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', setIndex.bind(null, i));
}
