import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectToDb } from "./config/db.js";
import userRoutes from "./routes/user.js";
import blogRoutes from "./routes/blog.js";

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGOURI;
const app = express();

app.use(cors());
app.use(express.json());

connectToDb(uri);

//handle all user related
app.use("/api/v1/user", userRoutes);

//handle all the blog releted requests
app.use("/api/v1/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
