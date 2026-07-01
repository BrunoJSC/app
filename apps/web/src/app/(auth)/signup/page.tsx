import type { Metadata } from "next";

import SignUpForm from "@/components/sign-up-form";

export const metadata: Metadata = {
	title: "Criar conta — Bancada",
	description:
		"Crie sua conta Bancada e comece a contratar ou a receber projetos.",
};

export default async function SignUpPage({
	searchParams,
}: Readonly<{
	searchParams: Promise<{ redirect?: string }>;
}>) {
	const { redirect } = await searchParams;

	const redirectTo =
		redirect?.startsWith("/") && !redirect.startsWith("//")
			? redirect
			: undefined;

	return <SignUpForm redirectTo={redirectTo} />;
}
