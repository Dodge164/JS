window.addEventListener("DOMContentLoaded", () => {
  //Timer;
  const deadline = "2021-07-07";

  function getTimeRemaining(endtime) {
    // задаем срок дедлайна
    const t = Date.parse(endtime) - Date.parse(new Date()), // t - техническая ф-я, рез-т = ms
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  // создаем ф-ю, которая проверяет в какой форме дата,
  // если < 10, то добавляет ноль перед числом
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  // устанавливаем часы
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();
    // формируем работу счетчика
    function updateClock() {
      const t = getTimeRemaining(endtime);
      // помещаем результат на страницу с помощью вставки в html code
      days.innerHTML = getZero(t.days); // добавляем ноль для дат с одной цифр, не 7, а 07
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // Останавливаем таймер при достижении времени
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});
