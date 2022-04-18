var controllerForm = (function (model, view) {

  let DOM = view.getDomStrings();

  document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);

  // функция срабатывает при клике по кнопке добавить в форму
  function ctrlAddItem(e) {
    e.preventDefault();
    // добавляет тестовые данные форму
    // получает данные из формы
    const input = view.getInput();
    //  отправляет данные из формы в модель
    model.addItem(input);
    generateTestData.init();
  }



})(modelController, viewControllerForm);