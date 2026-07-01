import { CtaLink } from "./cta-link";
import { ArrowRightIcon } from "./landing-icons";

export function CtaSection() {
	return (
		<section className="mx-auto max-w-[1200px] px-8 py-24" id="cta">
			<div className="relative overflow-hidden rounded-md border border-bnc-line bg-bnc-surface-2 px-10 py-[70px] text-center">
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--color-bnc-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-bnc-line)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_90%_at_50%_50%,#000,transparent_70%)]"
				/>
				<div className="relative">
					<p className="mb-5 font-mono-code text-[11px] text-bnc-accent tracking-[0.1em]">
						PRONTO PARA COMEÇAR
					</p>
					<h2 className="mx-auto mb-[18px] max-w-[640px] text-balance font-display font-semibold text-[46px] leading-[1.05] tracking-[-0.03em]">
						Monte a equipe do seu próximo projeto.
					</h2>
					<p className="mx-auto mb-[34px] max-w-[480px] text-[17px] text-bnc-muted leading-[1.5]">
						Publique um briefing gratuitamente e receba uma shortlist de
						profissionais verificados para a sua disciplina.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-3.5">
						<CtaLink href="/publicar" size="lg">
							Publicar um projeto
							<ArrowRightIcon className="size-4" />
						</CtaLink>
						<CtaLink href="/freelancer" size="lg" variant="secondary">
							Quero trabalhar como freelancer
						</CtaLink>
					</div>
				</div>
			</div>
		</section>
	);
}
