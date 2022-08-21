const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('server list')
})

router.post('/', (req, res) => {
    res.send('adding new server')
})

//router.update('/:id', (req, res) => {
//    res.send('adding new server')
//})

router.delete('/', (req,res) => {
    res.send('deleting server')
})

module.exports = router
