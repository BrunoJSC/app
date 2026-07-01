import { BrandLogo } from "./brand-logo";
import { CtaLink } from "./cta-link";
import { NAV_LINKS } from "./landing-data";

export function SiteNav() {
	return (
		<nav className="sticky top-0 z-50 border-bnc-line border-b bg-bnc-bg/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-4">
				<BrandLogo showBeta />

				<ul className="hidden items-center gap-[30px] text-sm md:flex">
					{NAV_LINKS.map((link) => (
						<li key={link.label}>
							<a
								className="text-bnc-muted no-underline transition-colors duration-150 ease-out hover:text-bnc-fg"
								href={link.href}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-3.5">
					<a
						className="font-medium text-bnc-fg text-sm no-underline transition-colors duration-150 ease-out hover:text-bnc-accent"
						href="/login"
					>
						Entrar
					</a>
					<CtaLink href="#cta" size="sm">
						Contratar talento
					</CtaLink>
				</div>
			</div>
		</nav>
	);
}
