import { Types } from "mongoose";
import Chat from "../schemas/chat-schema";
import { DChat, IChat } from "../models/chat-model";

export namespace ChatDao {
  export async function chatExistence(
    firstId: Types.ObjectId,
    secondId: Types.ObjectId
  ) {
    const res = await Chat.findOne({ members: { $all: [firstId, secondId] } });
    return res;
  }

  export async function createTheChat(data: DChat): Promise<IChat> {
    const chat: IChat = new Chat(data);
    return await chat.save();
  }

  export async function getAllUserChats(userId: Types.ObjectId) {
    const res = await Chat.find({ members: { $in: [userId] } });
    return res;
  }
}
