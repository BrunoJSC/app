import { cors } from "@elysiajs/cors";
import { env } from "@stack/env/server";
import { Elysia } from "elysia";

/** Configured CORS plugin shared by every route on the server. */
export const corsPlugin = new Elysia({ name: "cors" }).use(
	cors({
		origin: env.CORS_ORIGIN,
		methods: ["GET", "POST", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);
