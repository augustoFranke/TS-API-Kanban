import type { CreateBoardInput } from "../../types";
import { AppError } from "../errors/AppError";
import { findUserById } from "../repository/userRepository";

export async function createBoard(data: CreateBoardInput) {
    const existingId = await findUserById(data.userId);
    if (existingId == null) {
        throw new AppError("User not found", 404);
    }
}