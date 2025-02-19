import e from 'express';
import { Prisma, PrismaClient } from 'generated/prisma';
import { DefaultArgs } from 'generated/prisma/runtime/library';

export type TDatabase = PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
export type TResponse = e.Response<any, Record<string, any>>;
