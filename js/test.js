const generateTestData = (function () {
  class ExampleItem {
    constructor(name, phone, email, product) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.product = product;
    }
  }

  let testData = [
    new ExampleItem("Игорь Кожевников", "89772345467", 'igor.@mail.ru', 'course-html'),
    new ExampleItem("Максим Катасонов", "89456762111", 'maksim.@mail.ru', 'course-js'),
    new ExampleItem("Виктор Саламатов", "89881235673", 'victor.@mail.ru', 'course-vue'),
    new ExampleItem("Вячеслав Свойкин", "89875342311", 'vyacheslav.@mail.ru', 'course-php'),
    new ExampleItem("Андрей Калашников", "89452348763", 'andrey.@mail.ru', 'course-js'),
    new ExampleItem("Фёдор Олейников", "89634129837", 'fedor.@mail.ru', 'course-php'),
    new ExampleItem("Илья Ивонин", "891111111111", 'ilya.@mail.ru', 'course-wordpress'),
    new ExampleItem("Дмитрий Корсаков", "892222222442", 'dmitriy.@mail.ru', 'course-vue'),
  ];


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function insertInUI() {
    let random = getRandomInt(testData.length);
    let randomItem = testData[random];

    document.querySelector("#nameForm").value = randomItem.name;
    document.querySelector("#phoneForm").value = randomItem.phone;
    document.querySelector("#emailForm").value = randomItem.email;
    document.querySelector("#exampleFormControlSelect1").value = randomItem.product;
  }
  return {
    init: insertInUI
  }
})();

generateTestData.init();