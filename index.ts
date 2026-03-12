import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import "dotenv/config";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });

const app = express()
const port = process.env.PORT!

async function start() {
    try {
        await prisma.$connect();
        console.log("Prisma connected successfully");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    app.listen(port, () => {
        console.log(`Successfully started express. Listening at port:${port}`);
    })
}

start();