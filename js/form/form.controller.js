var controllerForm = (function (model, view) {

  let DOM = view.getDomStrings();

  document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);


  function ctrlAddItem(e) {
    e.preventDefault();
    const input = view.getInput();
    model.addItem(input);
    generateTestData.init();
  }



})(modelController, viewControllerForm);