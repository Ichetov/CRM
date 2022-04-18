var viewControllerForm = (function () {

  let DOMstrings = {
    form: '#form',
    product: '#exampleFormControlSelect1',
    name: '#nameForm',
    phone: '#phoneForm',
    email: '#emailForm', 
  }


  function getInput() {
    return {
      name: document.querySelector(DOMstrings.name).value,
      phone: document.querySelector(DOMstrings.phone).value,
      email: document.querySelector(DOMstrings.email).value,
      product: document.querySelector(DOMstrings.product).value,
      date: displayMonth(),
      dateTime: displaysDateTime()
    }
  }


  function displayMonth() {
    let now = new Date().toLocaleDateString();
    return now;
  }


  function displaysDateTime() {
    let now = new Date();
    let v = now.toLocaleTimeString();
    let c = now.getDate();
    let n = now.getMonth() + 1;
    let z = now.getFullYear();
    let r = `${z}-${n}-${c} ${v}`
    return r;
  }


  return {
    getInput: getInput,
    getDomStrings: function () {
      return DOMstrings
    }
  }

})();