window.addEventListener("DOMContentLoaded", () => {
  //modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseButton = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });
  // создаем ф-ю, тк код внутри нее нужно прописывать еще два раза в других местах
  function closeMadal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseButton.addEventListener("click", closeMadal); // ф-я должна быть здесь в колбэке
  // прописываем закрытие модального окна при клике на пустую область
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeMadal(); // ф-я должна быть здесь в условии
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeMadal();
    }
  });
});
