"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDao = void 0;
const message_schema_1 = __importDefault(require("../schemas/message-schema"));
var MessageDao;
(function (MessageDao) {
    async function sendMessage(data) {
        const message = new message_schema_1.default(data);
        return await message.save();
    }
    MessageDao.sendMessage = sendMessage;
    async function getAllMessagesOfAChat(chatId) {
        const res = await message_schema_1.default.find({ chatId: chatId });
        return res;
    }
    MessageDao.getAllMessagesOfAChat = getAllMessagesOfAChat;
})(MessageDao || (exports.MessageDao = MessageDao = {}));
//# sourceMappingURL=message-dao.js.map