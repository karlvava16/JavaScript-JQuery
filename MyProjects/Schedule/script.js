function StartSchedule()
{
  const currentDate = new Date()
  console.log(currentDate.getMonth())
  setBgImage(currentDate.getMonth())


  drawSchedule(currentDate)
}

function drawSchedule(currentDate)
{
  let temp_date = new Date(currentDate.toUTCString())
  console.log(typeof(temp_date))
  temp_date.setDate(1)
  console.log(temp_date.getDay())
  if (temp_date.getDay() != 1)
  {
    temp_date.setDate(temp_date.getDate() - ((temp_date.getDay() === 0 ? 6 : temp_date.getDay() - 1)))
  }
  console.log(temp_date)



  let bgSchedule = document.getElementById("schedule_block")

  let count = 0

  while (temp_date.getMonth() <= currentDate.getMonth() || count % 7 != 0) 
  {
    count++

    let child = document.createElement("div")
    child.className = "sup"
    const newText = document.createTextNode(temp_date.getDate());
    child.appendChild(newText)

    if (temp_date.getMonth() != currentDate.getMonth())
    {
      child.classList.add("wrongMonth")
    }
    else if (temp_date.getDay() === 0 || temp_date.getDay() === 6)
    {
      child.classList.add("weekend_day")
    }


    bgSchedule.appendChild(child)

    temp_date.setDate(temp_date.getDate() + 1);

    // increase day
    console.log(`${count} `  + temp_date)
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