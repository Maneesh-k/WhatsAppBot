const express = require('express');
const sendMessage = require("../app/message/message_Controller")
const router = express.Router({ mergeParams: true });

router.get("/sendmessage",sendMessage.sendMessage)
module.exports = router;
