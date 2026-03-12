import type { Request, Response } from "express";
import { registerUser } from "../services/authService";

export async function register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await registerUser({name, email, password});

    res.status(201).json(user)
}