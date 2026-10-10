const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('timerAPI', {
    notifyComplete: () => ipcRenderer.send('timer:complete'),
});