"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chat_controller_1 = require("../controllers/chat-controller");
const express = require("express");
const router = express.Router();
router.post("/create", chat_controller_1.ChatController.createChat);
router.get("/fetch/:userId", chat_controller_1.ChatController.getUserChats);
router.get("/find/:firstId/:secondId", chat_controller_1.ChatController.findChat);
router.get("/sample", chat_controller_1.ChatController.samplereq);
module.exports = router;
//# sourceMappingURL=chat.js.map