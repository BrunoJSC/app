import { auth } from "@stack/auth";
import { Elysia } from "elysia";

const ALLOWED_METHODS = ["POST", "GET"];

/** Better Auth controller: forwards `/api/auth/*` to the auth handler. */
export const authModule = new Elysia({ name: "auth-module" }).all(
	"/api/auth/*",
	(context) => {
		const { request, status } = context;
		if (ALLOWED_METHODS.includes(request.method)) {
			return auth.handler(request);
		}
		return status(405);
	}
);
