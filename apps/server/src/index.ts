import { Elysia } from "elysia";
import { authModule } from "./modules/auth";
import { trpcModule } from "./modules/trpc";
import { corsPlugin } from "./plugins/cors";
import { observability } from "./plugins/observability";

const PORT = 3000;

new Elysia()
	.use(observability)
	.use(corsPlugin)
	.use(authModule)
	.use(trpcModule)
	.get("/", () => "OK")
	.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
