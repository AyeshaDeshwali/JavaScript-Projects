const slide = document.querySelectorAll(".slider");
let counter = 0;

slide.forEach((slide, index) => {
  slide.style.bottom = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }
  slideImg();
};

const goNext = () => {
  counter++;
  if (counter === slide.length) {
    counter = 0;
  }
  slideImg();
};

const slideImg = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateY(${counter * 100}%)`;
  });
};
