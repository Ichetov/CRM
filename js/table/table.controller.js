var controllerTable = (function (model, view) {
  let DOM = view.getDomStrings();

  view.displaysData(model.data().allItems);


  // Метод отображает в левой колонки числа которые соответствуют данным с тем или иным статусом

  view.displaysNumberStatuses(model.displaysQuantityStatuses());

  // При клике по редактировать нахожу id кнопки по корой кликнул и запускаю метод который найдёт элемент с этим id и добавит его в объект дата
  document.querySelector(DOM.container).addEventListener('click', function (e) {

    if (e.target.hasAttribute('data-editing')) {
      let id = e.target.closest('[data-card]').dataset.card;
      model.savesElement(id);
    }

  })


  // При клике по любой из кнопок имеющей data атрибут data-btn, будет браться та кнопка, у уоторой есть этот атрибут
  document.querySelector(DOM.body).addEventListener('click', function (e) {

    if (e.target.dataset['btn']) {

      let attribute = e.target.dataset['btn'];

      let data = filtersStatus(attribute);
      view.addsActiveClass(attribute)
      view.displaysData(data);

    }

  })


  function filtersProducts(product) {
    // Нахожу у какой кнопки в данный момент есть активный класс и нахожу data атрибут этого класса
    let activeButton, data;
    let allBtn = document.querySelectorAll(DOM.btnHorizontal);

    for (let item of allBtn) {
      if (item.classList.contains('activBtn')) activeButton = item.dataset.btn;
    }

    if (activeButton != 'all-together' && activeButton != 'btnAarchive') {
      data = createsFilterArray(activeButton);

    } else if (activeButton == 'btnAarchive') {

      if (model.data().deleted.length) {
        data = model.data().deleted;

      } else {
        data = [];
      }

    } else {
      data = model.data().allItems;
    }

    if (product != 'all-products') {
      let filteredData = data.filter(item => {

        if (item.product == product) return true;
      })
      return filteredData;

    } else {
      return data;
    }

  }


  function filtersStatus(status) {

    let product = document.querySelector(DOM.selected).value;

    if (status != 'all-together' && status != 'btnAarchive') {
      let newData = createsFilterArray(status);
      return checksProduct(product, newData);

    } else if (status == 'all-together') {
      return checksProduct(product, model.data().allItems);

    } else {
      if (model.data().deleted.length) {
        return checksProduct(product, model.data().deleted);
      }

    }

  }

  function checksProduct(product, sourceArray) {

    if (product != 'all-products') {
      let newArray = sourceArray.filter(item => {
        if (item.product == product) return true;
      })
      return newArray;

    } else {
      return sourceArray;
    }

  }

  function createsFilterArray(attribute) {

    if (model.data().allItems.length) {
      let newArray = model.data().allItems.filter(item => {
        if (item.status == attribute) return true;
      })
      return newArray;
    }

  }


  document.querySelector(DOM.selected).addEventListener("change", filtersProduct);

  function filtersProduct() {

    let product = document.querySelector(DOM.selected).value;
    let data = filtersProducts(product);
    view.displaysData(data);

  }


})(modelController, viewControllerTable);