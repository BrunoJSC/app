import type { Discipline } from "./landing-data";
import { DisciplineIcon } from "./landing-icons";

export function DisciplineCard({ discipline }: { discipline: Discipline }) {
	return (
		<article className="rounded-md border border-bnc-line bg-bnc-surface p-[18px] transition-all duration-150 ease-out hover:-translate-y-[3px] hover:border-bnc-line-strong hover:bg-bnc-elevated">
			<div className="mb-4 flex items-center justify-between">
				<span className="flex size-9 items-center justify-center rounded-md border border-bnc-line bg-bnc-bg">
					<DisciplineIcon icon={discipline.icon} />
				</span>
				<span className="font-mono-code text-[11px] text-bnc-muted">
					{discipline.index}
				</span>
			</div>
			<h3 className="mb-1.5 font-display font-semibold text-[17px]">
				{discipline.name}
			</h3>
			<p className="mb-3.5 text-[13px] text-bnc-muted leading-[1.45]">
				{discipline.description}
			</p>
			<ul className="flex flex-wrap gap-1.5 font-mono-code text-[10px] text-bnc-muted">
				{discipline.tags.map((tag) => (
					<li
						className="rounded-[4px] border border-bnc-line px-1.5 py-0.5"
						key={tag}
					>
						{tag}
					</li>
				))}
			</ul>
		</article>
	);
}
