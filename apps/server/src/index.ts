import { Elysia } from "elysia";
import { authModule } from "./modules/auth";
import { trpcModule } from "./modules/trpc";
import { corsPlugin } from "./plugins/cors";
import { csrfPlugin } from "./plugins/csrf";
import { observability } from "./plugins/observability";
import { openapiPlugin } from "./plugins/openapi";

const PORT = 3000;

new Elysia()
	.use(observability)
	.use(openapiPlugin)
	.use(corsPlugin)
	.use(csrfPlugin)
	.use(authModule)
	.use(trpcModule)
	.get("/", () => "OK", {
		detail: {
			summary: "Health check",
			description: "Returns `OK` when the server is running.",
			tags: ["App"],
		},
	})
	.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
