document.getElementById("displayDateButton").addEventListener("click", displayDate);
document.getElementById("checkPastOrFutureButton").addEventListener("click", checkPastOrFuture);
document.getElementById("checkLeapYearButton").addEventListener("click", checkLeapYear);
document.getElementById("previousDateButton").addEventListener("click", previousDate);
document.getElementById("nextDateButton").addEventListener("click", nextDate);

const output = document.getElementById("output");
const dateInput = document.getElementById("dateInput");

class ExtendedDate extends Date {
    constructor() { super(); }
    displayDate() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const day = this.getDate();
        const month = months[this.getMonth()];
        const year = this.getFullYear();
        return `${day} ${month}, ${year}`;
    }
    setDateFromString(dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        this.setFullYear(year, month - 1, day);
    }
    isFuture() {
        const currentDate = new Date();
        return this > currentDate;
    }
    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    getNextDate() {
        const nextDate = new ExtendedDate(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
    getPreviousDate() {
        const previousDate = new ExtendedDate(this);
        previousDate.setDate(this.getDate() - 1);
        return previousDate;
    }
}

const extendedDate = new ExtendedDate();

function displayDate() {
    if (dateInput.value) {
        extendedDate.setDateFromString(dateInput.value);
        output.textContent = extendedDate.displayDate();
    } else {
        output.textContent = "Please enter a date";
    }
}

function checkPastOrFuture() {
    if (dateInput.value) {
        extendedDate.setDateFromString(dateInput.value);
        output.textContent = extendedDate.isFuture() ? "The date is in the future" : "The date is in the past";
    } else {
        output.textContent = "Please enter a date";
    }
}

function checkLeapYear() {
    if (dateInput.value) {
        extendedDate.setDateFromString(dateInput.value);
        output.textContent = extendedDate.isLeapYear() ? "It is a leap year" : "It is not a leap year";
    } else {
        output.textContent = "Please enter a date";
    }
}

function nextDate() {
    if (dateInput.value) {
        extendedDate.setDateFromString(dateInput.value);
        const next = extendedDate.getNextDate();
        output.textContent = next.displayDate();
    } else {
        output.textContent = "Please enter a date";
    }
}

function previousDate() {
    if (dateInput.value) {
        extendedDate.setDateFromString(dateInput.value);
        const previous = extendedDate.getPreviousDate();
        output.textContent = previous.displayDate();
    } else {
        output.textContent = "Please enter a date";
    }
}
