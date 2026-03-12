import type { RegisterUserInput } from "../../types.ts";
import { createUserService, findUserByEmailService } from "../repository/userRepository";
import bcrypt from "bcrypt";

export async function registerUserService(data: RegisterUserInput) {
    const existingEmail = await findUserByEmailService(data.email);

    if (existingEmail !== null){
        throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(data.password,10);


    return await createUserService({name : data.name, email: data.email, hashedPassword: hashedPassword});
}