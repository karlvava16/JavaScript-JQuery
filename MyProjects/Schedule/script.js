function StartSchedule()
{
  let currentDate = new Date()
  console.log(currentDate.getMonth())
  setBgImage(currentDate.getMonth())


  drawSchedule(currentDate)
}

function drawSchedule(currentDate)
{
  let temp_date = JSON.parse(JSON.stringify(currentDate))
  console.log(temp_date)
  temp_date.setDate(1)
  console.log(temp_date.getDay())
  if (temp_date.getDay() != 1)
  {
    temp_date.setDate(temp_date.getDate() - ((temp_date.getDay() === 0 ? 6 : temp_date.getDay() - 1)))
  }
  console.log(temp_date)



  let bgSchedule = document.getElementById("schedule_block")

  while (temp_date.getMonth() <= currentDate.getMonth() || temp_date.getYear() <= currentDate.getYear()) 
  {
    let child = document.createElement("div")
    child.className = "test"
    bgSchedule.appendChild(child)


    // increase day
    temp_date.setDate(currentDate.getDate() + 1);
    console.log("1) "  + temp_date)
    console.log("2) " + currentDate)
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