
function CelsiusToFahrenheit() {
    let celsius = prompt("Convert Celsius to Fahrenheit:");

    celsius = parseFloat(celsius);

    let fahrenheit = (celsius * 9 / 5) + 32;

    alert(`${celsius}°C = ${fahrenheit}°F`);
}



