const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('node:path');

if (require('electron-squirrel-startup')) {
    app.quit();
}

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 420,
        height: 560,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}



app.whenReady().then(() => {

    // app.setAppUserModelId(process.execPath);

    


    ipcMain.on('timer:complete', (event) => {
        console.log('Received timer completion request.');

        if (event.sender.id !== mainWindow?.webContents.id) {
            console.log('Notification rejected: unexpected sender.');
            return;
        }

        if (!Notification.isSupported()) {
            console.error('Notifications are not supported.');
            return;
        }

        new Notification({
            title: 'Focus session complete',
            body: 'Time for a short break.',
        }).show();

        console.log('Notification displayed.');
    });


    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});