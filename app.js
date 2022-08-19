const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', function (req, res) {
    res.send('Hello World isi ariana')
})

app.listen(process.env.PORT,() => {
        console.log("app is listening on port " + process.env.PORT)
    } 
)