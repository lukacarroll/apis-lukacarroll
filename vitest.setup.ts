import { vi } from "vitest";
import { mockDeep } from "vitest-mock-extended";
import type { AppRouter } from "~/server/api/root";

vi.mock("~/server/auth", () => ({
  getServerAuthSession: vi.fn()
}));

vi.mock("~/trpc/server", () => ({
  api: mockDeep<AppRouter>()
}));
