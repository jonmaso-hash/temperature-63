function celsiusToFahrenheit(){
   let celsius = prompt("Enter a temperature to convert Celsius to Fahrenheit: ");
    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 9 / 5) + 32;
  let userTemp= alert(`${celsius}°C = ${fahrenheit}°F`);

 userTemp = document.getElementById("outPut")
 userTemp.innerHTML = `${celsius}°C = ${fahrenheit}°F`
}

function fahrenheitToCelsius(){
     fahrenheit = prompt("Enter a temperature to convert Fahrenheit to Celsius:");
             celsius = (fahrenheit -32)* 5/9;
              celsius = parseFloat(celsius);
         let userTemp2 =  alert(`${celsius}°F = ${fahrenheit}°C`);

userTemp2 = document.getElementById("outPut2")
userTemp2.innerHTML = `${fahrenheit}°C = ${celsius}°F`
}

function generateTable(){
for(let celsius = 0; celsius <= 100; celsius+=10){
    let farenheit = (celsius* (9/5)) +32;
   
    document.getElementById("temps").innerHTML+=`
    <tr>
        <td> ${celsius}°C </td>
        <td> ${farenheit}°F </td>
    </tr> `;
}
}
generateTable();

function fillThermo(){
    for(let i=0; i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level")
        console.log(level);

        if(i<3){
            level.style.backgroundcolor = "red";
        }else if(i <7){
            level.style.backgroundColor = "orange";
        }
        document.getElementById("thermo").appendChild(level);
    }
}



