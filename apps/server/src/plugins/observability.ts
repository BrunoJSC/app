import { auth } from "@stack/auth";
import { Elysia } from "elysia";
import { initLogger } from "evlog";
import {
	type BetterAuthInstance,
	createAuthMiddleware,
} from "evlog/better-auth";
import { evlog } from "evlog/elysia";

initLogger({
	env: { service: "stack-server" },
});

const identifyUser = createAuthMiddleware(auth as BetterAuthInstance, {
	exclude: ["/api/auth/**"],
	maskEmail: true,
});

/**
 * Observability plugin: wires evlog request logging and enriches every log
 * with the authenticated user. The derive is registered as `global` so it
 * runs for routes declared on sibling modules (auth, trpc) as well.
 */
export const observability = new Elysia({ name: "observability" })
	.use(evlog())
	.derive({ as: "global" }, async ({ request, log }) => {
		await identifyUser(log, request.headers, new URL(request.url).pathname);
		return {};
	});
