"use strict";
window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertBtnClicked;

}

function onConvertBtnClicked() {
    // user input
    const tempFahrenheitField = document.getElementById("tempFahrenheit");
    let tempFahrenheit = Number(tempFahrenheitField.value);

    // calculate temperature formula
    let tempChange = (tempFahrenheit - 32) * 5/9;
    
    // output
    const convertedTempField = document.getElementById("convertedTemp");
    convertedTempField.value = parseInt(tempChange);
    
}
// statement to stop auto-generation of value when input field is null
// if (tempFahrenheitField == null || "") {
//     convertedTempField == null;
// }
