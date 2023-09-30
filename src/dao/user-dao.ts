import { Types } from "mongoose";
import { DUser, IUser } from "../models/user-model";
import User from "../schemas/user-schema";

export namespace UserDao {
  export async function userExistence(email: string) {
    const res = await User.findOne({ email: email });
    return res;
  }

  export async function registerUser(data: DUser): Promise<IUser> {
    const regUser: IUser = new User(data);
    return await regUser.save();
  }

  export async function findUserById(userId: Types.ObjectId) {
    const res = await User.findOne({ _id: userId });
    return res;
  }

  export async function findUsers() {
    const res = await User.find();
    return res;
  }
}
