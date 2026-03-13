import type { Request, Response } from "express";
import { loginUser, registerUser } from "../services/authService";

export async function register(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        const user = await registerUser({ name, email, password });

        return res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(409).json({ message: error.message });
        };
    }
}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const token = await loginUser({email, password});
        console.log(token);
        return res.status(200).json({ token: token });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(401).json({ message: error.message });
        }
    }
}