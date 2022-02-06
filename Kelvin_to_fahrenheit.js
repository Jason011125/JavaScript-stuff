//this is the constant kelvin
const Kelvin = 0;
//this is the Celcius Variable
const Celsius = Kelvin - 273;
//now set up faherenheit
let fahrenheit = Celsius *(9/5) + 32;
//round up faherenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

