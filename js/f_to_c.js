"use strict";
window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertBtnClicked;

}

function onConvertBtnClicked() {
    const tempFahrenheitField = document.getElementById("tempFahrenheit");
    let tempFahrenheit = Number(tempFahrenheitField.value);

    let tempChange = (tempFahrenheit - 32) * 5/9;
    
    const convertedTempField = document.getElementById("convertedTemp");
    convertedTempField.value = parseInt(tempChange);
    
}
// if (tempFahrenheitField == false) {
//     convertedTempField = "unknown";
// }