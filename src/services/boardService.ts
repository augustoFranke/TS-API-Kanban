import type { CreateBoardInput } from "../../types";
import { AppError } from "../errors/AppError";
import { insertBoard } from "../repository/boardRepository";
import { findUserById } from "../repository/userRepository";

export async function createBoard(data: CreateBoardInput, userId: string) {
    const existingId = await findUserById(userId);
    if (existingId === null) {
        throw new AppError("User not found", 404);
    }

    return await insertBoard(data, userId);
}