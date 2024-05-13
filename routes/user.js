import express from "express";
import { getAllUsers, loginUser, registerUser, sendOtp } from "../controllers/user.js";

const router = express.Router();

router.get("/alluser", getAllUsers);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/forgot", sendOtp);

export default router;
