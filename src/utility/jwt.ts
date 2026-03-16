import { SignJWT } from 'jose';
import "dotenv/config";

export async function signJwtToken(userId: string) {
    return new SignJWT({sub: userId})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET!))
}