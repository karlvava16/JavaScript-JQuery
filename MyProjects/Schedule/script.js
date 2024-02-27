function whichDate()
{
  const currentDate = new Date()

  let result = confirm("Ввести дату?")
  if(result == true)
  {
    let year = prompt("Введите год:")
    let month = prompt("Введите месяц:")
    let day = prompt("Введите день:")
    month = month - 1
    currentDate.setYear(year)
    currentDate.setMonth(month)
    currentDate.setDate(day)
    StartSchedule(currentDate)
  } else {
    StartSchedule(currentDate)
  }
}

function StartSchedule(currentDate)
{
  alert(currentDate)

  console.log(currentDate)
  setBgImage(currentDate.getMonth())


  drawSchedule(currentDate)
}

function drawSchedule(currentDate)
{
  let temp_date = new Date(currentDate.toUTCString())
  temp_date.setDate(1)
  if (temp_date.getDay() != 1)
  {
    temp_date.setDate(temp_date.getDate() - ((temp_date.getDay() === 0 ? 6 : temp_date.getDay() - 1)))
  }



  let bgSchedule = document.getElementById("schedule_block")

  let count = 1

  while ((temp_date.getMonth() <= currentDate.getMonth() && temp_date.getYear() <= currentDate.getYear()) || count % 6 != 0) 
  {

    let child = document.createElement("div")
    child.className = "sup"
    const newText = document.createTextNode(temp_date.getDate());
    child.appendChild(newText)

    if (temp_date.getMonth() != currentDate.getMonth())
    {
      child.classList.add("wrongMonth")
    }
    else if (temp_date.getDate() === currentDate.getDate() && temp_date.getMonth() === currentDate.getMonth())
    {
      child.classList.add("currentDay")
    }
    else if (temp_date.getDay() === 0 || temp_date.getDay() === 6)
    {
      child.classList.add("weekend_day")
    }


    bgSchedule.appendChild(child)

    temp_date.setDate(temp_date.getDate() + 1);

    // increase day
    console.log(`${count} `  + temp_date)

    count++

  }
}




function setBgImage(month)
{
  let bgSchedule = document.getElementById("schedule_block")


  if(month  < 2 || month === 11)
  {
    bgSchedule.style.backgroundImage = "url('img/1.jpg')";
  }
  else if (month < 5)
  {
    bgSchedule.style.backgroundImage = "url('img/2.jpg')";
  }
  else if (month < 8) 
  {
    bgSchedule.style.backgroundImage = "url('img/3.jpg')";
  }
  else
  {
    bgSchedule.style.backgroundImage = "url('img/4.jpg')";
  }
}