import type { Request, Response } from "express";
import { getMe, loginUser, registerUser } from "../services/authService";
import { registerSchema, loginSchema } from "../validators/authSchemas";
import { handleError } from "../errors/handleError";

export async function register(req: Request, res: Response) {
    try {
        const data = registerSchema.parse(req.body)

        const user = await registerUser(data);

        return res.status(201).json(user);
    }
    catch (error) {
        return handleError(error, res);
    }
}

export async function login(req: Request, res: Response) {
    try {
        const data = loginSchema.parse(req.body);
        const token = await loginUser(data);
        return res.status(200).json({ token: token });
    } catch (error) {
        return handleError(error, res);
    }

}

export async function meController(req: Request, res: Response) {
    try {
        const userId = req.userId;

        const findUser = await getMe(userId!);

        return res.status(200).json(findUser);
    } catch (error) {
        return handleError(error, res);
    }
}    