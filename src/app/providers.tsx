"use client";

import { SessionProvider } from "next-auth/react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { TRPCReactProvider } from "~/trpc/react";

export function Providers({
  children,
  cache = {}
}: PropsWithChildren<{ cache?: Any }>) {
  return (
    <SessionProvider>
      <TRPCReactProvider cache={cache}>
        {/* <ReactQueryDevtools /> */}
        {children}
      </TRPCReactProvider>
    </SessionProvider>
  );
}
