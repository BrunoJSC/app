import type { Metadata } from "next";

import SignUpForm from "@/components/sign-up-form";
import { getSafeRedirect } from "@/lib/safe-redirect";

export const metadata: Metadata = {
	title: "Criar conta — Bancada",
	description:
		"Crie sua conta Bancada e comece a contratar ou a receber projetos.",
};

export default async function SignUpPage({
	searchParams,
}: Readonly<{
	searchParams: Promise<{ redirect?: string | string[] }>;
}>) {
	const { redirect } = await searchParams;
	const redirectTo = getSafeRedirect(redirect);

	return <SignUpForm redirectTo={redirectTo} />;
}
