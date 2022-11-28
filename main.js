// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const electron = require('electron')
const menu = electron.Menu

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // hide menu bar
  menu.setApplicationMenu(null)

  // load index.html
  mainWindow.loadFile('index.html')

  // open chrome dev tools like F12
  mainWindow.webContents.openDevTools()
}

// Code under will init after createWindow
// Also call when the browser window is created
// Some APIs are not available until ready()
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit the program when all windows are closed except for macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also split it into several files and import them with require.