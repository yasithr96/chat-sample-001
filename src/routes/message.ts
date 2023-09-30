import { MessageController } from "../controllers/message-controller";

const express = require("express");
const router = express.Router();

router.post("/create", MessageController.createMessage);

router.get("/find/:chatId", MessageController.getMessagesOfAChat);

module.exports = router;
