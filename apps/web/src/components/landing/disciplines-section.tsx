import { DisciplineCard } from "./discipline-card";
import { DISCIPLINES } from "./landing-data";
import { SectionHeading } from "./section-heading";

export function DisciplinesSection() {
	return (
		<section
			className="mx-auto max-w-[1200px] px-8 pt-16 pb-20"
			id="disciplinas"
		>
			<SectionHeading
				className="mb-[34px]"
				description="Cada disciplina tem curadoria, vocabulário e critérios próprios de avaliação. Você fala com quem entende do ofício."
				eyebrow="// DISCIPLINAS"
				title={
					<>
						Contrate por especialidade,
						<br />
						não por adivinhação.
					</>
				}
			/>
			<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
				{DISCIPLINES.map((discipline) => (
					<DisciplineCard discipline={discipline} key={discipline.index} />
				))}
			</div>
		</section>
	);
}
