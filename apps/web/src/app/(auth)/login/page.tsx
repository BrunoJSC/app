import type { Metadata } from "next";

import SignInForm from "@/components/sign-in-form";

export const metadata: Metadata = {
	title: "Entrar — Bancada",
	description: "Acesse sua conta Bancada para gerenciar projetos e propostas.",
};

export default async function LoginPage({
	searchParams,
}: Readonly<{
	searchParams: Promise<{ redirect?: string }>;
}>) {
	const { redirect } = await searchParams;

	// Only honor relative in-app paths to avoid open-redirect abuse.
	const redirectTo =
		redirect?.startsWith("/") && !redirect.startsWith("//")
			? redirect
			: undefined;

	return <SignInForm redirectTo={redirectTo} />;
}
