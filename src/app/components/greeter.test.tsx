import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { GreeterWrapper } from "./greeter";

import { createTRPCMsw } from "msw-trpc";

import type { AppRouter } from "~/server/api/root";
import { server } from "~/trpc/testing";

import superjson from "superjson";

export const trpcMsw: Any = createTRPCMsw<AppRouter>({
  transformer: {
    input: superjson,
    output: superjson
  }
}); /* 👈 */

describe("greeter", function () {
  it("has", async function () {
    server.use(
      trpcMsw.post.hello.query((input: Any) => {
        return { greeting: "Hello " + input.text };
      })
    );

    render(<GreeterWrapper />);

    expect(screen.getByText("Loading ...")).toBeInTheDocument();
    expect(await screen.findByText("Hello from Sydney")).toBeInTheDocument();
  });
});
