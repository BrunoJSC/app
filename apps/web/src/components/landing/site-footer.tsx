import { BrandLogo } from "./brand-logo";
import { FOOTER_COLUMNS } from "./landing-data";

export function SiteFooter() {
	return (
		<footer className="border-bnc-line border-t">
			<div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-10 px-8 py-11">
				<div className="max-w-[280px]">
					<BrandLogo
						className="mb-3.5 gap-2.5"
						markClassName="size-[26px]"
						wordmarkClassName="text-[17px]"
					/>
					<p className="m-0 text-[13px] text-bnc-muted leading-[1.5]">
						O marketplace de talento criativo-técnico. Contrate por ofício,
						pague com segurança.
					</p>
				</div>
				<div className="flex flex-wrap gap-14 text-[13px]">
					{FOOTER_COLUMNS.map((column) => (
						<nav className="flex flex-col gap-[11px]" key={column.title}>
							<p className="mb-0.5 font-mono-code text-[10px] text-bnc-muted tracking-[0.06em]">
								{column.title.toUpperCase()}
							</p>
							{column.links.map((link) => (
								<a
									className="text-bnc-fg no-underline transition-colors duration-150 ease-out hover:text-bnc-accent"
									href={link.href}
									key={link.label}
								>
									{link.label}
								</a>
							))}
						</nav>
					))}
				</div>
			</div>
			<div className="border-bnc-line border-t">
				<div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-8 py-[18px] font-mono-code text-[11px] text-bnc-muted">
					<span>© 2026 BANCADA</span>
					<span>FEITO PARA QUEM CONSTRÓI</span>
				</div>
			</div>
		</footer>
	);
}
