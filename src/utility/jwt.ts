import { SignJWT, jwtVerify } from 'jose';

export async function signJwtToken(userId: string) {
    new SignJWT({sub: userId});
}