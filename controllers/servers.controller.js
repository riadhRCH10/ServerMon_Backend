const serverSchema = require('../models/server.mongo')

module.exports.getServers = async (req,res) => {
    res.send("getting servers")
}

module.exports.addServer = async (req,res) => {
    const { name, ip, password, operatingSystem, processor, installedRam, storage } = req.body
    if (!ip) {  return res.status(400).json({
            status: "failed",
            message: "ip adress is required"
        })
     }

     try {
        const serverExists = await serverSchema.findOne({ipAdress : ip}).exec()
        if (serverExists) {
            return res.status(409).json({
                status: "failed",
                message: "server already exists"
            })
         }
     } catch (e) {
        console.log("err while finding ${e}" + e)
     }
    
     const serverToAdd = new serverSchema({
        name,
        ipAdress: ip,
        installedRam,
        operatingSystem,
        password,
        processor,
        storage
     })

     await serverToAdd.save()
     return res.status(200).json({
        status: "success",
        message: "server added"
     })
}