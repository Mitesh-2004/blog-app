import express from "express";

import {getAllBlog, createBlog, updateBlog, deleteBlog, getBlogById} from "../controllers/blog.js";
const router = express.Router();

router.get("/allblog", getAllBlog);

router.post("/create-blog", createBlog);

router.put("/update-blog/:id", updateBlog);

router.delete("/delete-blog/:id", deleteBlog);

router.get('/get-blog/:id', getBlogById);

export default router;
