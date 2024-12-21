function checkTextField() {
  const field1 = document.getElementById("textField1").value;
  const field2 = document.getElementById("textField2").value;
  if (field1 && field2) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}

function checkNumberSum() {
  const num1 = parseFloat(document.getElementById("numberField1").value);
  const num2 = parseFloat(document.getElementById("numberField2").value);
  if (num1 + num2 > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}

function checkForJavaScript() {
  const text = document.getElementById("textField3").value;
  if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}

function checkNumberRange() {
  const number = parseFloat(document.getElementById("numberField3").value);
  if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}

function validateForm() {
  const name = document.getElementById("nameField").value;
  const email = document.getElementById("emailField").value;
  const password = document.getElementById("passwordField").value;

  const emailValid =
    email.includes("@") && email.indexOf(".") > email.indexOf("@");
  if (name.length >= 3 && emailValid && password.length >= 6) {
    alert("Дані правильно заповнені. Перенаправлення...")
  } else {
    alert("Помилка: дані заповнені неправильно");
  }
}
