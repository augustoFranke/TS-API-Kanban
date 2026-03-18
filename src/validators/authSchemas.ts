import { z } from "zod";
import { password } from "bun";

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})