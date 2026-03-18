import express from "express";
import { register, login, meController } from "../controllers/authController"
import { tokenVerification } from "../middleware/auth";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/me", tokenVerification, meController);

export default router;