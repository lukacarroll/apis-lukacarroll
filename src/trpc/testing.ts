import { createTRPCMsw } from "msw-trpc";
import { setupServer } from "msw/node";
import type { AppRouter } from "~/server/api/root";

export const server = setupServer();

import type {
  MutationProcedure,
  QueryProcedure,
  SubscriptionProcedure,
  inferProcedureInput,
  inferProcedureOutput
} from "@trpc/server/unstable-core-do-not-import";

type Router = Record<
  string,
  QueryProcedure<Any> | MutationProcedure<Any> | SubscriptionProcedure<Any>
>;

export type ExtractKeys<T, K extends keyof T = keyof T> = T[K] extends
  | QueryProcedure<Any>
  | MutationProcedure<Any>
  | Router
  ? K
  : never;

export type Query<T, K extends keyof T> = T[K] extends QueryProcedure<Any>
  ? {
      query(input: inferProcedureInput<T[K]>): inferProcedureOutput<T[K]>; // : SetQueryHandler<T, K>;
    }
  : never;

export type Mutation<T, K extends keyof T> = T[K] extends MutationProcedure<Any>
  ? {
      mutation(input: inferProcedureInput<T[K]>): inferProcedureOutput<T[K]>;
    }
  : never;

type ExtractProcedureHandler<
  T,
  K extends keyof T
> = T[K] extends MutationProcedure<Any>
  ? Mutation<T, K>
  : T[K] extends QueryProcedure<Any>
  ? Query<T, K>
  : T[K] extends Router
  ? MswTrpc<T[K]>
  : never;

export type MswTrpc<T> = {
  [key in keyof T as ExtractKeys<T, key>]: ExtractProcedureHandler<T, key>;
};
export const trpcMsw: MswTrpc<AppRouter> = createTRPCMsw<AppRouter>() as Any;
