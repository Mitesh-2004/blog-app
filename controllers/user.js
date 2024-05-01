import { User } from "../models/user.js";
import bcrypt from "bcrypt";
export const getAllUsers = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(511).json({ message: "All Fields manadatory" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(511).json({ message: "User already registered " });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      return res
        .status(201)
        .json({ message: "new User added", newUser: { username, email } });
    }
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields mandatory" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "User is not registered" });
    }

    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
      return res.status(511).json({ message: "Incorrect Password" });
    }
    return res.status(200).json({ message: "User logged in", user: { email } });
  } catch (error) {
    console.error(error);
  }
};
