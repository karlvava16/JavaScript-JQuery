let elements = [
  "clock/0.gif",
  "clock/1.gif",
  "clock/2.gif",
  "clock/3.gif",
  "clock/4.gif",
  "clock/5.gif",
  "clock/6.gif",
  "clock/7.gif",
  "clock/8.gif",
  "clock/9.gif",
  "clock/blank.gif",
  "clock/points.gif"
]


function drawClock()
{
  var values = new Array()
  for (let i = 0; i < 8; i++) {
    document.write(`<img id="${i}">`);
    values.push(document.getElementById(`${i}`))
  }
  for (let i = 0; i < values.length; i++) {
      values[i].style.src = elements[i]    
  }
}
  