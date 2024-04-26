"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { TRPCReactProvider } from "~/trpc/react";

export function Providers({
  children,
  cache = {}
}: PropsWithChildren<{ cache?: Any }>) {
  return (
    <TRPCReactProvider cache={cache}>
      <ReactQueryDevtools />
      {children}
    </TRPCReactProvider>
  );
}
