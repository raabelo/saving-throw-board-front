import { app, ipcMain, BrowserWindow } from "electron";
import path from "path";
import url from "url";
import isDev from "electron-is-dev";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1360, //800
        height: 768, //600
        frame: false,
        titleBarStyle: "hidden",
        show: true,
        resizable: true,
        fullscreenable: true,
        movable: true,
        darkTheme: true,
        closable: true,
        webPreferences: {
            // nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, "preload.cjs"),
        },
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:5173" // Porta padrão do Vite
            : `file://${path.join(__dirname, "../dist/index.html")}` // Corrigido o caminho
    );

    if (isDev) {
        mainWindow.webContents.openDevTools(); // Abre DevTools no desenvolvimento
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    // eslint-disable-next-line no-undef
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on("minimize", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.minimize();
});

ipcMain.on("maximize", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window.isMaximized()) {
        window.unmaximize();
    } else {
        window.maximize();
    }
});

ipcMain.on("close", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.close();
});
