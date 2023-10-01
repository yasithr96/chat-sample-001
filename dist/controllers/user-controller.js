"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_dao_1 = require("../dao/user-dao");
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var UserController;
(function (UserController) {
    const createToken = (_id, name, email) => {
        const jwtKey = process.env.JWT_SECRET_KEY;
        return jwt.sign({ _id, name, email }, jwtKey, { expiresIn: "3d" });
    };
    async function registerUser(req, res, next) {
        try {
            const { name, email, password } = req.body;
            //check if the user exist
            const checkUserExistence = await user_dao_1.UserDao.userExistence(email);
            if (checkUserExistence) {
                return res.status(404).send({ error: "User Exists Already!" });
            }
            //user data
            const userData = {
                name: name,
                email: email,
                password: password,
            };
            //password hashing
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(userData.password, salt);
            const registerUser = await user_dao_1.UserDao.registerUser(userData);
            if (!registerUser) {
                return res.status(400).send({ error: "user registration failed!" });
            }
            //generate token
            const token = createToken(registerUser._id, registerUser.name, registerUser.email);
            res.send({
                status: 200,
                data: {
                    _id: registerUser._id,
                    name: registerUser.name,
                    email: registerUser.email,
                    token: token,
                },
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    UserController.registerUser = registerUser;
    async function loginUser(req, res, next) {
        try {
            const { email, password } = req.body;
            //check if the user exist
            const checkUserExistence = await user_dao_1.UserDao.userExistence(email);
            if (checkUserExistence) {
                //check if the password matches
                const isValidPassword = await bcrypt.compare(password, checkUserExistence.password);
                if (isValidPassword) {
                    const token = createToken(checkUserExistence._id, checkUserExistence.name, checkUserExistence.email);
                    res.send({
                        status: 200,
                        data: {
                            _id: checkUserExistence._id,
                            name: checkUserExistence.name,
                            email: checkUserExistence.email,
                            token: token,
                        },
                    });
                }
                else {
                    res.status(500).send({ error: "Invalid Email or Password!" });
                }
            }
            else {
                res.status(500).send({ error: "Invalid Email or Password!" });
            }
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    UserController.loginUser = loginUser;
    async function findUser(req, res, next) {
        try {
            const { userId } = req.params;
            const findUser = await user_dao_1.UserDao.findUserById(new mongoose_1.Types.ObjectId(userId));
            if (!findUser) {
                res.status(500).send({ error: "Failed to Find The User" });
            }
            res.send({
                status: 200,
                data: findUser,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    UserController.findUser = findUser;
    async function getUsers(req, res, next) {
        try {
            const users = await user_dao_1.UserDao.findUsers();
            if (!users) {
                res.status(500).send({ error: "Failed to Find The Users" });
            }
            res.send({
                status: 200,
                data: users,
            });
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    UserController.getUsers = getUsers;
})(UserController || (exports.UserController = UserController = {}));
//# sourceMappingURL=user-controller.js.map