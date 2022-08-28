const router = require('express').Router();
const serversController = require('../controllers/servers.controller');

router.get('/', serversController.getServers)
router.post('/', serversController.addServer)

router.delete('/', (req,res) => {
    res.send('deleting server')
})

module.exports = router
