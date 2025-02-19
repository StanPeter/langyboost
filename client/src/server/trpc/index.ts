import { initTRPC } from "@trpc/server";
import { userRouter } from "./userRouter";

const t = initTRPC.create();

export const appRouter = t.router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
