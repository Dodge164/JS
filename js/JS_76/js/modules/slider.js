function slider({
  container,
  slide,
  nxtArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  // Slider

  // 2 способ создания слайдера (карусель)
  const slides = document.querySelectorAll(slide),
    //добавляем новую переменную
    slider = document.querySelector(container),
    previousArrow = document.querySelector(prevArrow),
    nextArrow = document.querySelector(nxtArrow),
    totalSlideNumber = document.querySelector(totalCounter),
    currentSlideNumber = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    widthSliderWrapper = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;

  let offset = 0;
  //////////////////////
  function getProperIndex(slides, slideIndex) {
    if (slides.length < 10) {
      currentSlideNumber.textContent = `0${slideIndex}`;
    } else {
      currentSlideNumber.textContent = slideIndex;
    }
  }

  function setActiveDot(index) {
    dotsArr.forEach((dot) => (dot.style.opacity = '0.5'));
    dotsArr[slideIndex - 1].style.opacity = 1;
  }
  ///////////////////////

  if (slides.length < 10) {
    totalSlideNumber.textContent = `0${slides.length}`;

    currentSlideNumber.textContent = `0${slideIndex}`;
  } else {
    totalSlideNumber.textContent = slides.length;
    currentSlideNumber.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach((slide) => {
    slide.style.width = widthSliderWrapper;
  });

  slider.style.position = 'relative';

  const dotsIndicators = document.createElement('ol'),
    dotsArr = [];

  dotsIndicators.classList.add('carousel-indicators');
  dotsIndicators.style.cssText = `
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
  `;

  slider.append(dotsIndicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');

    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }
    dotsIndicators.append(dot);
    dotsArr.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  nextArrow.addEventListener('click', () => {
    if (offset == deleteNotDigits(widthSliderWrapper) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(widthSliderWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    getProperIndex(slides, slideIndex);

    setActiveDot(slideIndex);
  });
  previousArrow.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(widthSliderWrapper) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(widthSliderWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    getProperIndex(slides, slideIndex);

    setActiveDot(slideIndex);
  });

  // настраиваем действия точек
  dotsArr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = deleteNotDigits(widthSliderWrapper) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      getProperIndex(slides, slideIndex);
      setActiveDot(slideIndex);
    });
  });
}
export default slider;
