import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();

export default prisma;
// use `prisma` in your application to read and write data in your DB
