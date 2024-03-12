// eslint-disable-next-line no-undef
const { app, BrowserWindow } = require('electron');
// eslint-disable-next-line no-undef
const fs = require('fs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 600,
  });

  win.loadFile('index.html').then(() => {
    if (!fs.existsSync('./dist/bundle.js')) {
      var interval = setInterval(() => {
        if (fs.existsSync('./dist/bundle.js')) {
          win.webContents.reload();
          clearInterval(interval);
        }
      }, 1000);
    }
  });
};

app.whenReady().then(() => {
  createWindow();
});
