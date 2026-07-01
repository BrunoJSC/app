import type { ShowcaseVisualId } from "./landing-data";

/** Fixed-height preview art for each showcase tile. Purely decorative. */

function CodeVisual() {
	return (
		<div className="h-[190px] overflow-hidden bg-bnc-deep p-4 font-mono-code text-[11px] leading-[1.7]">
			<p className="text-bnc-subtle">{"// checkout.ts"}</p>
			<p>
				<span className="text-bnc-accent">export</span>{" "}
				<span className="text-bnc-muted">const</span> pay ={" "}
				<span className="text-bnc-muted">async</span> (o) =&gt; {"{"}
			</p>
			<p className="pl-3.5">
				const tx = <span className="text-bnc-muted">await</span> escrow.
				<span className="text-bnc-accent">hold</span>(o)
			</p>
			<p className="pl-3.5">
				<span className="text-bnc-muted">return</span> tx.
				<span className="text-bnc-accent">confirm</span>()
			</p>
			<p>{"}"}</p>
			<p className="mt-1.5 text-bnc-subtle">✓ 142 tests passing</p>
			<span className="inline-block h-3.5 w-[7px] bg-bnc-accent align-middle [animation:bnc-blink_1s_step-end_infinite]" />
		</div>
	);
}

const TIMELINE_TRACKS = [
	"repeating-linear-gradient(90deg,#38304a 0,#38304a 10px,#2a2438 10px,#2a2438 12px)",
	"repeating-linear-gradient(90deg,#2f3a2a 0,#2f3a2a 6px,#26301f 6px,#26301f 8px)",
] as const;

function TimelineVisual() {
	return (
		<div className="flex h-[190px] flex-col justify-end gap-1.5 p-4 [background:linear-gradient(135deg,#1a1420,#0b0c10)]">
			<div className="relative mb-1.5 flex-1 overflow-hidden rounded-[5px] [background:linear-gradient(120deg,#2a1e34,#3a2547)]">
				<div className="absolute inset-y-0 left-[38%] w-0.5 bg-bnc-accent" />
				<div className="absolute -top-0.5 left-[38%] size-2 -translate-x-[3px] rounded-full bg-bnc-accent" />
			</div>
			{TIMELINE_TRACKS.map((track) => (
				<div
					className="h-3.5 rounded-[3px]"
					key={track}
					style={{ background: track }}
				/>
			))}
			<div className="h-2.5 w-[70%] rounded-[3px] bg-bnc-chip" />
		</div>
	);
}

function InterfaceVisual() {
	return (
		<div className="flex h-[190px] gap-2 bg-bnc-deep p-4">
			<div className="flex w-[34%] flex-col gap-1.5 rounded-[5px] border border-bnc-line bg-[#15161c] p-2">
				<div className="h-2 w-[60%] rounded-sm bg-bnc-accent" />
				<div className="h-1.5 rounded-sm bg-bnc-chip" />
				<div className="h-1.5 w-[80%] rounded-sm bg-bnc-chip" />
				<div className="h-1.5 w-[70%] rounded-sm bg-bnc-chip" />
				<div className="mt-auto h-4 rounded-[4px] bg-bnc-chip" />
			</div>
			<div className="flex flex-1 flex-col gap-2">
				<div className="h-14 rounded-[5px] border border-bnc-line [background:linear-gradient(135deg,#232530,#1a1b22)]" />
				<div className="flex flex-1 gap-2">
					<div className="flex-1 rounded-[5px] border border-bnc-line bg-[#15161c]" />
					<div className="flex-1 rounded-[5px] border border-bnc-line bg-[#15161c]" />
				</div>
			</div>
		</div>
	);
}

