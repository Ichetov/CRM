const modelController = (function () {


  class Application {
    constructor(id, name, email, phone, status, date, dateTime, product) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.status = status;
      this.date = date;
      this.dateTime = dateTime;
      this.product = product;
    }
  }

  const data = {
    allItems: [],
    edited: '',
    deleted: []
  }


  if (localStorage.getItem('all')) {
    data.allItems = JSON.parse(localStorage.getItem('all'));
  }

  if (localStorage.getItem('archive')) {
    data.deleted = JSON.parse(localStorage.getItem('archive'));
  }


  if (localStorage.getItem('number')) {
    data.edited = JSON.parse(localStorage.getItem('number'));
  }


  // Функция создаёт на основе конструктора объект пушит его в массив и сохраняет в localStorage
  function addItem(item) {

    let newItem, id, status;

    if (data.allItems.length !== 0) {
      let lastIndex = data.allItems.length - 1;
      id = data.allItems[lastIndex].id + 1;
    } else {
      id = 1;
    }

    status = 'new';
    newItem = new Application(id, item.name, item.email, item.phone, status, item.date, item.dateTime, item.product)
    data.allItems.push(newItem);
    localStorage.setItem('all', JSON.stringify(data.allItems));
  }

  // Функция добавляет в в свойство объекта id элемента
  function savesElement(number) {

    data.allItems.find(item => {

      if (item.id == number) {
        data.edited = item.id;
        localStorage.setItem('number', JSON.stringify(data.edited));
        return true;
      }

    })

  }


  function overwritesData(formData) {

    for (let item of data.allItems) {

      if (formData.number == item.id) {
        item.product = formData.product;
        item.email = formData.email;
        item.phone = formData.phone;
        item.status = formData.status;
        item.name = formData.name;
      }

      localStorage.setItem('all', JSON.stringify(data.allItems));
    }

  }


  // Функция получает количество объектов с тем или иным статусом и возвращает объект
  function displaysQuantityStatuses() {

    return {
      'all-together': (data.allItems.length + data.deleted.length),
      'new': countsNumber('new'),
      'work': countsNumber('work'),
      'completed': countsNumber('completed'),
      'btnAarchive': data.deleted.length
    }

  }

  // Функция считает сколько объектов с тем или иным статусом и возвращает число
  function countsNumber(text) {
    let number = 0;

    for (let item of data.allItems) {
      if (item.status === text) number++;
    }

    return number;
  }


  // Функция находит объект который нужно удалить и удаляет его из массива с основными данными
  function deletesElement(numberId) {

    for (let i = 0; i < data.allItems.length; i++) {

      if (data.allItems[i].id == numberId) {
        data.allItems.splice([i], 1);
      }
      
    }

    localStorage.setItem('all', JSON.stringify(data.allItems));

  }

  // Функция находит объект который нужно удалить и сохраняет его отдельно в  localStorage под своим ключом
  function addsArray(numberId) {

    let itemDeleted = data.allItems.find(function (item) {

      if (item.id == numberId) {
        return true;
      }
    })

    data.deleted.push(itemDeleted);
    localStorage.setItem('archive', JSON.stringify(data.deleted));
  }


  return {

    addItem: addItem,
    savesElement: savesElement,
    overwritesData: overwritesData,
    displaysQuantityStatuses: displaysQuantityStatuses,
    deletesElement: deletesElement,
    addsArray: addsArray,
    data: function () {
      return data;
    }

  }

})();