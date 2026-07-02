import { openapi } from "@elysiajs/openapi";
import { auth } from "@stack/auth";
import { Elysia } from "elysia";
import type { OpenAPIV3 } from "openapi-types";

/** Base path where the Better Auth handler is mounted. */
const AUTH_BASE_PATH = "/api/auth";

/**
 * Better Auth generates its OpenAPI paths relative to its base path (e.g.
 * `/sign-in/email`), so we prefix them with `/api/auth` to match the routes
 * actually served by {@link authModule}.
 */
const authSchema = await auth.api.generateOpenAPISchema();

const authPaths = Object.fromEntries(
	Object.entries(authSchema.paths).map(([path, item]) => [
		`${AUTH_BASE_PATH}${path}`,
		item,
	])
) as OpenAPIV3.PathsObject;

/**
 * OpenAPI documentation plugin. Serves an interactive Scalar UI at `/openapi`
 * and the raw spec at `/openapi/json`. Native Elysia routes are documented
 * automatically from their schemas and `detail`; the Better Auth endpoints are
 * merged in from its generated schema. The tRPC wildcard controller is excluded
 * since it doesn't expose per-operation schemas.
 */
export const openapiPlugin = new Elysia({ name: "openapi" }).use(
	openapi({
		path: "/openapi",
		provider: "scalar",
		exclude: {
			// The `.all()` wildcards can't be introspected per-operation. Auth is
			// documented via `documentation.paths` below; tRPC is left out.
			paths: ["/api/auth/*", "/trpc/*"],
		},
		documentation: {
			info: {
				title: "Stack API",
				version: "1.0.0",
				description:
					"HTTP API for the Stack server. Authentication is handled by Better Auth under `/api/auth/*`; application data is served over tRPC at `/trpc/*`.",
			},
			tags: [
				{ name: "App", description: "General application routes" },
				...authSchema.tags,
			],
			paths: authPaths,
			components: {
				schemas: authSchema.components.schemas as Record<
					string,
					OpenAPIV3.SchemaObject
				>,
				securitySchemes: authSchema.components
					.securitySchemes as OpenAPIV3.ComponentsObject["securitySchemes"],
			},
		},
	})
);
