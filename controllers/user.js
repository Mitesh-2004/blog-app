import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, "-password"); // Excluding the password field
    if (allUsers.length === 0) {
      return res.status(404).json({ message: "No Users Registered" });
    }
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
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

export const sendOtp = async (req, res) => {
  const { to } = req.body;
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.mail,
      pass: process.env.mailPass,
    },
  });

  let otp = Math.ceil(Math.random() * 10000);
  // Email options
  const mailOptions = {
    from: "belogical0@gmail.com",
    to: to,
    subject: "Test Email Blog App",
    text: `Your Otp to reset password is ${otp}`,
  };
  console.log(otp);
  // Send email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error occurred:", error);
      res.status(511).json({ message: "Email failed" });
    } else {
      console.log("Email sent:", info.response);
      res.status(201).json({ message: "Email Sent Succesfully" });
    }
  });
};
