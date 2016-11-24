const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

app.on('ready', _ => {
    new BrowserWindow();

    const template = [
        {
            label: "&File",
            accelerator: "Alt+f",
            submenu: [{
                label: 'About',
                click: _ => {
                    console.log('clicked');
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Alt+W',
                click: _ => {
                    app.quit();
                }
            }]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});