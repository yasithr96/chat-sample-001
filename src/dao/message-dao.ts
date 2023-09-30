import { Types } from "mongoose";
import { DMessage, IMessage } from "../models/message-model";
import Message from "../schemas/message-schema";

export namespace MessageDao {
  export async function sendMessage(data: DMessage): Promise<IMessage> {
    const message: IMessage = new Message(data);
    return await message.save();
  }

  export async function getAllMessagesOfAChat(chatId: Types.ObjectId) {
    const res = await Message.find({ chatId: chatId });
    return res;
  }
}
