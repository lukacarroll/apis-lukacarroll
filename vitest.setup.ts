import { vi } from "vitest";
import { mockDeep } from "vitest-mock-extended";
import type { AppRouter } from "~/server/api/root";
import { server } from "~/trpc/testing";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

vi.mock("~/server/auth", () => ({
  getServerAuthSession: vi.fn()
}));

vi.mock("~/trpc/server", () => ({
  api: mockDeep<AppRouter>()
}));
