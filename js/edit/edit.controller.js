var controllerEdit = (function (model, view) {

  var DOM = view.getDomStrings();

  view.displaysNumberStatuses(model.displaysQuantityStatuses());


  view.display(model.data().allItems, model.data().edited);


  // При клике сохранить получает данные из edit.view и передаёт их в model
  document.querySelector(DOM.save).addEventListener('click', () => {
    model.overwritesData(view.savesData());
  })

  document.querySelector(DOM.delete).addEventListener('click', function () {
    // Нахожу id элемента
    let numberId = document.querySelector(DOM.number).textContent;
    // Функция добавляет в новый массив удалённый элемент и сохраняет в localStorage с новым ключом
    model.addsArray(numberId);
    // Функция удаляет из общего массива с данными элемент который необходимо удалить
    model.deletesElement(numberId);
  })

})(modelController, viewControllerEdit); 




