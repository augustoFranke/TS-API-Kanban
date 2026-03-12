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