// The weather at forecast today
const kelvin = 293;

// Convert Kelvin to Celsius
const Celsius = kelvin - 273;

// Convert from Celsius to fahrenheit
let fahrenheit = Celsius * (9/5) + 32;
// Output without decimal number
fahrenheit = Math.floor(fahrenheit);

// Convert celsius to Newton
let newton = Celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
