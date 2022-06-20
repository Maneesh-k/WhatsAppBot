const bussinessLogic = require("./message_bussinessLogic")

exports.sendMessage = (req, res)=>{
  bussinessLogic.sendMessage(req,res)
}
