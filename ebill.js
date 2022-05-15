//Modules
const electron = require('electron');
const { ipcRenderer } = electron;

ipcRenderer.on("gotTotal", (event, totalnoVAT, totalwithVAT) => {

    document.getElementById('bill-novat').innerHTML = ` ${totalnoVAT} €`;
    document.getElementById('bill-vat').innerHTML = ` ${totalwithVAT} €`;
    document.getElementById('result').style.display = 'table';

})