import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const helloRouter = createTRPCRouter({
  world: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(async ({ ctx, input }) => {
      return "Hello " + input.message;
    })
});
