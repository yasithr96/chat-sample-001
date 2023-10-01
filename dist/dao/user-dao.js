"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDao = void 0;
const user_schema_1 = __importDefault(require("../schemas/user-schema"));
var UserDao;
(function (UserDao) {
    async function userExistence(email) {
        const res = await user_schema_1.default.findOne({ email: email });
        return res;
    }
    UserDao.userExistence = userExistence;
    async function registerUser(data) {
        const regUser = new user_schema_1.default(data);
        return await regUser.save();
    }
    UserDao.registerUser = registerUser;
    async function findUserById(userId) {
        const res = await user_schema_1.default.findOne({ _id: userId });
        return res;
    }
    UserDao.findUserById = findUserById;
    async function findUsers() {
        const res = await user_schema_1.default.find();
        return res;
    }
    UserDao.findUsers = findUsers;
})(UserDao || (exports.UserDao = UserDao = {}));
//# sourceMappingURL=user-dao.js.map