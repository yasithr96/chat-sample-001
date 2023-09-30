import { NextFunction, Request, Response } from "express";
import { DMessage } from "../models/message-model";
import { MessageDao } from "../dao/message-dao";
import { Types } from "mongoose";

export namespace MessageController {
  //create message
  export async function createMessage(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { chatId, senderId, text } = req.body;

      const messageData: DMessage = {
        chatId: chatId,
        senderId: senderId,
        text: text,
      };

      const sendMessage = await MessageDao.sendMessage(messageData);
      if (!sendMessage) {
        res.status(500).send({ error: "Message Sending Failed!" });
      }

      return res.send({
        status: 200,
        data: sendMessage,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  //get message
  export async function getMessagesOfAChat(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { chatId } = req.params;

      const getMessages = await MessageDao.getAllMessagesOfAChat(
        new Types.ObjectId(chatId)
      );
      if (!getMessages) {
        res.status(500).send({ error: "Failed to Load chat messages!" });
      }
      return res.send({
        status: 200,
        data: getMessages,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
