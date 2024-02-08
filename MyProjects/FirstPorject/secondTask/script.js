let ticketNumber = "";

while(true)
{
    ticketNumber = prompt("Enter ticket number");

    if (ticketNumber.length !== 6 || isNaN(parseInt(ticketNumber)))
    {
        alert("not a six digital number");
        continue;
    }
    

    let firstSum = 0;
    let secondSum = 0;

    for (let index = 0; index < (ticketNumber.length / 2); index++) {
        firstSum += parseInt(ticketNumber[index]);
    }

    for (let index = parseInt((ticketNumber.length / 2)); index < ticketNumber.length; index++) {
        secondSum += parseInt(ticketNumber[index]);
    }

    if (firstSum === secondSum)
    {
        alert("It is lucky ticket")
    }
    else
    {
        alert("It is not lucky ticket")
    }
}
