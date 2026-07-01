import { createContext } from "@stack/api/context";
import { appRouter } from "@stack/api/routers/index";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { Elysia } from "elysia";

/** tRPC controller: bridges `/trpc/*` to the fetch adapter and app router. */
export const trpcModule = new Elysia({ name: "trpc-module" }).all(
	"/trpc/*",
	(context) =>
		fetchRequestHandler({
			endpoint: "/trpc",
			router: appRouter,
			req: context.request,
			createContext: () => createContext({ context }),
		})
);
