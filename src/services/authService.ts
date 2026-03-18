import type { RegisterUserInput, LoginUserInput } from "../../types";
import { createUser, findUserByEmail, findUserById } from "../repository/userRepository";
import bcrypt from "bcrypt";
import { signJwtToken } from "../utility/jwt";
import { AppError } from "../errors/AppError";

export async function registerUser(data: RegisterUserInput) {
    const existingEmail = await findUserByEmail(data.email);

    if (existingEmail !== null){
        throw new AppError("Email already in use", 409);
    }

    const hashedPassword = await bcrypt.hash(data.password,10);


    return await createUser({name : data.name, email: data.email, hashedPassword: hashedPassword});
}

export async function loginUser(data: LoginUserInput) {
    const existingEmail = await findUserByEmail(data.email);

    if (existingEmail == null){
        throw new AppError("It seems you didn't created your account", 401);
    }

    const isMatch = await bcrypt.compare(data.password, existingEmail.passwordHash);

    if (!isMatch) {
        throw new AppError("Wrong password", 401)
    }

    return await signJwtToken(existingEmail.id);
}

export async function getMe(id: string) {
    const existingId = await findUserById(id);
    if (existingId == null) {
        throw new AppError("User not found", 404);
    }

    return existingId;
}