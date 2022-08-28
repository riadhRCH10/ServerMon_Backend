const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'new server'
    },
    ipAdress: {
        type: String,
        required: true
    },
    password: String,
    status:{
        type: String,
        default: 'down'
    },
    operatingSystem: String,
    processor: String,
    installedRam: String,
    storage: String,
});

module.exports = mongoose.model('Server', serverSchema)