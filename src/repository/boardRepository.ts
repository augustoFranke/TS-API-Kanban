import type { CreateBoardInput } from "../../types.ts";
import { prisma } from "../../index.ts";

export async function insertBoard(data: CreateBoardInput, userId: string) {
    return await prisma.board.create({ data: {
            name: data.name,
            description: data.description,
            ownerId: userId,
            }, select: {name: true, description: true, ownerId: true, id: true, createdAt: true, updatedAt: true}});
}