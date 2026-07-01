"use client";

import { Button } from "@stack/ui/components/button";
import { cn } from "@stack/ui/lib/utils";
import { Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { useFormContext } from "./form-contexts";

type SubmitButtonProps = {
	children: ReactNode;
	/** Label announced/rendered while the submission is in flight. */
	pendingLabel?: string;
} & Omit<ComponentProps<typeof Button>, "type" | "disabled" | "children">;

const SUBMIT_CLASSES =
	"h-11 w-full rounded-md bg-bnc-accent font-semibold text-bnc-bg text-sm transition-all hover:brightness-110 disabled:opacity-60";

export function SubmitButton({
	children,
	pendingLabel,
	className,
	...buttonProps
}: SubmitButtonProps) {
	const form = useFormContext();

	return (
		<form.Subscribe
			selector={(state) => ({
				canSubmit: state.canSubmit,
				isSubmitting: state.isSubmitting,
			})}
		>
			{({ canSubmit, isSubmitting }) => (
				<Button
					className={cn(SUBMIT_CLASSES, className)}
					disabled={!canSubmit || isSubmitting}
					type="submit"
					{...buttonProps}
				>
					{isSubmitting ? (
						<>
							<Loader2 className="size-4 animate-spin" />
							{pendingLabel ?? children}
						</>
					) : (
						children
					)}
				</Button>
			)}
		</form.Subscribe>
	);
}
