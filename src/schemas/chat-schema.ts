import mongoose, { Schema } from "mongoose";
import { IChat } from "../models/chat-model";
import User from "./user-schema";

export const chatSchema = new mongoose.Schema<IChat>(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: User.modelName,
      },
    ],
  },
  {
    _id: true,
    timestamps: true,
  }
);

const Chat = mongoose.model<IChat>("Chat", chatSchema);
export default Chat;
