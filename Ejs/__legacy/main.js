
const ELECTRON = require('electron'); 
const BACKEND = require('./src/App');

let win;

function init() {    
    win = new ELECTRON.BrowserWindow({
        width: 1000,
        height: 600,
       // transparent:true,
       // frame: false
        //minWidth: 800
    });    
    BACKEND.App.init(ELECTRON,ELECTRON.ipcMain,win);           
    win.setMenu(null);
    win.loadFile('index.html');    
    win.webContents.openDevTools();
    win.webContents.on('will-navigate', (evt,path)=>{
       //
       //if(path.match('(.*)page01.html')){
       //    
       //}else{
       //    evt.preventDefault();
       //}
    });
    
    win.on('closed', () => {
        win = null;
    });
}
ELECTRON.app.on('ready', init);
ELECTRON.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        ELECTRON.app.quit();
    }
});
ELECTRON.app.on('activate', () => {
    if (win === null) {
        init();
    }
});