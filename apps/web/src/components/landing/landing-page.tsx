import { CtaSection } from "./cta-section";
import { DisciplinesSection } from "./disciplines-section";
import { GuaranteesSection } from "./guarantees-section";
import { HeroSection } from "./hero-section";
import { ShowcaseSection } from "./showcase-section";
import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";
import { StepsSection } from "./steps-section";

interface LandingPageProps {
	showGridTexture?: boolean;
	showProductPeek?: boolean;
}

export function LandingPage({
	showProductPeek = true,
	showGridTexture = true,
}: LandingPageProps) {
	return (
		<div className="bnc-scope min-h-svh overflow-x-hidden bg-bnc-bg font-body text-bnc-fg">
			<SiteNav />
			<main>
				<HeroSection
					showGridTexture={showGridTexture}
					showProductPeek={showProductPeek}
				/>
				<DisciplinesSection />
				<StepsSection />
				<ShowcaseSection />
				<GuaranteesSection />
				<CtaSection />
			</main>
			<SiteFooter />
		</div>
	);
}
