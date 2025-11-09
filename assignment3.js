function convertTemperature(scale) {
    let celsius = prompt("Enter C or F for temperture conversion: ");
    scale = celsius;
    if(scale.toLowerCase() == "c"){
        scale = prompt("Enter a number to convert Celsius to Fahrenheit:");
         let fahrenheit = (scale * 9 / 5) + 32;
         scale = parseFloat(scale);  
      alert(`${scale}°C = ${fahrenheit}°F`);
    }else if( fahrenheit = scale){
        if(fahrenheit.toLowerCase() == "f"){
              fahrenheit = prompt("Enter a number to convert Fahrenheit to Celsius:");
             celsius = (fahrenheit -32)* 5/9;
              celsius = parseFloat(celsius);
               alert(`${celsius}°F = ${fahrenheit}°C`);
            }
        }
    
}
