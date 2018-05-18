require('newrelic');

const app = require('./app');

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`App is now live at http://localhost:${PORT} !`));
