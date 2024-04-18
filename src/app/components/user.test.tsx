import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { describe, it, vi } from "vitest";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { User } from "./user";

describe.skip("User Component", () => {
  it("Anonymous View", async () => {
    vi.mocked(getServerAuthSession).mockResolvedValue(null);
    vi.mocked(api.post.hello).mockResolvedValue({
      greeting: "Hello Anonymous"
    });

    render(
      <Suspense>
        <User />
      </Suspense>
    );

    expect(await screen.findByText("Sign in")).toBeInTheDocument(); // first assertion must await for suspense
    expect(await screen.findByText("Hello Anonymous")).toBeInTheDocument();
  });

  it("Logged In View", async () => {
    vi.mocked(getServerAuthSession).mockResolvedValue({
      user: { id: "1", name: "Tomas", email: "" },
      expires: ""
    });
    vi.mocked(api.post.hello).mockResolvedValue({ greeting: "Hello Tomas" });

    render(
      <Suspense>
        <User />
      </Suspense>
    );

    expect(await screen.findByText("Sign out")).toBeInTheDocument(); // first assertion must await for suspense
    expect(await screen.findByText("Hello Tomas")).toBeInTheDocument();
  });
});
