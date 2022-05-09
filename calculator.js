const electron = require('electron');
const { ipcRenderer } = electron
// BTC EUR Section

// Function that will fetch the current BTC price from an API, display it to screen and compare to target price

// Run getBTC function and set interval to update price every 10 seconds


// Clicking on the button will trigger the ipcRenderer to send a message to ipcMain to open new window
document.getElementById('submit').addEventListener('click', event => {
    ipcRenderer.send('submit');
});
const loanForm = document.getElementById('calculate-loan-form')
loanForm.addEventListener('submit', function (e) {
    e.preventDefault()
    start_loader();
    const principalAmount = document.getElementById('loan-amount').value;
    const interest = document.getElementById('loan-interest').value;
    var i = 0.20 
    var t= 0.04,
    total = 0,
    total = (parseFloat(principalAmount) * i) +(parseFloat(interest)*t);
  
    setTimeout(() => {
        document.getElementById('principal').textContent = parseFloat(total)+'€';

        document.getElementById('result').style.display = 'table';
        document.getElementById('reset-btn').style.display = 'block';
        end_loader()
    }, 500)

})

// Receives targetPrice and updates the index.html file
ipcRenderer.on('submit', (event, arg) => {
   
    principal = '€' + total;
})