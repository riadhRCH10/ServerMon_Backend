const express = require('express')
const mongoose = require('mongoose');
const app = express()

require('dotenv').config()
app.use(express.json());

const serversRouting = require('./routes/servers.routing')
app.use("/servers",serversRouting)

const uri = 'mongodb+srv://SeverMonApi:'+process.env.MongoPass+'@servermoncluster.p2ilrgj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', (err,res) => {
    console.log('mongoose is connected');
})
mongoose.connection.on('error',(err) => {
    console.log(err);
})
app.listen(process.env.PORT,() => {
        console.log("app is listening on port " + process.env.PORT)
    } 
)