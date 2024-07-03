const errorEmailSpan = document.getElementById("email-error");
const errorPasswordSpan = document.getElementById("password-error");
const errorRepeatSpan = document.getElementById("repeat-error");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatInput = document.getElementById("repeat");
const form = document.getElementById("reg-form");

let Security = {
  Email: "",
  Password: "",
};

document.addEventListener("DOMContentLoaded", function () {
  let storedData = localStorage.getItem("Security");
  if (storedData) {
    Security = JSON.parse(storedData);
    emailInput.value = Security.Email;
    passwordInput.value = Security.Password;
    repeatInput.value = Security.Password;
  }
});

form.addEventListener("submit", function (event) {
  let valid = true;

  const emailPattern = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    errorEmailSpan.style.display = "block";
    valid = false;
  } else {
    Security.Email = emailInput.value;
    errorEmailSpan.style.display = "none";
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    errorPasswordSpan.style.display = "block";
    valid = false;
  } else {
    errorPasswordSpan.style.display = "none";
    Security.Password = passwordInput.value;
  }

  if (passwordInput.value !== repeatInput.value) {
    errorRepeatSpan.style.display = "block";
    valid = false;
  } else {
    errorRepeatSpan.style.display = "none";
  }

  if (valid) {
    event.preventDefault();
    localStorage.setItem("Security", JSON.stringify(Security));
    window.location.href = "index.html";
  }
});
