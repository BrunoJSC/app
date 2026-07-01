import { GUARANTEES } from "./landing-data";
import { GuaranteeIcon } from "./landing-icons";

export function GuaranteesSection() {
	return (
		<section className="border-bnc-line border-t bg-bnc-panel">
			<div className="mx-auto max-w-[1200px] px-8 py-20">
				<p className="mb-3 font-mono-code text-[11px] text-bnc-accent tracking-[0.08em]">
					{"// GARANTIAS"}
				</p>
				<h2 className="m-0 mb-[46px] max-w-[640px] font-display font-semibold text-[38px] tracking-[-0.02em]">
					Segurança de contratação, sem burocracia no caminho.
				</h2>
				<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
					{GUARANTEES.map((guarantee) => (
						<article
							className="rounded-md border border-bnc-line bg-bnc-bg p-6 transition-colors duration-150 ease-out hover:border-bnc-line-strong"
							key={guarantee.title}
						>
							<span className="mb-[18px] flex size-10 items-center justify-center rounded-md border border-bnc-line bg-bnc-surface">
								<GuaranteeIcon icon={guarantee.icon} />
							</span>
							<h3 className="mb-[9px] font-display font-semibold text-[17px]">
								{guarantee.title}
							</h3>
							<p className="m-0 text-[13.5px] text-bnc-muted leading-[1.55]">
								{guarantee.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
