let min = 0;
let max = 100;
let guess;

while (true) 
{
  guess = Math.floor((min + max) / 2);

  let answer = prompt(`Your Number is > ${guess}, < ${guess} или == ${guess}? (Enter '>', '<' or '=')`);

  if (answer === '>') {
    min = guess + 1;
  } else if (answer === '<') {
    max = guess - 1;
  } else if (answer === '=') {
    alert(`Your number is ${guess}`);
    break;
  } else {
    alert('Incorrect enter');
  }
}