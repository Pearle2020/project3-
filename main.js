const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require('electron');

// The shell module allows us to manage files and URLs
const shell = require('electron').shell;

// Creating browser window
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 850,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });
    // And load index.html file
    mainWindow.loadFile('index.html');

    // Open development tools to help troubleshoot code
   // mainWindow.webContents.openDevTools();

    // Creating the app's menu
    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'My Bills',
                    click() {
                        
                    }
                },
                {
                    label: 'GitHub Repository',
                    click() {
                        shell.openExternal('')
                    }
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                },
            ]
        },
    ]);
    Menu.setApplicationMenu(menu);

}

// Exiting app when closing the window
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

// This method will be called when Electron has finished initilization and is ready to open
// the browser window.
app.whenReady().then(() => {
    createWindow();
})

// Creating new window
let calculator;

ipcMain.on('submit', (event, totalnoVAT, totalwithVAT) => {

    calculator = new BrowserWindow({
        width: 490, //500
        height: 300, //200
        frame: true, //removes top toolbar
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
         //   enableRemoteModule: true
        }
    }); calculator.setMenu(null);
    // Loading add.html file into new window
    calculator.loadFile('ebill.html');

    calculator.webContents.send('gotTotal', totalnoVAT, totalwithVAT);

    // calculator.webContents.openDevTools();
    // //addWindowEUR.webContents.openDevTools();

    calculator.on('closed', () => (calculator = null));
});

// // Closing window event
// ipcMain.on('close-window', event => {

//     //close the window object
//     calculator.close();

// })
