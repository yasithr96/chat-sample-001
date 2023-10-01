import * as mongoose from "mongoose";
interface CommonAttributes {
    name: string;
    email: string;
    password: string;
}
export interface DUser extends CommonAttributes {
}
export interface IUser extends CommonAttributes, mongoose.Document {
}
export {};
