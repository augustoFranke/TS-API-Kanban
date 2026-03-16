import type { RegisterUserInput, LoginUserInput } from "../../types";
import { createUser, findUserByEmail } from "../repository/userRepository";
import bcrypt from "bcrypt";
import { signJwtToken } from "../utility/jwt";

export async function registerUser(data: RegisterUserInput) {
    const existingEmail = await findUserByEmail(data.email);

    if (existingEmail !== null){
        throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(data.password,10);


    return await createUser({name : data.name, email: data.email, hashedPassword: hashedPassword});
}

export async function loginUser(data: LoginUserInput) {
    const existingEmail = await findUserByEmail(data.email);

    if (existingEmail == null){
        throw new Error("It seems you didn't created your account");
    }

    const isMatch = await bcrypt.compare(data.password, existingEmail.passwordHash);

    if (!isMatch) {
        throw new Error("Wrong password")
    }

    return await signJwtToken(existingEmail.id);
}