const serverSchema = require('../models/server.mongo')

module.exports.getServers = async (req,res) => {
   try {
      const servers = await serverSchema.find({}).exec(); 
      return res.status(200).json({
         status: "success",
         data: servers
      })
   }catch (e) {
      console.log(e)
   }
}

module.exports.addServer = async (req,res) => {
    const { name, ipAdress, password, operatingSystem, processor, installedRam, storage } = req.body
     try {
        const serverExists = await serverSchema.findOne({ipAdress}).exec()
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
        ipAdress,
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

module.exports.updateServer = async (req,res) => {
   try {
      const updates = req.body
      const updatedServer = await serverSchema.findByIdAndUpdate(req.params.id,updates)
      return res.status(200).json({
         status: "success",
         message: "server upsated"
      })
   } catch(e) {
      return res.status(401).json({
         status: "failed",
         message: e.message
      })
   }

}

module.exports.deleteServer = async (req,res) => {
   try {
      const serverToDelete = await serverSchema.findByIdAndDelete(req.params.id)
      console.log(serverToDelete)
      if (serverToDelete) {
         return res.status(200).json({
            status: "success",
            message: "server deleted"
         })
      } else {
         return res.status(200).json({
            status: "failed",
            message: "server not found"
         })
      }
      
   } catch(e) {
      return res.status(400).json({
         status: "failed",
         message: e.message
      })
   }
}