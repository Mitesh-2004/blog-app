import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    blogs:[{
      type:mongoose.Types.ObjectId,
      ref:"Blog",
    }]
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);
