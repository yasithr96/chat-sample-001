import mongoose from "mongoose";
import { IChat } from "../models/chat-model";
export declare const chatSchema: mongoose.Schema<IChat, mongoose.Model<IChat, any, any, any, mongoose.Document<unknown, any, IChat> & IChat & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IChat, mongoose.Document<unknown, {}, IChat> & IChat & {
    _id: mongoose.Types.ObjectId;
}>;
declare const Chat: mongoose.Model<IChat, {}, {}, {}, mongoose.Document<unknown, {}, IChat> & IChat & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default Chat;
