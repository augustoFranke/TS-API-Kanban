import type { Request, Response } from "express";
import type { AuthenticatedReq } from "../../types";
import { boardSchema } from "../validators/boardSchemas";
import { handleError } from "../errors/handleError";
import { createBoard } from "../services/boardService"

export async function handleBoardCreation(req: Request, res: Response) {
    try {
        const authReq = req as AuthenticatedReq;
        const userId = authReq.userId;
        const data = boardSchema.parse(req.body);
        const board = await createBoard(data, userId);

        return res.status(201).json(board);

    } catch (error) {
        return handleError(error, res);
    }
}