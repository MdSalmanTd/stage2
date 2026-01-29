import { z } from "zod";
import { fetchAcc, fetchStellarTransactionOperations } from "~/lib/stellar/trx-api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const transactionRouter = createTRPCRouter({
    getAcc: publicProcedure.input(z.object({publicKey: z.string()})).query(async ({ input }) => {
    return await fetchAcc(input.publicKey);
  }),
  // Get all transactions with cursor pagination
  getAll: publicProcedure
    .input(z.object({
      publicKey: z.string(),
      cursor: z.string().optional(),
      limit: z.number().min(1).max(100).default(20),
    }))
    .query(async ({ input }) => {
      const result = await fetchStellarTransactionOperations(
        input.publicKey,
        input.cursor,
        input.limit
      );
      
      return result;
    }),

  // Get transaction by ID 
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // nothing
      return [];
    }),
});
