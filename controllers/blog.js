import mongoose from "mongoose";
import { Blog } from "../models/blog.js";
import { User } from "../models/user.js";

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ message: "No Blogs Available" });
    }
    return res
      .status(201)
      .json({ message: "Blogs fetched successfully", count: blogs.length });
  } catch (error) {
    console.error(error);
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;

    if (!title || !description || !image || !user) {
      return res.status(511).json({ message: "Fill All the fields" });
    }
    const exisitingUser = await User.find({user});
    if(!exisitingUser){
      return res.status(401).json({message:"User not registered! Create a new  account"})
    }
    const newBlog = await new Blog(title, description, image, user);
    const session = await mongoose.startSession()
    session.startTransaction()
    await newBlog.save();
    return res.status(201).json({ message: "New blog Added" });
  } catch (error) {
    console.error(error);
  }
};

export const updateBlog = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export const getBlogById = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
