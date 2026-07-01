import { z } from "zod";

/** Minimum password length enforced by the auth provider. */
export const MIN_PASSWORD_LENGTH = 8;

export const signInSchema = z.object({
	email: z.email("Informe um e-mail válido."),
	password: z
		.string()
		.min(
			MIN_PASSWORD_LENGTH,
			`A senha deve ter ao menos ${MIN_PASSWORD_LENGTH} caracteres.`
		),
});

export type SignInValues = z.infer<typeof signInSchema>;

/** Minimum characters required for a display name. */
export const MIN_NAME_LENGTH = 2;

export const signUpSchema = signInSchema.extend({
	name: z.string().trim().min(MIN_NAME_LENGTH, "Informe seu nome completo."),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
