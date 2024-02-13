let elements = new Map()
elements.set("0", "clock/0.gif")
elements.set("1", "clock/1.gif")
elements.set("2", "clock/2.gif")
elements.set("3", "clock/3.gif")
elements.set("4", "clock/4.gif")
elements.set("5", "clock/5.gif")
elements.set("6", "clock/6.gif")
elements.set("7", "clock/7.gif")
elements.set("8", "clock/8.gif")
elements.set("9", "clock/9.gif")
elements.set(".", "clock/blank.gif")
elements.set(":", "clock/points.gif")

let values = new Array()
  for (let i = 0; i < 8; i++) {
    document.write(`<img id="${i}" src="clock/0.gif">`);
    values.push(document.getElementById(`${i}`))
  }
drawClock()

function getTime()
{
    let now = new Date();
    let h = now.getHours();
    if (h < 10)
        h = "0" + h;
    let m = now.getMinutes();
    if (m < 10)
        m = "0" + m;
    let s = now.getSeconds();
    if (s < 10)
        s = "0" + s;

    return h + ":" + m + ":" + s;
}

function drawClock()
{
  let time = getTime()
  
  for (let i = 0; i < values.length; i++) {

      values[i].src = elements.get(time[i])
  }
}
  