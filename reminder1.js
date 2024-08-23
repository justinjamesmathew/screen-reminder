const { exec } = require('child_process');

function showReminder() {
    const script = `
        osascript -e 'display dialog "Stare away from the screen and Blink for a few seconds." buttons {"OK"} default button "OK"'
    `;
    exec(script, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log('Reminder acknowledged');
    });
}

// Set the interval to remind every 20 minutes (20 * 60 * 1000 ms)
setInterval(showReminder, 20 * 60 * 1000);

// Initial reminder when the app starts
showReminder();
