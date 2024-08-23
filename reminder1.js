const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
        alwaysOnTop: true,
        frame: false,
    });

    mainWindow.loadURL('data:text/html;charset=utf-8,' + encodeURI(`
        <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; flex-direction: column; }
            img { width: 100px; margin-bottom: 20px; }
            button { padding: 10px 20px; font-size: 16px; }
        </style>
        <body>
            <div>
                <img src="file://${path.join(__dirname, 'image.png')}" alt="Reminder Image" />
                <h1>Take a Break!</h1>
                <p>Stare away from the screen for a few seconds.</p>
                <button onclick="closeWindow()">Okay</button>
            </div>
            <script>
                function closeWindow() {
                    window.close();
                }
            </script>
        </body>
    `));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
