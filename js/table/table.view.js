var viewControllerTable = (function () {

  let DOMstrings = {

    selected: '#inputGroupSelect01',
    horizontalBtn: '#allBtn a',
    verticalBtn: '#one a',
    body: '#three',
    container: '#container',
    btnVertical: '#one a',
    btnHorizontal: '#allBtn a',

  }


  function displaysData(bids) {

    let html, container, color;
    container = document.querySelector(DOMstrings.container);

    container.innerHTML = '';

    if (bids) {

      for (let item of bids) {

        color = getBageColor(item.status);

        let product = findsProduct(item.product);
        let status = findsStatus(item.status);

        html = `<tr class='ner' data-card= ${item.id}>
      						<th scope="row">${item.id}</th>
      						<td>${item.date}</td>
      						<td>${product}</td>
      						<td>${item.name}</td>
      						<td>${item.email}</td>
      						<td>${item.phone}</td>
      						<td>
      							<div class="badge badge-pill ${color}">${status}</div>
      						</td>
      						<td>
      						 <a data-editing href ='edit.html'> Редактировать </a>
      						</td>
      					</tr>`

        container.insertAdjacentHTML('beforeend', html);
      }
    }

  }

  function getBageColor(status) {

    const data = new Map([
      ['work', 'badge-warning'],
      ['completed', 'badge-success'],
      ['rejection', 'badge-cyan'],
      ['payment-expected', 'badge-darkviolet'],
      ['new', 'badge-danger'],
    ]);

    for ([key, value] of data) {
      if (key === status) {
        return value;
      }
    }

  }


  function displaysNumberStatuses(number) {

    let allBtn = document.querySelectorAll(DOMstrings.verticalBtn);

    for (let key in number) {

      for (let item of allBtn) {
        if (item.dataset['btn'] == key) {
          let btn = document.querySelector(`[data-btn="${item.dataset['btn']}"]`);
          let html = `<div class="badge">${number[key]}</div>`
          btn.insertAdjacentHTML('beforeend', html);
        }
      }

    }

  }

  function findsProduct(item) {

    const data = new Map([
      ["course-html", "Курс по верстке"],
      ["course-js", "Курс по JavaScript"],
      ["course-vue", "Курс по VUE JS"],
      ["course-php", "Курс по PHP"],
      ["course-wordpress", "Курс по WordPress"],
      ["all-products", "Все продукты"]
    ]);

    for ([key, meaning] of data) {
      if (key === item) {
        return meaning;
      }
    }

  }


  function findsStatus(item) {

    const data = new Map([
      ["new", "Новая"],
      ["work", "В работе"],
      ["payment-expected", "Ожидается оплата"],
      ["completed", "Завершена"],
      ["rejection", "Отказ"],
    ]);

    for ([key, meaning] of data) {
      if (key === item) {
        return meaning;
      }
    }

  }

  function addsActiveClass(status) {

    let verticalBtn = document.querySelectorAll(DOMstrings.btnVertical);
    let horizontalBtn = document.querySelectorAll(DOMstrings.btnHorizontal);

    for (let item of verticalBtn) {
      if (item.dataset['btn'] == status) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }

    for (let item of horizontalBtn) {
      if (item.dataset['btn'] == status) {
        item.classList.add('activBtn');
      } else {
        item.classList.remove('activBtn');
      }
    }

  }


  return {
    findsProduct: findsProduct,
    displaysData :displaysData,
    addsActiveClass,
    addsActiveClass,
    displaysNumberStatuses: displaysNumberStatuses,
    getDomStrings: function () {
      return DOMstrings
    }

  }
})();