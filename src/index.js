const os = require('os');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const slash = require('slash');
const log = require('electron-log');
//
// require('electron-reload')(__dirname, {
//     electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
//     hardResetMethod: 'exit',
// });

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production';

const isMac = process.platform === 'darwin';

let mainWindow;
let aboutWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: isDev ? 800 : 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: isDev,
        backgroundColor: 'white',
        // IMPORTANT
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadURL(`file://${__dirname}/index.html`);
}

function createAboutWindow() {
    aboutWindow = new BrowserWindow({
        title: 'About ImageShrink',
        width: 300,
        height: 300,
        icon: './assets/icons/Icon_256x256.png',
        resizable: false,
        backgroundColor: 'white',
    });

    aboutWindow.loadURL(`file://${__dirname}/about.html`);
}

const menu = [
    ...(isMac
        ? [
              {
                  label: app.name,
                  submenu: [
                      {
                          label: 'About',
                          click: createAboutWindow,
                      },
                  ],
              },
          ]
        : []),

    {
        role: 'filemenu',
    },

    ...(!isMac
        ? [
              {
                  label: 'Help',
                  submenu: [{ label: 'About', click: createAboutWindow }],
              },
          ]
        : []),

    ...(isDev
        ? [
              {
                  label: 'Developer',
                  submenu: [
                      { role: 'reload' },
                      { role: 'forcereload' },
                      { role: 'separator' },
                      { role: 'toggledevtools' },
                  ],
              },
          ]
        : []),
];

ipcMain.on('image:minimize', (event, options) => {
    options.dest = path.join(os.homedir(), 'imageshrink');
    shrinkImage(options);
});

async function shrinkImage({ imgPath, quality, dest }) {
    try {
        const pngQuality = quality / 100;
        const files = await imagemin([slash(imgPath)], {
            destination: dest,
            plugins: [
                imageminMozjpeg({ quality }),
                imageminPngquant({
                    quality: [pngQuality, pngQuality],
                }),
            ],
        });

        log.info(files);
        shell.openPath(dest);
        mainWindow.webContents.send('image:done');
    } catch (err) {
        log.error(err);
    }
}

app.on('ready', () => {
    createMainWindow();
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    // globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload());
    // globalShortcut.register(isMac ? 'Command+Alt+I' : 'Ctrl+Shift+I', () =>
    //     mainWindow.toggleDevTools(),
    // );

    mainWindow.on('ready', () => {
        mainWindow = null;
        return mainWindow;
    });
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