function BezierVisual() {
	return (
		<div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-bnc-deep">
			<svg
				aria-hidden="true"
				className="size-full"
				preserveAspectRatio="none"
				viewBox="0 0 240 190"
			>
				<defs>
					<pattern
						height="24"
						id="bnc-motion-grid"
						patternUnits="userSpaceOnUse"
						width="24"
					>
						<path d="M24 0H0V24" fill="none" stroke="#1c1e26" strokeWidth="1" />
					</pattern>
				</defs>
				<rect fill="url(#bnc-motion-grid)" height="190" width="240" />
				<path
					d="M20 160 C80 160 90 40 150 40 S220 30 220 30"
					fill="none"
					stroke="var(--color-bnc-accent)"
					strokeWidth="2.5"
				/>
				<circle
					cx="20"
					cy="160"
					fill="var(--color-bnc-bg)"
					r="4"
					stroke="var(--color-bnc-accent)"
					strokeWidth="2"
				/>
				<circle cx="150" cy="40" fill="var(--color-bnc-accent)" r="4" />
				<line
					stroke="#4a4d5a"
					strokeWidth="1.2"
					x1="150"
					x2="200"
					y1="40"
					y2="20"
				/>
				<circle cx="200" cy="20" fill="var(--color-bnc-muted)" r="3" />
			</svg>
		</div>
	);
}

function Hex3dVisual() {
	return (
		<div className="flex h-[190px] items-center justify-center [background:radial-gradient(circle_at_50%_40%,#1a1b22,#0b0c10)]">
			<svg aria-hidden="true" height="120" viewBox="0 0 100 100" width="120">
				<polygon
					fill="none"
					points="50,10 88,32 88,68 50,90 12,68 12,32"
					stroke="var(--color-bnc-line)"
					strokeWidth="1.5"
				/>
				<polygon
					fill="#232530"
					points="50,10 88,32 50,54 12,32"
					stroke="var(--color-bnc-line-strong)"
					strokeWidth="1"
				/>
				<polygon
					fill="#17181e"
					points="88,32 88,68 50,90 50,54"
					stroke="var(--color-bnc-line-strong)"
					strokeWidth="1"
				/>
				<polygon
					fill="#0f1015"
					points="12,32 50,54 50,90 12,68"
					stroke="var(--color-bnc-line-strong)"
					strokeWidth="1"
				/>
				<polygon
					fill="none"
					opacity="0.6"
					points="50,10 88,32 50,54 12,32"
					stroke="var(--color-bnc-accent)"
					strokeWidth="1.4"
				/>
			</svg>
		</div>
	);
}

const WAVEFORM_BARS = [
	{ id: "w01", height: 20, tone: "chip" },
	{ id: "w02", height: 45, tone: "green" },
	{ id: "w03", height: 70, tone: "accent" },
	{ id: "w04", height: 35, tone: "green" },
	{ id: "w05", height: 90, tone: "accent" },
	{ id: "w06", height: 55, tone: "chip" },
	{ id: "w07", height: 80, tone: "accent" },
	{ id: "w08", height: 30, tone: "chip" },
	{ id: "w09", height: 60, tone: "green" },
	{ id: "w10", height: 100, tone: "accent" },
	{ id: "w11", height: 40, tone: "chip" },
	{ id: "w12", height: 75, tone: "green" },
	{ id: "w13", height: 50, tone: "chip" },
	{ id: "w14", height: 85, tone: "accent" },
	{ id: "w15", height: 25, tone: "chip" },
	{ id: "w16", height: 65, tone: "green" },
	{ id: "w17", height: 45, tone: "chip" },
	{ id: "w18", height: 78, tone: "accent" },
	{ id: "w19", height: 35, tone: "chip" },
	{ id: "w20", height: 55, tone: "green" },
] as const;

const WAVEFORM_TONE: Record<(typeof WAVEFORM_BARS)[number]["tone"], string> = {
	chip: "bg-bnc-chip",
	green: "bg-[#2f3a2a]",
	accent: "bg-bnc-accent",
};

function WaveformVisual() {
	return (
		<div className="flex h-[190px] items-center gap-[3px] bg-bnc-deep p-4">
			{WAVEFORM_BARS.map((bar) => (
				<div
					className={`w-[3px] rounded-sm ${WAVEFORM_TONE[bar.tone]}`}
					key={bar.id}
					style={{ height: `${bar.height}%` }}
				/>
			))}
		</div>
	);
}

const VISUALS: Record<ShowcaseVisualId, () => React.ReactElement> = {
	code: CodeVisual,
	timeline: TimelineVisual,
	interface: InterfaceVisual,
	bezier: BezierVisual,
	hex3d: Hex3dVisual,
	waveform: WaveformVisual,
};

export function ShowcaseVisual({ visual }: { visual: ShowcaseVisualId }) {
	const Visual = VISUALS[visual];
	return <Visual />;
}
