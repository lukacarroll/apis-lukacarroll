import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { describe, it } from "vitest";
import Page from "./page";

describe("Page Test", function () {
  it("Show the welcome header", async function () {
    render(
      <Suspense>
        <Page />
      </Suspense>
    );

    expect(await screen.findByText("Get Things Done")).toBeInTheDocument();
  });

  it("Show the list of tasks", async function () {
    render(
      <Suspense>
        <Page />
      </Suspense>
    );

    expect(await screen.findByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });
});
