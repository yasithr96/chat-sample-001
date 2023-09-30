const express = require("express");
import { UserController } from "../controllers/user-controller";
const router = express.Router();

router.post("/register", UserController.registerUser);

router.post("/login", UserController.loginUser);

router.get("/find/:userId", UserController.findUser);

router.get("/fetch-users", UserController.getUsers);

module.exports = router;
