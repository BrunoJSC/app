import { cn } from "@stack/ui/lib/utils";
import { LogoMark } from "./landing-icons";

interface BrandLogoProps {
	className?: string;
	markClassName?: string;
	/** Renders the small "beta" tag shown in the top navigation. */
	showBeta?: boolean;
	wordmarkClassName?: string;
}

export function BrandLogo({
	showBeta = false,
	className,
	markClassName,
	wordmarkClassName,
}: BrandLogoProps) {
	return (
		<div className={cn("flex items-center gap-[11px]", className)}>
			<span
				className={cn(
					"flex size-[30px] shrink-0 items-center justify-center rounded-md bg-bnc-accent text-bnc-bg",
					markClassName
				)}
			>
				<LogoMark className="size-4" />
			</span>
			<span
				className={cn(
					"font-display font-semibold text-[19px] tracking-[-0.02em]",
					wordmarkClassName
				)}
			>
				Bancada
			</span>
			{showBeta ? (
				<span className="ml-0.5 rounded-[5px] border border-bnc-line px-1.5 py-0.5 font-mono-code text-[10px] text-bnc-muted">
					beta
				</span>
			) : null}
		</div>
	);
}
