let name = "";
let surname= "";
let sex = "";
let age = 0;
let email = "";

let result = false;

while(!result)
{
    name = prompt("Enter your name:");
    surname = prompt("Enter your surname:");
    sex = prompt("Enter your sex:");
    age = parseInt(prompt("Enter your age:"));
    email = prompt("Enter your email:");
    
    result = confirm(
    `Name: ${name}\n` +
    `Surname: ${surname}\n` +
    `Sex: ${sex}\n` + 
    `Age: ${age}\n` +
    `Email: ${email}\n` +
    'Is right?'
    );
    if(result) {
        alert("Thank you for your personal information!")
    }    
}