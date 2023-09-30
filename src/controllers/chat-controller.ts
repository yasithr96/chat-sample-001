import { NextFunction, Request, Response } from "express";
import { ChatDao } from "../dao/chat-dao";
import { DChat } from "../models/chat-model";
import { Types } from "mongoose";

export namespace ChatController {
  //create chat
  export async function createChat(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { firstId, secondId } = req.body;

      //check if the chat exists
      const checkChatExistence = await ChatDao.chatExistence(firstId, secondId);
      if (checkChatExistence) {
        return res.send({
          status: 200,
          data: checkChatExistence,
        });
      }

      const newChat: DChat = {
        members: [firstId, secondId],
      };

      const createTheChat = await ChatDao.createTheChat(newChat);
      if (!createChat) {
        res.status(500).send({ error: "New Chat Failed to Create!" });
      }

      return res.send({
        status: 200,
        data: createTheChat,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  //get user chats
  export async function getUserChats(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;

      const getUserChats = await ChatDao.getAllUserChats(
        new Types.ObjectId(userId)
      );
      if (!getUserChats) {
        res.status(500).send({ error: "Failed to Load User Chats!" });
      }

      return res.send({
        status: 200,
        data: getUserChats,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  //find a chat
  export async function findChat(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { firstId, secondId } = req.params;

      const checkChatExistence = await ChatDao.chatExistence(
        new Types.ObjectId(firstId),
        new Types.ObjectId(secondId)
      );
      if (!checkChatExistence) {
        res.status(500).send({ error: "No Chat Found!" });
      }

      return res.send({
        status: 200,
        data: checkChatExistence,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  //find a chat
  export async function samplereq(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      res.send("this worksss");
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
