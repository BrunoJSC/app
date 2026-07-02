import { expo } from "@better-auth/expo";
import { createDb } from "@stack/db";
// biome-ignore lint/performance/noNamespaceImport: Drizzle needs the full schema as a single namespace object
import * as schema from "@stack/db/schema/auth";
import { env } from "@stack/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";

export function createAuth() {
	const db = createDb();

	return betterAuth({
		database: drizzleAdapter(db, {
			provider: "pg",

			schema,
		}),
		trustedOrigins: [
			env.CORS_ORIGIN,
			"stack://",
			"exp://",
			"http://localhost:8081",
		],
		emailAndPassword: {
			enabled: true,
		},
		socialProviders: {
			...(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET
				? {
						github: {
							clientId: env.GITHUB_CLIENT_ID,
							clientSecret: env.GITHUB_CLIENT_SECRET,
						},
					}
				: {}),
			...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
				? {
						google: {
							clientId: env.GOOGLE_CLIENT_ID,
							clientSecret: env.GOOGLE_CLIENT_SECRET,
						},
					}
				: {}),
		},
		secret: env.BETTER_AUTH_SECRET,
		baseURL: env.BETTER_AUTH_URL,
		advanced: {
			defaultCookieAttributes: {
				sameSite: "none",
				secure: true,
				httpOnly: true,
			},
		},
		plugins: [expo(), openAPI({ disableDefaultReference: true })],
	});
}

export const auth = createAuth();
