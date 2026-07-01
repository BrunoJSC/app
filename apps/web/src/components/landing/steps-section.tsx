import { STEPS } from "./landing-data";

export function StepsSection() {
	return (
		<section className="border-bnc-line border-y bg-bnc-panel" id="como">
			<div className="mx-auto max-w-[1200px] px-8 py-20">
				<p className="mb-3 font-mono-code text-[11px] text-bnc-accent tracking-[0.08em]">
					{"// COMO FUNCIONA"}
				</p>
				<h2 className="m-0 mb-[46px] font-display font-semibold text-[38px] tracking-[-0.02em]">
					Do briefing ao repasse, em três passos.
				</h2>
				<div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-bnc-line bg-bnc-line md:grid-cols-3">
					{STEPS.map((step) => (
						<div
							className="bg-bnc-bg px-[26px] py-[30px] transition-colors duration-150 ease-out hover:bg-bnc-surface-2"
							key={step.index}
						>
							<p className="mb-5 font-display font-semibold text-[44px] text-bnc-accent leading-none tracking-[-0.03em]">
								{step.index}
							</p>
							<h3 className="mb-2.5 font-display font-semibold text-[20px]">
								{step.title}
							</h3>
							<p className="m-0 text-[14px] text-bnc-muted leading-[1.55]">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
