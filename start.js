const pm2 = require('pm2');

// Starte die pm2-Instanz und lade die Konfiguration
pm2.connect(function(err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    // Startet alle Anwendungen, die in ecosystem.config.js definiert sind
    pm2.start('ecosystem.config.js', (err, apps) => {
        pm2.disconnect();   // Trennt die pm2-Instanz
        if (err) throw err;
    });
});
