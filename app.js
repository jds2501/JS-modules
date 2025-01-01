

async function loadConfig() {
    const currentHour = (new Date()).getHours();
    const theme = await import('./theme.mjs');

    if (currentHour < 18) {
        theme.setLightTheme();
    } else {
        theme.setDarkTheme();
    }
}

loadConfig();