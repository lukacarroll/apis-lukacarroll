"use client";

import { TRPCReactProvider, api } from "~/trpc/react";

export function Greeter() {
  const greeter = api.post.hello.useQuery({ text: "from Sydney" });

  return <div>{greeter.data?.greeting ?? "Loading ..."}</div>;
}

export function GreeterWrapper() {
  return (
    <TRPCReactProvider>
      <Greeter />
    </TRPCReactProvider>
  );
}
