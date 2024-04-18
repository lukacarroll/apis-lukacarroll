import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { GreeterWrapper } from "./greeter";

describe("greeter", function () {
  it("has", async function () {
    render(<GreeterWrapper />);

    expect(screen.getByText("Loading ...")).toBeInTheDocument();
    expect(await screen.findByText("Hello from Sydney")).toBeInTheDocument();
  });
});
