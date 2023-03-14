const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, '/pages/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/home.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))