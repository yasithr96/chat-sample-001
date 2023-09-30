import * as mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  chatId: Types.ObjectId;
  senderId: Types.ObjectId;
  text: string;
}

export interface DMessage extends CommonAttributes {}

export interface IMessage extends CommonAttributes, mongoose.Document {}
