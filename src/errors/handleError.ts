import type { Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";

export function handleError(error: unknown, res: Response) {
    if (error instanceof ZodError) {
        return res.status(400).json(error.issues);
    }
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    else {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}