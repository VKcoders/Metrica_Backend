const { app, BrowserWindow } = require("electron");
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'Logo.ico'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  console.log(path.join(__dirname, 'Logo.ico'))

  win.loadURL("http://localhost:6969/");
}

app.whenReady().then(() => {
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
