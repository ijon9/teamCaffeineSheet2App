const express = require("express")
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '/pages/index2.html'))
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.post('/home', (req, res) => {  
    res.sendFile(path.join(__dirname, '/pages/home.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))