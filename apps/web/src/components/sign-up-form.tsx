"use client";

import { Separator } from "@stack/ui/components/separator";
import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { useAppForm } from "@/components/form/app-form";
import Loader from "@/components/loader";
import { SocialAuthButtons } from "@/components/social-auth-buttons";
import { signUpSchema } from "@/lib/auth/schemas";
import { authClient } from "@/lib/auth-client";

const DEFAULT_REDIRECT = "/dashboard";

type SignUpFormProps = Readonly<{
	/** Path to send the user to after a successful sign up. */
	redirectTo?: string;
}>;

export default function SignUpForm({
	redirectTo = DEFAULT_REDIRECT,
}: SignUpFormProps) {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();

	const destination = redirectTo as Route;

	useEffect(() => {
		if (session) {
			router.replace(destination);
		}
	}, [session, destination, router]);

	const form = useAppForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		validators: {
			onBlur: signUpSchema,
			onSubmit: signUpSchema,
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					name: value.name,
					email: value.email,
					password: value.password,
				},
				{
					onSuccess: () => {
						router.push(destination);
					},
					onError: ({ error }) => {
						toast.error(
							error.message ||
								"Não foi possível criar a conta. Tente novamente."
						);
					},
				}
			);
		},
	});

	if (isPending || session) {
		return <Loader />;
	}

	return (
		<div className="w-full">
			<div className="mb-8 space-y-2">
				<h1 className="font-display font-semibold text-3xl text-bnc-fg tracking-[-0.02em]">
					Criar conta
				</h1>
				<p className="text-bnc-muted text-sm">
					Comece a contratar ou a receber projetos em minutos.
				</p>
			</div>

			<form
				className="space-y-5"
				noValidate
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.AppField name="name">
					{(field) => (
						<field.TextField
							autoComplete="name"
							label="Nome"
							placeholder="Seu nome"
						/>
					)}
				</form.AppField>

				<form.AppField name="email">
					{(field) => (
						<field.TextField
							autoComplete="email"
							inputMode="email"
							label="E-mail"
							placeholder="voce@exemplo.com"
							type="email"
						/>
					)}
				</form.AppField>

				<form.AppField name="password">
					{(field) => (
						<field.TextField
							autoComplete="new-password"
							description="Ao menos 8 caracteres."
							label="Senha"
							placeholder="••••••••"
							type="password"
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubmitButton pendingLabel="Criando conta...">
						Criar conta
					</form.SubmitButton>
				</form.AppForm>
			</form>

			<div className="my-6 flex items-center gap-3">
				<span className="h-px flex-1 bg-bnc-line" />
				<span className="text-bnc-muted text-xs">ou</span>
				<span className="h-px flex-1 bg-bnc-line" />
			</div>

			<SocialAuthButtons callbackURL={destination} />

			<Separator className="my-6 bg-bnc-line" />

			<p className="text-center text-bnc-muted text-sm">
				Já tem conta?{" "}
				<Link
					className="font-medium text-bnc-accent transition-colors hover:brightness-110"
					href="/login"
				>
					Entrar
				</Link>
			</p>
		</div>
	);
}
