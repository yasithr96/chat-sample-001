import { ChatController } from "../controllers/chat-controller";

const express = require("express");
const router = express.Router();

router.post("/create", ChatController.createChat);

router.get("/fetch/:userId", ChatController.getUserChats);

router.get("/find/:firstId/:secondId", ChatController.findChat);

router.get("/sample", ChatController.samplereq);

module.exports = router;
