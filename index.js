const { app, BrowserWindow } = require('electron')
const path = require('path')


function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true,
    title: "Pysual",
    icon: "./img/ico.png",
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        titleBarStyle: "hidden", // add this line

    }
  })
  mainWindow.loadFile('./src/index.html')
  mainWindow.maximize()
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0)
    {
       createWindow() 
    } 
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
