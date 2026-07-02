import { env } from "@stack/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

// biome-ignore lint/performance/noNamespaceImport: Drizzle needs the full schema as a single namespace object
import * as schema from "./schema";

export function createDb() {
	return drizzle(env.DATABASE_URL, { schema });
}

export const db = createDb();
