import { Blog } from "../models/blog.js";

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
