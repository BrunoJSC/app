import { cn } from "@stack/ui/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type CtaVariant = "primary" | "secondary";
type CtaSize = "sm" | "md" | "lg";

const BASE_CLASSES =
	"inline-flex items-center justify-center gap-[9px] rounded-md font-medium no-underline transition-all duration-150 ease-out";

const VARIANT_CLASSES: Record<CtaVariant, string> = {
	primary:
		"bg-bnc-accent font-semibold text-bnc-bg hover:shadow-[0_0_0_5px_rgba(214,255,61,0.14)] hover:brightness-110",
	secondary:
		"border border-bnc-line bg-bnc-surface text-bnc-fg hover:border-bnc-line-strong hover:bg-bnc-elevated",
};

const SIZE_CLASSES: Record<CtaSize, string> = {
	sm: "px-4 py-[9px] text-sm",
	md: "px-[22px] py-[14px] text-[15px]",
	lg: "px-[26px] py-[15px] text-[15px]",
};

interface CtaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	size?: CtaSize;
	variant?: CtaVariant;
}

export function CtaLink({
	className,
	variant = "primary",
	size = "md",
	...props
}: CtaLinkProps) {
	return (
		<a
			className={cn(
				BASE_CLASSES,
				VARIANT_CLASSES[variant],
				SIZE_CLASSES[size],
				className
			)}
			{...props}
		/>
	);
}
