import { cn } from "@stack/ui/lib/utils";
import type { SVGProps } from "react";
import type { DisciplineIconId, GuaranteeIconId } from "./landing-data";

type IconProps = SVGProps<SVGSVGElement>;

const STROKE_PROPS = {
	fill: "none",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
} as const;

function baseSvg(
	{ className, ...props }: IconProps,
	children: React.ReactNode
) {
	return (
		<svg
			aria-hidden="true"
			className={cn("size-4", className)}
			focusable="false"
			viewBox="0 0 24 24"
			{...props}
		>
			{children}
		</svg>
	);
}

export function LogoMark(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 2.4, ...STROKE_PROPS, ...props },
		<>
			<path d="M8 6 3 12l5 6" />
			<path d="M16 6l5 6-5 6" />
		</>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 2.4, ...STROKE_PROPS, ...props },
		<>
			<path d="M5 12h14" />
			<path d="m13 6 6 6-6 6" />
		</>
	);
}

export function CheckIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 2.2, ...STROKE_PROPS, ...props },
		<path d="M20 6 9 17l-5-5" />
	);
}

export function SearchIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.9, ...STROKE_PROPS, ...props },
		<>
			<circle cx="11" cy="11" r="7" />
			<path d="m21 21-4.3-4.3" />
		</>
	);
}

function CodeIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="m8 6-6 6 6 6" />
			<path d="m16 6 6 6-6 6" />
		</>
	);
}

function FilmIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M2 9h20M8 4v5M16 4v5M8 20v-5M16 20v-5" />
		</>
	);
}

function PenToolIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="m12 19 7-7 3 3-7 7-3-3z" />
			<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
			<path d="m2 2 7.586 7.586" />
			<circle cx="11" cy="11" r="2" />
		</>
	);
}

function LineChartIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M3 3v18h18" />
			<path d="M3 15c4-8 10-10 18-10" />
			<circle cx="21" cy="5" fill="currentColor" r="1.5" stroke="none" />
		</>
	);
}

function VideoIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M23 7l-7 5 7 5V7z" />
			<rect height="14" rx="2" width="15" x="1" y="5" />
		</>
	);
}

function BoxIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
			<path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
		</>
	);
}

function IllustrationIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M12 19c-4 0-8-2-8-5.5 0-2 2-3.5 3-4 0-3 2-6 5-6 4 0 6 3 6 6 2 .5 3.5 2 3.5 4C21.5 17 16 19 12 19z" />
			<path d="M9 13h.01M15 13h.01" />
		</>
	);
}

/** Animated three-bar equalizer used by the "Áudio & som" discipline. */
export function AudioEqualizer({ className }: { className?: string }) {
	return (
		<span
			aria-hidden="true"
			className={cn("flex items-center justify-center gap-0.5", className)}
		>
			{[
				{ height: "8px", delay: "0s" },
				{ height: "14px", delay: "0.2s" },
				{ height: "10px", delay: "0.4s" },
			].map((bar) => (
				<span
					className="block w-[2.5px] rounded-full bg-bnc-accent [animation:bnc-eq_1s_ease-in-out_infinite]"
					key={bar.delay}
					style={{ height: bar.height, animationDelay: bar.delay }}
				/>
			))}
		</span>
	);
}

const DISCIPLINE_ICONS: Record<
	Exclude<DisciplineIconId, "audio">,
	(props: IconProps) => React.ReactElement
> = {
	code: CodeIcon,
	film: FilmIcon,
	penTool: PenToolIcon,
	lineChart: LineChartIcon,
	video: VideoIcon,
	box: BoxIcon,
	illustration: IllustrationIcon,
};

export function DisciplineIcon({
	icon,
	className,
}: {
	icon: DisciplineIconId;
	className?: string;
}) {
	if (icon === "audio") {
		return <AudioEqualizer className={className} />;
	}
	const Icon = DISCIPLINE_ICONS[icon];
	return <Icon className={cn("size-[18px] text-bnc-accent", className)} />;
}

function LockIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<rect height="11" rx="2" width="18" x="3" y="11" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</>
	);
}

function ShieldCheckIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" />
			<path d="m9 12 2 2 4-4" />
		</>
	);
}

function FileCheckIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<>
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<path d="M14 2v6h6M9 15l2 2 4-4" />
		</>
	);
}

function ZapIcon(props: IconProps) {
	return baseSvg(
		{ strokeWidth: 1.8, ...STROKE_PROPS, ...props },
		<path d="M13 2 3 14h9l-1 8 10-12h-9z" />
	);
}

const GUARANTEE_ICONS: Record<
	GuaranteeIconId,
	(props: IconProps) => React.ReactElement
> = {
	lock: LockIcon,
	shieldCheck: ShieldCheckIcon,
	fileCheck: FileCheckIcon,
	zap: ZapIcon,
};

export function GuaranteeIcon({
	icon,
	className,
}: {
	icon: GuaranteeIconId;
	className?: string;
}) {
	const Icon = GUARANTEE_ICONS[icon];
	return <Icon className={cn("size-5 text-bnc-accent", className)} />;
}

/** Small filled shield used as the "verified profile" badge in the hero peek. */
export function VerifiedBadge({ className }: { className?: string }) {
	return (
		<svg
			aria-label="Perfil verificado"
			className={cn("size-3 text-bnc-accent", className)}
			role="img"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z"
				fill="currentColor"
				stroke="var(--color-bnc-bg)"
				strokeWidth="1"
			/>
			<path
				d="M9 12l2 2 4-4"
				fill="none"
				stroke="var(--color-bnc-bg)"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.4"
			/>
		</svg>
	);
}
