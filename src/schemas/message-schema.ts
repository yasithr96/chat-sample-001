import mongoose, { Schema } from "mongoose";
import { IMessage } from "../models/message-model";

export const messageSchema = new mongoose.Schema<IMessage>(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    text: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    _id: true,
    timestamps: true,
  }
);

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;
