import { env } from "@stack/env/server";
import { Elysia, status } from "elysia";

/** HTTP methods that can mutate state and therefore need CSRF protection. */
const UNSAFE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/**
 * Browser origins allowed to make state-changing requests. Native app clients
 * (Expo) don't send an `Origin` header and aren't a CSRF vector, so only the
 * web origin belongs here. Shares `env.CORS_ORIGIN` — already normalized to a
 * canonical origin — so this stays in lockstep with the CORS plugin and
 * better-auth's `trustedOrigins`.
 */
const TRUSTED_ORIGINS = new Set([env.CORS_ORIGIN]);

/**
 * CSRF protection via `Origin` header validation. Auth cookies use
 * `sameSite: "none"`, so browsers attach them to cross-site requests; CORS only
 * blocks *reading* the response, not the state-changing request from executing
 * on the server. This plugin rejects unsafe-method requests whose `Origin`
 * isn't trusted. Registered as `global` so it guards sibling modules (auth,
 * trpc) declared after it.
 */
export const csrfPlugin = new Elysia({ name: "csrf" }).onBeforeHandle(
	{ as: "global" },
	({ request }) => {
		if (!UNSAFE_METHODS.has(request.method)) {
			return;
		}

		const origin = request.headers.get("origin");

		// A missing Origin means a native app or a non-browser caller, neither of
		// which a remote site can forge on a victim's behalf.
		if (origin === null) {
			return;
		}

		if (!TRUSTED_ORIGINS.has(origin)) {
			return status(403, "Forbidden: invalid origin");
		}
	}
);
