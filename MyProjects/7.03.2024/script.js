const loginField = document.getElementById('loginInput');
const passwordField = document.getElementById('passwordInput');
const confirmPasswordField = document.getElementById('confirmPasswordInput');
const fullNameField = document.getElementById('fullNameInput');
const genderFields = document.getElementsByName('genderOption');
const workField = document.getElementsByName('workField')[0];
const emailField = document.getElementsByName('emailAddress')[0];
const additionalInfoField = document.getElementsByName('additionalInfo')[0];

let userDetails = {
    login: '',
    password: '',
    fullName: '',
    gender: '',
    languages: [],
    workField: '',
    email: '',
    additionalInfo: '',
};

function populateFormFields(userData) {
    loginField.value = userData.login;
    passwordField.value = userData.password;
    confirmPasswordField.value = userData.password;
    fullNameField.value = userData.fullName;

    for (const genderField of genderFields) {
        if (genderField.value === userData.gender) {
            genderField.checked = true;
            break;
        }
    }

    const languageCheckboxes = document.querySelectorAll(
        "input[name^='languageOption']"
    );
    for (const languageCheckbox of languageCheckboxes) {
        if (userData.languages.includes(languageCheckbox.name)) {
            languageCheckbox.checked = true;
        }
    }

    workField.selectedIndex = userData.workField;
    emailField.value = userData.email;
    additionalInfoField.value = userData.additionalInfo;
}

let cookieStr = document.cookie;
if (cookieStr.length > 0) {
    const cookies = cookieStr.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('USER=')) {
            const userData = JSON.parse(
                decodeURIComponent(
                    cookie.substring('USER='.length, cookie.length)
                )
            );
            populateFormFields(userData);
            break;
        }
    }
}

document.getElementById('submitButton').addEventListener('click', function () {
    userDetails.login = loginField.value;

    const loginPattern = /^[a-zA-Z0-9]{4,}$/;
    if (!loginPattern.test(userDetails.login)) {
        alert(
            'Логин должен содержать только буквы и цифры, и иметь длину не менее 4 символов.'
        );
        return;
    }

    userDetails.password = passwordField.value;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_?&])[A-Za-z\d@$!%*_?&]{4,}$/;
    if (!passwordPattern.test(userDetails.password)) {
        alert(
            'Пароль должен быть не менее 4 символов и содержать как минимум одну заглавную и одну строчную букву, одну цифру и один специальный символ.'
        );
        return;
    }
    if (userDetails.password !== confirmPasswordField.value) {
        alert('Пароли не совпадают.');
        return;
    }

    userDetails.fullName = fullNameField.value;
    const namePattern = /^[^0-9]{4,}$/;
    if (!namePattern.test(userDetails.fullName)) {
        alert(
            'Имя должно содержать только буквы и иметь длину не менее 4 символов.'
        );
        return;
    }

    let genderChosen = false;
    for (const genderField of genderFields) {
        if (genderField.checked) {
            userDetails.gender = genderField.value;
            genderChosen = true;
            break;
        }
    }
    if (!genderChosen) {
        alert('Выберите ваш пол.');
        return;
    }

    const languageCheckboxes = document.querySelectorAll(
        "input[name^='languageOption']:checked"
    );
    for (const languageCheckbox of languageCheckboxes) {
        userDetails.languages.push(languageCheckbox.name);
    }

    userDetails.workField = workField.options[workField.selectedIndex];

    userDetails.email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userDetails.email)) {
        alert('Введите корректный email адрес.');
        return;
    }
    userDetails.additionalInfo = additionalInfoField.value;

    let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 6);
    document.cookie =
        'USER=' +
        encodeURIComponent(JSON.stringify(userDetails)) +
        ';path=/;expires=' +
        expiryDate.toUTCString() +
        ';';
});
