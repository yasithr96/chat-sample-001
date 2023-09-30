import mongoose, { Schema } from "mongoose";
import { IUser } from "../models/user-model";

export const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      minlength: 3,
      maxlength: 60,
    },
  },
  {
    _id: true,
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret, opt) {
    delete ret["password"];
    return ret;
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
