import type { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import "dotenv/config";
import { handleError } from "../errors/handleError";

export async function tokenVerification(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization === undefined) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const token = req.headers.authorization.split(' ')[1]!;

        const result = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));

        req.userId = result.payload.sub;

        next();
    } catch (error) {
        return handleError(error, res);
    }
}