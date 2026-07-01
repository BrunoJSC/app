import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	JetBrains_Mono,
	Space_Grotesk,
} from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Bancada — marketplace de talento criativo-técnico",
	description:
		"Programadores, editores de vídeo, designers e motion designers verificados. Escopo definido, pagamento em custódia e entrega acompanhada do briefing ao repasse.",
};

const fontVariables = [
	geistSans.variable,
	geistMono.variable,
	spaceGrotesk.variable,
	jetBrainsMono.variable,
].join(" ");

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={fontVariables} lang="pt-BR" suppressHydrationWarning>
			<head>
				{/* Fontshare faces (General Sans / Satoshi) — no next/font loader available. */}
				<link
					crossOrigin="anonymous"
					href="https://api.fontshare.com"
					rel="preconnect"
				/>
				<link
					href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
