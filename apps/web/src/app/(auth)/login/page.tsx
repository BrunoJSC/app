import type { Metadata } from "next";

import SignInForm from "@/components/sign-in-form";
import { getSafeRedirect } from "@/lib/safe-redirect";

export const metadata: Metadata = {
	title: "Entrar — Bancada",
	description: "Acesse sua conta Bancada para gerenciar projetos e propostas.",
};

export default async function LoginPage({
	searchParams,
}: Readonly<{
	searchParams: Promise<{ redirect?: string | string[] }>;
}>) {
	const { redirect } = await searchParams;
	const redirectTo = getSafeRedirect(redirect);

	return <SignInForm redirectTo={redirectTo} />;
}
