import { initTRPC } from '@trpc/server';
import { Context } from './trpcContext';
import { userRouter } from './userRouter';

const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const appRouter = router({
    user: userRouter,
});

export type AppRouter = typeof appRouter;
