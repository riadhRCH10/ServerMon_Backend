const router = require('express').Router();
const serversController = require('../controllers/servers.controller');

router.get('/', serversController.getServers)
router.post('/', serversController.addServer)
router.patch('/:id', serversController.updateServer)

router.delete('/:id', serversController.deleteServer)

module.exports = router
