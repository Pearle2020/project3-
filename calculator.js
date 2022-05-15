//Modules
const electron = require('electron');
const { ipcRenderer } = electron

const ebillCalcForm = document.getElementById('calculate-ebill-form')
// BTC EUR Section

// Function that will fetch the current BTC price from an API, display it to screen and compare to target price

// Run getBTC function and set interval to update price every 10 seconds


// Clicking on the button will trigger the ipcRenderer to send a message to ipcMain to open new window

ebillCalcForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const nUnints = document.getElementById('number-of-units').value;
    const billingPeriod = document.getElementById('billing-period').value;
    let i = 0.20; //20 cents per unit
    let t = 0.04; //standing charge, 4 cents per day
    let vat = 13.5;
    let totalnoVAT = 0;
    let totalwithVAT = 0;
    totalnoVAT = (parseFloat(nUnints) * i) + (parseFloat(billingPeriod) * t);
    // rounds the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.
    totalnoVAT = Math.round(totalnoVAT * 100) / 100; // example: 1.23456  * 100 -> 123.456 (math.round) -> 123 /100 -> 1.23 
    console.log(totalnoVAT);
    // and here we are doing it again
    totalwithVAT = (totalnoVAT + (totalnoVAT * vat / 100));
    totalwithVAT = Math.round(totalwithVAT * 100) / 100;
    console.log(totalwithVAT);
    ipcRenderer.send('submit', totalnoVAT, totalwithVAT);

})
