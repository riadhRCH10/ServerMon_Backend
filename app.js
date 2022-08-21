const express = require('express')
const app = express()
const router = require('./routes/serverRoutes')

require('dotenv').config()

app.use("/servers",router)

app.listen(process.env.PORT,() => {
        console.log("app is listening on port " + process.env.PORT)
    } 
)