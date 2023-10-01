"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const chat_dao_1 = require("../dao/chat-dao");
const mongoose_1 = require("mongoose");
var ChatController;
(function (ChatController) {
    //create chat
    async function createChat(req, res, next) {
        try {
            const { firstId, secondId } = req.body;
            //check if the chat exists
            const checkChatExistence = await chat_dao_1.ChatDao.chatExistence(firstId, secondId);
            if (checkChatExistence) {
                return res.send({
                    status: 200,
                    data: checkChatExistence,
                });
            }
            const newChat = {
                members: [firstId, secondId],
            };
            const createTheChat = await chat_dao_1.ChatDao.createTheChat(newChat);
            if (!createChat) {
                res.status(500).send({ error: "New Chat Failed to Create!" });
            }
            return res.send({
                status: 200,
                data: createTheChat,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    ChatController.createChat = createChat;
    //get user chats
    async function getUserChats(req, res, next) {
        try {
            const { userId } = req.params;
            const getUserChats = await chat_dao_1.ChatDao.getAllUserChats(new mongoose_1.Types.ObjectId(userId));
            if (!getUserChats) {
                res.status(500).send({ error: "Failed to Load User Chats!" });
            }
            return res.send({
                status: 200,
                data: getUserChats,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    ChatController.getUserChats = getUserChats;
    //find a chat
    async function findChat(req, res, next) {
        try {
            const { firstId, secondId } = req.params;
            const checkChatExistence = await chat_dao_1.ChatDao.chatExistence(new mongoose_1.Types.ObjectId(firstId), new mongoose_1.Types.ObjectId(secondId));
            if (!checkChatExistence) {
                res.status(500).send({ error: "No Chat Found!" });
            }
            return res.send({
                status: 200,
                data: checkChatExistence,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    ChatController.findChat = findChat;
    //find a chat
    async function samplereq(req, res, next) {
        try {
            res.send("this worksss");
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    ChatController.samplereq = samplereq;
})(ChatController || (exports.ChatController = ChatController = {}));
//# sourceMappingURL=chat-controller.js.map