import express from "express";
import { forgotPassword, getAllUsers, loginUser, registerUser } from "../controllers/user.js";

const router = express.Router();

router.get("/alluser", getAllUsers);

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.post("/forgot", forgotPassword);

export default router;
