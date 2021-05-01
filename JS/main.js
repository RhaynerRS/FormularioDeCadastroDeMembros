const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1296,
    height: 729,
    minHeight:576,minWidth:1024, titleBarStyle: "hidden",
    icon: __dirname + 'icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // 2. Enable Node.js integration
      nodeIntegration: true
      
    }
  })
  win.setAspectRatio(16/9)
  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
} 

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
