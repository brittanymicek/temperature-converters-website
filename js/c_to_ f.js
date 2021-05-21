"use strict";
window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertBtnClicked;

}

function onConvertBtnClicked() {
    const tempCelsiusField = document.getElementById("tempCelsius");
    let tempCelsius = Number(tempCelsiusField.value);

    let tempChange = (tempCelsius * 9/5) + 32;
    
    const convertedTempField = document.getElementById("convertedTemp");
    convertedTempField.value = parseInt(tempChange);
    
}