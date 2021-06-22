window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((eachTab, i) => {
        if (target == eachTab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer
  const deadline = '2021-07-01';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    (days = timer.querySelector('#days')),
      (hours = timer.querySelector('#hours')),
      (minutes = timer.querySelector('#minutes')),
      (seconds = timer.querySelector('#seconds'));
    timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  //modal
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach((item) => {
    item.addEventListener('click', () => {
      openModal();
    });
  });

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute('data-close') == ''
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  //используем классы для карточек

  class MenuCard {
    constructor(
      src,
      alt,
      title,
      description,
      price,
      parentSelector,
      ...classes
    ) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 73;
      this.changeToRUB();
    }

    changeToRUB() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.description}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  // получение данных с сервера
  const getResource = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json();
  };

  // добавление карточек через библиотеку axios
  // третий способ?
  axios.get('http://localhost:3000/menu').then((data) => {
    //обращаемся к data.data! специфика библиотеки
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render();
    });
  });

  /*/первый способ отправки данных на сервер
  getResource('http://localhost:3000/menu').then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render();
    });
  });
*/
  /* второй способ отправки данных на сервер
  getResource("http://localhost:3000/menu").then((data) => createCard(data));
  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const element = document.createElement("div");
      element.classList.add("menu__item");
      element.innerHTML = `
    <img src=${img} alt=${altimg}>
    <h3 class="menu__item-subtitle">${title}</h3>
    <div class="menu__item-descr">${descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">Цена:</div>
    <div class="menu__item-total"><span>${price}</span> руб/день</div>
    </div>
  `;

      document.querySelector(".menu .container").append(element);
    });
  }
*/
  // Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: '/JS_54/img/form/spinner.svg',
    success: 'We will contact you soon',
    failure: 'Ooops',
  };
  forms.forEach((item) => {
    bindPostData(item);
  });

  // асинхронный код! Ждем выполнения с помощью async await
  const postData = async (url, data) => {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });
    return await result.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;

      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //
      postData('http://localhost:3000/requests', json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const previousModalDialog = document.querySelector('.modal__dialog');

    previousModalDialog.classList.add('hide');

    openModal();

    const thanksModal = document.createElement('div');

    thanksModal.classList.add('modal__dialog');

    thanksModal.innerHTML = `
    <div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${message}
    </div>
    </div>
     `;

    document.querySelector('.modal').append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();

      previousModalDialog.classList.add('show');
      previousModalDialog.classList.remove('hide');

      closeModal();
    }, 4000);
  }

  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));

  // Slider

  // 1 способ создания слайдера
  /*
  const slides = document.querySelectorAll('.offer__slide'),
    previousArrow = document.querySelector('.offer__slider-prev'),
    nextArrow = document.querySelector('.offer__slider-next'),
    totalSlideNumber = document.querySelector('#total'),
    currentSlideNumber = document.querySelector('#current');

  let slideIndex = 1;
  showSlides(slideIndex);

  if (slides.length < 10) {
    totalSlideNumber.textContent = `0${slides.length}`;
  } else {
    totalSlideNumber.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = 'none'));

    slides[slideIndex - 1].style.display = 'block';

    if (slides.length < 10) {
      currentSlideNumber.textContent = `0${slideIndex}`;
    } else {
      currentSlideNumber.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  previousArrow.addEventListener('click', () => {
    plusSlides(-1);
  });

  nextArrow.addEventListener('click', () => {
    plusSlides(1);
  });
  */

  // 2 способ создания слайдера (карусель)
  const slides = document.querySelectorAll('.offer__slide'),
    //добавляем новую переменную
    slider = document.querySelector('.offer__slider'),
    previousArrow = document.querySelector('.offer__slider-prev'),
    nextArrow = document.querySelector('.offer__slider-next'),
    totalSlideNumber = document.querySelector('#total'),
    currentSlideNumber = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    widthSliderWrapper = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;

  let offset = 0;

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

  // для слайдера применяем позиционирование
  // это позволяет абсолютно спозиционированным элементам внутри слайдера
  // нормально отображаться
  slider.style.position = 'relative';

  // создаем большую обертку для всех точек, которыми листаем слайды
  // сами точки, ни что иное как list --> ol
  const dotsIndicators = document.createElement('ol'),
    //создаем массив точек, чтобы работало переключение их активности
    dotsArr = [];

  // и создаем для этих точек класс
  dotsIndicators.classList.add('carousel-indicators');
  // стилизуем наши точки, скопировав данные из второго файла styles.css
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
  // помещаем обертку внутрь слайдера
  slider.append(dotsIndicators);
  // создаем точки на основании количества слайдов (4)
  for (let i = 0; i < slides.length; i++) {
    // создаем сами точки
    // не понятно почему создаем именно li ---------------------------------------------
    const dot = document.createElement('li');
    // задаем соответствие 1 точка == 1 слайд, 3 точка == 3 слайд и т.n/g/
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
    // добавляем отображение активной точки
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dotsIndicators.append(dot);
    // плюс пушим точки в массив точек, чтобы работало переключение активной точки
    dotsArr.push(dot);
  }

  nextArrow.addEventListener('click', () => {
    if (
      offset ==
      +widthSliderWrapper.slice(0, widthSliderWrapper.length - 2) *
        (slides.length - 1)
    ) {
      offset = 0;
    } else {
      offset += +widthSliderWrapper.slice(0, widthSliderWrapper.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    /////////
    // ф-я //
    // function getProperNumber() {
    /////////

    if (slides.length < 10) {
      currentSlideNumber.textContent = `0${slideIndex}`;
    } else {
      currentSlideNumber.textContent = slideIndex;
    }

    /////////
    // ??? //
    // настраиваем переключение активности точек
    // изначально для каждой точки устанавливаем полупрозрачный стиль (неактивность)
    dotsArr.forEach((dot) => (dot.style.opacity = '0.5'));
    //задаем первому слайду активность (по умолчанию и слайд и активность)
    dotsArr[slideIndex - 1].style.opacity = 1;
  });

  previousArrow.addEventListener('click', () => {
    if (offset == 0) {
      offset =
        +widthSliderWrapper.slice(0, widthSliderWrapper.length - 2) *
        (slides.length - 1);
    } else {
      offset -= +widthSliderWrapper.slice(0, widthSliderWrapper.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    /////////
    // ф-я //
    // getProperNumber(slideIndex);
    /////////

    if (slides.length < 10) {
      currentSlideNumber.textContent = `0${slideIndex}`;
    } else {
      currentSlideNumber.textContent = slideIndex;
    }

    // дублируем смену активных точек
    /////////
    // ??? //
    dotsArr.forEach((dot) => (dot.style.opacity = '0.5'));
    dotsArr[slideIndex - 1].style.opacity = 1;
  });

  // настраиваем действия точек
  dotsArr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset =
        +widthSliderWrapper.slice(0, widthSliderWrapper.length - 2) *
        (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;
      /////////
      // ф-я //
      // getProperNumber(slideIndex);
      /////////
      if (slides.length < 10) {
        currentSlideNumber.textContent = `0${slideIndex}`;
      } else {
        currentSlideNumber.textContent = slideIndex;
      }

      /////////
      // ??? //
      dotsArr.forEach((dot) => (dot.style.opacity = '0.5'));
      dotsArr[slideIndex - 1].style.opacity = 1;
    });
  });
});
