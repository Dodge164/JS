window.addEventListener("DOMContentLoaded", () => {
  //tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");
  // сначала скрываем неактивные элементы
  function hideTabContent() {
    tabsContent.forEach((item) => {
      // до подключения классов с анимацией
      //  item.style.display = "none";
      // После подключения классов с анимацией
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  // теперь показываем активные элементы
  function showTabContent(i = 0) {
    // до подключения классов с анимацией
    //tabsContent[i].style.display = "block";
    // После подключения классов с анимацией
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    // создаем переменную, чтобы писать короче
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((eachTab, i) => {
        if (target == eachTab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer
  const deadline = "2021-07-01";

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
    (days = timer.querySelector("#days")),
      (hours = timer.querySelector("#hours")),
      (minutes = timer.querySelector("#minutes")),
      (seconds = timer.querySelector("#seconds"));
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

  setClock(".timer", deadline);

  //modal
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");
  //,
  // этот крестик закрытия динамический, и работать в будущих МО не будет
  //   modalCloseButton = document.querySelector("[data-close]");
  // поэтому мы его удаляем и пропиываем новый функционал в
  //callback функцию на строке 134

  modalTrigger.forEach((item) => {
    item.addEventListener("click", () => {
      openModal();
    });
  });

  // этот же крестик удаляем отсюда
  //modalCloseButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    //это условие дополняем, чтобы работал крестик (определяем наследование)
    //if (event.target === modal) {
    // теперь при клике на подложку или какой-то крестик любое МО закрывается
    if (
      event.target === modal ||
      event.target.getAttribute("data-close") == ""
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
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
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

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
      const element = document.createElement("div");
      this.classes.forEach((className) => element.classList.add(className));
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

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Премиум"',
    "Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    14,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!",
    21,
    ".menu .container",
    "menu__item"
  ).render();

  // Запросы

  const forms = document.querySelectorAll("form");
  const message = {
    loading: "/JS_54/img/form/spinner.svg",
    success: "We will contact you soon",
    failure: "Ooops",
  };
  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
      // удаляем эту строчку, тк в нижней форме использован flex
      // и наш spinner будет отображаться не там где надо
      // form.append(statusMessage);
      // прописываем эту строчку
      form.insertAdjacentElement("afterend", statusMessage);

      const request = new XMLHttpRequest();
      request.open("POST", "server.php");

      request.setRequestHeader("Content-type", "application/json");
      const formData = new FormData(form);
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });

      const json = JSON.stringify(object);
      request.send(json);

      // удаяляем request.send(formData);

      request.addEventListener("load", () => {
        if (request.status === 200) {
          console.log(request.response);
          // из-за создания НМО эту строку заменяем
          // statusMessage.textContent = message.success;
          showThanksModal(message.success);
          form.reset();
          // после создания нового МО можно удалить таймер
          // setTimeout(() => {
          //потому что этот статус теперь используется только для спиннера
          statusMessage.remove();
          // }, 2000);
        } else {
          // также заменяем и эту строку
          // statusMessage.textContent = message.failure;
          showThanksModal(message.failure);
        }
      });
    });
  }

  // создаем функцию окна, которое будет будет возникать при отправке формы
  // с аргументом message? которое берется со строк 238-240
  function showThanksModal(message) {
    // создаем переменную, с которой будет осуществляться взаимодействие
    const previousModalDialog = document.querySelector(".modal__dialog");
    //этот элемент нужно скрыть. Обращаемся к классам css и добавляем "скрыть"
    previousModalDialog.classList.add("hide");
    //одновременно запускаем фенкцию открытия модального окна,
    // чтобы показать пользователю новое окно
    openModal();
    // задаем переменную, которая отвечает за блок нового модального окна
    // фактически создаем новый див, тк старый мы скрыли
    const thanksModal = document.createElement("div");
    // новому модальному окну применяем классы старого МО
    thanksModal.classList.add("modal__dialog");
    // Создаем наполнение нового МО
    thanksModal.innerHTML = `
    <div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${message}
    </div>
    </div>
     `;

    // получаем новое МО, путем добавления его в DOM (append)
    document.querySelector(".modal").append(thanksModal);
    // нужно вернуть старое МО, если пользователь захочет снова связаться с нами
    //создаем асинхронный таймер на 4 секунды
    setTimeout(() => {
      // который уберет новое МО
      thanksModal.remove();
      // и покажет старое МО
      previousModalDialog.classList.add("show");
      // чтобы у сторого МО не конфликтовали классы, лишний убираем
      previousModalDialog.classList.remove("hide");
      // закрываем МО, чтобы не мешало пользователю
      closeModal();
    }, 4000);
  }
});
