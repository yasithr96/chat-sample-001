"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const message_dao_1 = require("../dao/message-dao");
const mongoose_1 = require("mongoose");
var MessageController;
(function (MessageController) {
    //create message
    async function createMessage(req, res, next) {
        try {
            const { chatId, senderId, text } = req.body;
            const messageData = {
                chatId: chatId,
                senderId: senderId,
                text: text,
            };
            const sendMessage = await message_dao_1.MessageDao.sendMessage(messageData);
            if (!sendMessage) {
                res.status(500).send({ error: "Message Sending Failed!" });
            }
            return res.send({
                status: 200,
                data: sendMessage,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    MessageController.createMessage = createMessage;
    //get message
    async function getMessagesOfAChat(req, res, next) {
        try {
            const { chatId } = req.params;
            const getMessages = await message_dao_1.MessageDao.getAllMessagesOfAChat(new mongoose_1.Types.ObjectId(chatId));
            if (!getMessages) {
                res.status(500).send({ error: "Failed to Load chat messages!" });
            }
            return res.send({
                status: 200,
                data: getMessages,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    MessageController.getMessagesOfAChat = getMessagesOfAChat;
})(MessageController || (exports.MessageController = MessageController = {}));
//# sourceMappingURL=message-controller.js.map