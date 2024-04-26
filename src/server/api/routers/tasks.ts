import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const tasksRouter = createTRPCRouter({
  tasks: publicProcedure.query(async ({ ctx, input }) => {
    const tasks = await db.task.findMany();
    return tasks;
  }),
  addTask: publicProcedure
    .input(z.object({ task: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // TODO
    }),
  toggleTaskCompletion: publicProcedure
    // .input(/* TODO */)
    .mutation(async ({ ctx, input }) => {
      // TODO
    })
});
