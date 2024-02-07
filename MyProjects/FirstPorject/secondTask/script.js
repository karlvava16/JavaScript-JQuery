let ticketNumber = "";

while(true)
{
    ticketNumber = prompt();

    if(ticketNumber.length !== 6)
    {
        alert("not a six digital number");
    }
}
