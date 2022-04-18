var controllerEdit = (function (model, view) {

  var DOM = view.getDomStrings();

  view.displaysNumberStatuses(model.displaysQuantityStatuses());


  view.display(model.data().allItems, model.data().edited);


  document.querySelector(DOM.save).addEventListener('click', () => {
    model.overwritesData(view.savesData());
  })

  document.querySelector(DOM.delete).addEventListener('click', function () {
    let numberId = document.querySelector(DOM.number).textContent;
    model.addsArray(numberId);
    model.deletesElement(numberId);
  })

})(modelController, viewControllerEdit); 




