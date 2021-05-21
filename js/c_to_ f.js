"use strict";
window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertBtnClicked;

}

function onConvertBtnClicked() {
    // user input
    const tempCelsiusField = document.getElementById("tempCelsius");
    let tempCelsius = Number(tempCelsiusField.value);

     // calculate temperature formula
    let tempChange = (tempCelsius * 9/5) + 32;
    
    // output
    const convertedTempField = document.getElementById("convertedTemp");
    convertedTempField.value = parseInt(tempChange);
    
}
// statement to stop auto-generation of value when input field is null
// if (tempFahrenheitField == null || "") {
//     convertedTempField == null;
// }