"use client";

import { Input } from "@stack/ui/components/input";
import { Label } from "@stack/ui/components/label";
import { cn } from "@stack/ui/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { type ComponentProps, useId, useState } from "react";

import { useFieldContext } from "./form-contexts";

type TextFieldProps = {
	label: string;
	/** Optional helper/description rendered under the label. */
	description?: string;
} & Omit<
	ComponentProps<"input">,
	"id" | "name" | "value" | "onChange" | "onBlur" | "aria-invalid"
>;

const FIELD_CLASSES =
	"h-11 rounded-md border-bnc-line bg-bnc-surface px-3 text-sm text-bnc-fg transition-colors placeholder:text-bnc-subtle focus-visible:border-bnc-accent focus-visible:ring-2 focus-visible:ring-bnc-accent/25 aria-invalid:border-red-500/70 aria-invalid:ring-red-500/20";

export function TextField({
	label,
	description,
	type = "text",
	className,
	...inputProps
}: TextFieldProps) {
	const field = useFieldContext<string>();
	const [revealed, setRevealed] = useState(false);

	const descriptionId = useId();
	const errorId = useId();

	const errors = field.state.meta.errors;
	const hasError = field.state.meta.isTouched && errors.length > 0;
	const isPassword = type === "password";
	const resolvedType = isPassword && revealed ? "text" : type;

	const describedBy =
		[description ? descriptionId : null, hasError ? errorId : null]
			.filter(Boolean)
			.join(" ") || undefined;

	return (
		<div className="space-y-1.5">
			<Label className="font-medium text-bnc-fg text-sm" htmlFor={field.name}>
				{label}
			</Label>

			{description ? (
				<p className="text-bnc-muted text-xs" id={descriptionId}>
					{description}
				</p>
			) : null}

			<div className="relative">
				<Input
					aria-describedby={describedBy}
					aria-invalid={hasError}
					className={cn(FIELD_CLASSES, isPassword && "pr-11", className)}
					id={field.name}
					name={field.name}
					onBlur={field.handleBlur}
					onChange={(event) => field.handleChange(event.target.value)}
					type={resolvedType}
					value={field.state.value}
					{...inputProps}
				/>

				{isPassword ? (
					<button
						aria-label={revealed ? "Ocultar senha" : "Mostrar senha"}
						aria-pressed={revealed}
						className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-bnc-muted transition-colors hover:text-bnc-fg focus-visible:text-bnc-fg focus-visible:outline-none"
						onClick={() => setRevealed((value) => !value)}
						type="button"
					>
						{revealed ? (
							<EyeOffIcon className="size-4" />
						) : (
							<EyeIcon className="size-4" />
						)}
					</button>
				) : null}
			</div>

			{hasError ? (
				<p className="text-red-400 text-xs" id={errorId} role="alert">
					{errors.map((error) => error?.message).join(" ")}
				</p>
			) : null}
		</div>
	);
}
