import { cn } from "@stack/ui/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
	className?: string;
	/** Optional supporting paragraph shown beside the title on wide screens. */
	description?: ReactNode;
	/** Mono eyebrow label, e.g. "// DISCIPLINAS". */
	eyebrow: string;
	title: ReactNode;
	titleClassName?: string;
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
	titleClassName,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				description
					? "flex flex-wrap items-end justify-between gap-6"
					: undefined,
				className
			)}
		>
			<div>
				<p className="mb-3 font-mono-code text-[11px] text-bnc-accent tracking-[0.08em]">
					{eyebrow}
				</p>
				<h2
					className={cn(
						"m-0 font-display font-semibold text-[38px] leading-[1.05] tracking-[-0.02em]",
						titleClassName
					)}
				>
					{title}
				</h2>
			</div>
			{description ? (
				<p className="m-0 max-w-80 text-[15px] text-bnc-muted leading-[1.5]">
					{description}
				</p>
			) : null}
		</div>
	);
}
