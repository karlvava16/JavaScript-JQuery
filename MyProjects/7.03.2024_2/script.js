const welcomeTitle = document.getElementById("title-user");
const form = document.getElementById("profile-form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const birthDateInput = document.getElementById("birthDate");
const genderSelect = document.getElementById("gender");
const phoneNumberInput = document.getElementById("phoneNumber");
const skypeInput = document.getElementById("skype");
const birthDateError = document.getElementById("birthDate-error");
const phoneNumberError = document.getElementById("phoneNumber-error");
const logoutButton = document.getElementById("logout-button");

let User = {
  FirstName: "",
  LastName: "",
  BirthDate: "",
  Gender: "",
  Phone: "",
  Skype: "",
};

function _initialization() {
  let security = JSON.parse(localStorage.getItem("Security"));
  welcomeTitle.innerText = "Welcome, " + security.Email;
  firstNameInput.value = User.FirstName;
  lastNameInput.value = User.LastName;
  birthDateInput.value = User.BirthDate;
  genderSelect.value = User.Gender;
  phoneNumberInput.value = User.Phone;
  skypeInput.value = User.Skype;
}

function saveUser() {
  User.FirstName = firstNameInput.value;
  User.LastName = lastNameInput.value;
  User.BirthDate = birthDateInput.value;
  User.Gender = genderSelect.value;
  User.Phone = phoneNumberInput.value;
  User.Skype = skypeInput.value;

  localStorage.setItem("User", JSON.stringify(User));

  alert("Save changes");
}

function checkData() {
  let valid = true;

  const firstName = firstNameInput.value.trim();
  if (!firstName.match(/^[a-zA-Z]+$/) || firstName.length > 20) {
    firstNameInput.classList.add("error");
    valid = false;
  } else {
    firstNameInput.classList.remove("error");
  }

  const lastName = lastNameInput.value.trim();
  if (!lastName.match(/^[a-zA-Z]+$/) || lastName.length > 20) {
    lastNameInput.classList.add("error");
    valid = false;
  } else {
    lastNameInput.classList.remove("error");
  }

  const birthDate = new Date(birthDateInput.value);
  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();

  if (
    isNaN(birthDate.getTime()) ||
    birthYear < 1900 ||
    birthYear > currentYear
  ) {
    birthDateError.style.display = "block";
    valid = false;
  } else {
    birthDateError.style.display = "none";
  }

  const phoneNumber = phoneNumberInput.value.replace(/\D/g, "");
  if (
    phoneNumber.length > 0 &&
    (phoneNumber.length < 10 || phoneNumber.length > 12)
  ) {
    phoneNumberInput.classList.add("error");
    valid = false;
  } else {
    phoneNumberInput.classList.remove("error");
  }

  return valid;
}

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("User");
  window.location.href = "registration.html";
});

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("Security")) {
    window.location.href = "registration.html";
  } else {
    const userData = localStorage.getItem("User");
    if (userData) {
      User = JSON.parse(userData);
    }
    _initialization();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (checkData()) {
    saveUser();
  }
});
