import type { CreateUserInput } from "../../types.ts";
import { prisma } from "../../index.ts";

export async function findUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
}

export async function createUser(data: CreateUserInput) {
    return await prisma.user.create({ data: { 
        name: data.name,
        email: data.email,
        passwordHash: data.hashedPassword
     }, select: {id: true, name: true, email: true, createdAt: true, updatedAt: true}});
}

export async function findUserById(id: string) {
    return await prisma.user.findUnique({ where: { 
        id
    }, select: {id: true, name: true, email: true, createdAt: true}});
}