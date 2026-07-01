import { SHOWCASE_ITEMS } from "./landing-data";
import { SectionHeading } from "./section-heading";
import { ShowcaseTile } from "./showcase-tile";

export function ShowcaseSection() {
	return (
		<section className="mx-auto max-w-[1200px] px-8 py-20" id="trabalhos">
			<SectionHeading
				className="mb-[34px]"
				description="Uma amostra do tipo de entrega que passa pela plataforma — de código em produção a filme finalizado."
				eyebrow="// TRABALHOS"
				title="Ofício que se vê no resultado."
			/>
			<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
				{SHOWCASE_ITEMS.map((item) => (
					<ShowcaseTile item={item} key={item.title} />
				))}
			</div>
		</section>
	);
}
