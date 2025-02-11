import { initTRPC } from "@trpc/server";
import { User } from "models/User";

const t = initTRPC.create();

export const appRouter = t.router({
  getAllUsers: t.procedure.query(async () => {
    return await User.findMany();
  }),
});

export type AppRouter = typeof appRouter;
