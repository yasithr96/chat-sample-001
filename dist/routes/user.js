"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_controller_1 = require("../controllers/user-controller");
const router = express.Router();
router.post("/register", user_controller_1.UserController.registerUser);
router.post("/login", user_controller_1.UserController.loginUser);
router.get("/find/:userId", user_controller_1.UserController.findUser);
router.get("/fetch-users", user_controller_1.UserController.getUsers);
module.exports = router;
//# sourceMappingURL=user.js.map