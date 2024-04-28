import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import { connectToDb } from "./config/db.js";
import userRoutes from "./routes/user.js";

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGOURI;
const app = express();

app.use(cors());
app.use(express.json());

connectToDb(uri);

app.use('/api/v1', userRoutes);


app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
