import type { ShowcaseItem } from "./landing-data";
import { ShowcaseVisual } from "./showcase-visuals";

export function ShowcaseTile({ item }: { item: ShowcaseItem }) {
	return (
		<article className="overflow-hidden rounded-md border border-bnc-line bg-bnc-surface transition-all duration-150 ease-out hover:-translate-y-[3px] hover:border-bnc-line-strong">
			<ShowcaseVisual visual={item.visual} />
			<div className="flex items-center justify-between border-bnc-line border-t px-[15px] py-[13px]">
				<span className="font-semibold text-[13px]">{item.title}</span>
				<span className="font-mono-code text-[10px] text-bnc-muted">
					{item.label}
				</span>
			</div>
		</article>
	);
}
