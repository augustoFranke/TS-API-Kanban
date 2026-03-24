import type { Request } from "express";

export type CreateUserInput = {
    name: string;
    email: string;
    hashedPassword: string;
};

export type RegisterUserInput = {
    name: string;
    email: string;
    password: string;
}

export type LoginUserInput = {
    email: string;
    password: string    
}

export type CreateBoardInput = {
    name: string;
    description?: string;
}

export interface AuthenticatedReq extends Request {
    userId: string;
}