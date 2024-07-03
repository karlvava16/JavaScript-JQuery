const clockFace = document.querySelector(".clock-face");
const numbers = document.querySelector(".numbers");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const createClockNumbers = () => {
  const radius = 440;
  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * 360;
    const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
    const number = document.createElement("div");
    number.classList.add("number");
    number.style.left = `${50 + x / 3}px`;
    number.style.top = `${50 + y / 3}px`;
    number.textContent = i;
    numbers.appendChild(number);
  }
};

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

createClockNumbers();
setInterval(setDate, 1000);
setDate();
