var viewControllerEdit = (function () {

  let DOMstrings = {
    number: '#number',
    date: '#date',
    name: '#name',
    phone: '#phone',
    email: '#mail',
    productOption: '#product option',
    productStatus: '#status option',
    save: '#save',
    delete: '#delete',
    verticalBtn: '#one a',
    product: "#product",
    status: "#status"
  }

  const elementsForm = {
    number: document.querySelector(DOMstrings.number),
    date: document.querySelector(DOMstrings.date),
    mail: document.querySelector(DOMstrings.email),
    phone: document.querySelector(DOMstrings.phone),
    name: document.querySelector(DOMstrings.name),
    product: document.querySelector(DOMstrings.product),
    status: document.querySelector(DOMstrings.status)
  }


  function display(bids, id) {

    for (let item of bids) {

      if (item.id === id) {
        elementsForm.number.textContent = item.id;
        elementsForm.name.value = item.name;
        elementsForm.product.value = item.product;
        elementsForm.status.value = item.status;
        elementsForm.phone.value = item.phone;
        elementsForm.mail.value = item.email;
        elementsForm.date.textContent = item.dateTime;
      }

    }

  }


  function savesData() {

    return {

      number: elementsForm.number.textContent,
      name: elementsForm.name.value,
      phone: elementsForm.phone.value,
      email: elementsForm.mail.value,
      product: elementsForm.product.value,
      status: elementsForm.status.value,
      
    }

  }

  function displaysNumberStatuses(number) {

    let allBtn = document.querySelectorAll(DOMstrings.verticalBtn);

    for (let key in number) {

      for (let item of allBtn) {

        if (item.dataset['btn'] == key) {
          let btn = document.querySelector(`[data-btn="${item.dataset['btn']}"]`);
          btn.classList.remove('active');
          let html = `<div class="badge">${number[key]}</div>`
          btn.insertAdjacentHTML('beforeend', html);
        }

      }

    }

  }


  return {

    display: display,
    getDomStrings: function () {
      return DOMstrings
    },
    savesData: savesData,
    displaysNumberStatuses: displaysNumberStatuses

  }
})();