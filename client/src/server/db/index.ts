import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

console.log(prisma, ' PRISMA');

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

console.log(globalForPrisma, ' GLOBAL FOR PRISMA');

export default prisma;
