const textbox = document.getElementById("textbox");
const toFarhenheit = document.getElementById("toFarhenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    
    if (toFarhenheit.checked) {
    
    } else if (toCelsius.checked) {
    
    } else {
        result.textContent = "Select a unit";
    }

}