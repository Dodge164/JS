function forms() {
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
}

module.exports = forms;
