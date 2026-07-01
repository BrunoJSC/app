import { CtaLink } from "./cta-link";
import { HeroProductPeek } from "./hero-product-peek";
import { HERO_HIGHLIGHTS } from "./landing-data";
import { ArrowRightIcon, CheckIcon } from "./landing-icons";
import { SearchInput } from "./search-input";

interface HeroSectionProps {
	/** Toggles the faint grid texture behind the hero. */
	showGridTexture?: boolean;
	/** Toggles the interactive project card on the right of the hero. */
	showProductPeek?: boolean;
}

export function HeroSection({
	showProductPeek = true,
	showGridTexture = true,
}: HeroSectionProps) {
	return (
		<section className="relative overflow-hidden">
			{showGridTexture ? (
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(var(--color-bnc-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-bnc-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_90%_70%_at_30%_0%,#000_0%,transparent_75%)]"
				/>
			) : null}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-[140px] left-[8%] size-[420px] [background:radial-gradient(circle,rgba(214,255,61,0.09),transparent_68%)]"
			/>

			<div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-8 pt-[88px] pb-24">
				<div className="min-w-[340px] max-w-[600px] flex-1 basis-[500px]">
					<div className="mb-[26px] inline-flex items-center gap-2 rounded-md border border-bnc-line px-[11px] py-1.5 font-mono-code text-[11px] text-bnc-muted tracking-[0.06em]">
						<span className="size-1.5 rounded-full bg-bnc-accent [animation:bnc-blink_2s_ease-in-out_infinite]" />
						MARKETPLACE DE TALENTO CRIATIVO-TÉCNICO
					</div>

					<h1 className="m-0 mb-[22px] text-balance font-display font-semibold text-[56px] leading-[1.02] tracking-[-0.03em]">
						Os profissionais que{" "}
						<span className="text-bnc-accent">
							constroem, editam e desenham
						</span>{" "}
						— prontos pro seu projeto.
					</h1>

					<p className="m-0 mb-[34px] max-w-[500px] text-[18px] text-bnc-muted leading-[1.55]">
						Programadores, editores de vídeo, designers e motion designers
						verificados. Escopo definido, pagamento em custódia e entrega
						acompanhada do briefing ao repasse.
					</p>

					<SearchInput className="mb-4 max-w-[520px]" />

					<div className="flex flex-wrap items-center gap-3.5">
						<CtaLink href="#cta">
							Publicar um projeto
							<ArrowRightIcon className="size-4" />
						</CtaLink>
						<CtaLink href="#disciplinas" variant="secondary">
							Explorar disciplinas
						</CtaLink>
					</div>

					<ul className="mt-[30px] flex flex-wrap items-center gap-5 font-mono-code text-[11px] text-bnc-muted">
						{HERO_HIGHLIGHTS.map((item) => (
							<li className="inline-flex items-center gap-[7px]" key={item}>
								<CheckIcon className="size-[13px] text-bnc-accent" />
								{item.toUpperCase()}
							</li>
						))}
					</ul>
				</div>

				{showProductPeek ? (
					<div className="min-w-[360px] max-w-[480px] flex-1 basis-[420px]">
						<HeroProductPeek />
					</div>
				) : null}
			</div>
		</section>
	);
}
