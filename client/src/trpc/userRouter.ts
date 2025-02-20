// server/src/trpc/userRouter.ts
import { initTRPC } from "@trpc/server";
import { getUsers, login2, register2 } from "server/controllers/userController";
import { z } from "zod";

const t = initTRPC.create();

export const userRouter = t.router({
  register: t.procedure
    .input(
      z.object({
        email: z.string(),
        userName: z.string(),
        password: z.string(),
        repeatPassword: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { email, userName, password, repeatPassword } = input;
        const { user, accessToken } = await register2(
          email,
          userName,
          password,
          repeatPassword
        );

        return { user, accessToken };
      } catch (error) {
        return { error: (error as Error).message || "Internal server error" };
      }
    }),

  login: t.procedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { email, password } = input;
        // @ts-ignore
        const { user, accessToken } = await login2(email, password);

        return { user, accessToken };
      } catch (error) {
        return { error: (error as Error).message || "Internal server error" };
      }
    }),

  getAllUsers: t.procedure.query(async () => {
    const users = await getUsers();
    return users;
  }),

  // Add other procedures as needed...
});
