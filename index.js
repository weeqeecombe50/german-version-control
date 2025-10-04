const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Willkommen zu German Version Control!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});