import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { submitInquiry } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(({ ctx }) => ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiries: router({
    submit: publicProcedure
      .input(
        z.object({
          packageName: z.string().min(1),
          packagePrice: z.string().min(1),
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        await submitInquiry({
          packageName: input.packageName,
          packagePrice: input.packagePrice,
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
