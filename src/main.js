const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { ipcMain } = require('electron');
const BrowserWindow = electron.BrowserWindow;
require('electron-reload');

let startWindow;
let dashboardWindow;

function createWindow() {
  startWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    fullscreenable: false,
    fullscreen: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }

  });

  startWindow.once('ready-to-show', () => {
    startWindow.show();
  })
  startWindow.loadURL(
    isDev ?
    'http://localhost:3000' :

    `file://${path.join(__dirname, '../build/index.html')}`
  );
  startWindow.on('closed', () => {
    startWindow = null;
  });
  ipcMain.on('request-user-info', (event, arg) => {
    createNewWindow();
    //finish loaded first to receive values
    dashboardWindow.webContents.on('did-finish-load', () => {
      dashboardWindow.webContents.send('get-user-data', arg);
    });
  });

}

function createNewWindow() {

  dashboardWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    fullscreenable: true,
    fullscreen: false,
    transparent: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //dashboardWindow.maximize();
  dashboardWindow.once('ready-to-show', () => {
    dashboardWindow.show();
  })
  dashboardWindow.loadURL(url.format({
    pathname: path.join(__dirname, './renderers/dashboard.html'),
    protocol: 'file:',
    slashes: true
  }));
  dashboardWindow.on('closed', () => {
    dashboardWindow = null;
  });

}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (startWindow === null) {
    createWindow();
  }
});