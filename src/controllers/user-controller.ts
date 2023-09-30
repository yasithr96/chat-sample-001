import { NextFunction, Request, Response } from "express";
import { UserDao } from "../dao/user-dao";
import { DUser } from "../models/user-model";
import { Types } from "mongoose";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export namespace UserController {
  const createToken = (_id: Types.ObjectId, name: string, email: string) => {
    const jwtKey = process.env.JWT_SECRET_KEY;

    return jwt.sign({ _id, name, email }, jwtKey, { expiresIn: "3d" });
  };

  export async function registerUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, email, password } = req.body;

      //check if the user exist
      const checkUserExistence = await UserDao.userExistence(email);
      if (checkUserExistence) {
        return res.status(404).send({ error: "User Exists Already!" });
      }

      //user data
      const userData: DUser = {
        name: name,
        email: email,
        password: password,
      };

      //password hashing
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);

      const registerUser = await UserDao.registerUser(userData);

      if (!registerUser) {
        return res.status(400).send({ error: "user registration failed!" });
      }

      //generate token
      const token = createToken(
        registerUser._id,
        registerUser.name,
        registerUser.email
      );

      res.send({
        status: 200,
        data: {
          _id: registerUser._id,
          name: registerUser.name,
          email: registerUser.email,
          token: token,
        },
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  export async function loginUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password } = req.body;

      //check if the user exist
      const checkUserExistence = await UserDao.userExistence(email);
      if (checkUserExistence) {
        //check if the password matches
        const isValidPassword = await bcrypt.compare(
          password,
          checkUserExistence.password
        );

        if (isValidPassword) {
          const token = createToken(
            checkUserExistence._id,
            checkUserExistence.name,
            checkUserExistence.email
          );

          res.send({
            status: 200,
            data: {
              _id: checkUserExistence._id,
              name: checkUserExistence.name,
              email: checkUserExistence.email,
              token: token,
            },
          });
        } else {
          res.status(500).send({ error: "Invalid Email or Password!" });
        }
      } else {
        res.status(500).send({ error: "Invalid Email or Password!" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  export async function findUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;

      const findUser = await UserDao.findUserById(new Types.ObjectId(userId));
      if (!findUser) {
        res.status(500).send({ error: "Failed to Find The User" });
      }

      res.send({
        status: 200,
        data: findUser,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  export async function getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await UserDao.findUsers();
      if (!users) {
        res.status(500).send({ error: "Failed to Find The Users" });
      }

      res.send({
        status: 200,
        data: users,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
