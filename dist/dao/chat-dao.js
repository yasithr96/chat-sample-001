"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDao = void 0;
const chat_schema_1 = __importDefault(require("../schemas/chat-schema"));
var ChatDao;
(function (ChatDao) {
    async function chatExistence(firstId, secondId) {
        const res = await chat_schema_1.default.findOne({ members: { $all: [firstId, secondId] } });
        return res;
    }
    ChatDao.chatExistence = chatExistence;
    async function createTheChat(data) {
        const chat = new chat_schema_1.default(data);
        return await chat.save();
    }
    ChatDao.createTheChat = createTheChat;
    async function getAllUserChats(userId) {
        const res = await chat_schema_1.default.find({ members: { $in: [userId] } });
        return res;
    }
    ChatDao.getAllUserChats = getAllUserChats;
})(ChatDao || (exports.ChatDao = ChatDao = {}));
//# sourceMappingURL=chat-dao.js.map