import * as mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  members: Types.ObjectId[];
}

export interface DChat extends CommonAttributes {}

export interface IChat extends CommonAttributes, mongoose.Document {}
