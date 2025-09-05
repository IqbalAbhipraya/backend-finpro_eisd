// import express
const express = require('express');

// buat instance aplikasi express
const app = express();

// port antara dari env atau 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// jalanin server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});