import { z } from "zod";

export const boardSchema = z.object({
    name: z.string()
        .min(3, "Board name must be at least 3 characters")
        .max(80, "Board name cannot exceed 80 characters"),
    description: z.string()
        .max(300, "Board description cannot exceed 300 characters")
        .optional()
})