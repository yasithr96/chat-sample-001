"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("../controllers/message-controller");
const express = require("express");
const router = express.Router();
router.post("/create", message_controller_1.MessageController.createMessage);
router.get("/find/:chatId", message_controller_1.MessageController.getMessagesOfAChat);
module.exports = router;
//# sourceMappingURL=message.js.map