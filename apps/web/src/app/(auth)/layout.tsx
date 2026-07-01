import Image from "next/image";

import { BrandLogo } from "@/components/landing/brand-logo";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bnc-scope grid min-h-svh bg-bnc-bg font-body text-bnc-fg lg:grid-cols-2">
			<aside className="relative hidden flex-col justify-between overflow-hidden border-bnc-line border-r p-12 lg:flex">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(var(--color-bnc-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-bnc-line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_20%_10%,#000_0%,transparent_75%)]"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -top-32 left-10 size-96 [background:radial-gradient(circle,rgba(214,255,61,0.1),transparent_68%)]"
				/>

				<div className="relative">
					<BrandLogo />
				</div>

				<div className="relative max-w-md">
					<Image
						alt=""
						className="mb-8 h-auto w-full max-w-105"
						height={420}
						priority
						src="/illustrations/auth-designer.svg"
						unoptimized
						width={420}
					/>
					<h2 className="font-display font-semibold text-4xl text-bnc-fg leading-[1.1] tracking-[-0.03em]">
						Talento verificado, do briefing ao repasse.
					</h2>
					<p className="mt-5 text-base text-bnc-muted leading-relaxed">
						Escopo definido, pagamento em custódia e entrega acompanhada. Entre
						para continuar de onde parou.
					</p>
				</div>

				<p className="relative font-mono-code text-bnc-subtle text-xs tracking-[0.06em]">
					BANCADA — MARKETPLACE DE TALENTO CRIATIVO-TÉCNICO
				</p>
			</aside>

			<main className="flex items-center justify-center px-6 py-12 sm:px-10">
				<div className="w-full max-w-md">
					<div className="mb-10 lg:hidden">
						<BrandLogo />
					</div>
					{children}
				</div>
			</main>
		</div>
	);
}
