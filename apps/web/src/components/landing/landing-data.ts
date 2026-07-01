/**
 * Static content for the Bancada landing page.
 *
 * Keeping copy and structure here (typed) lets the section components stay
 * presentational and makes future CMS/i18n extraction a single-file change.
 */

export interface NavLink {
	readonly href: string;
	readonly label: string;
}

export type DisciplineIconId =
	| "code"
	| "film"
	| "penTool"
	| "lineChart"
	| "video"
	| "box"
	| "audio"
	| "illustration";

export interface Discipline {
	readonly description: string;
	readonly icon: DisciplineIconId;
	readonly index: string;
	readonly name: string;
	readonly tags: readonly string[];
}

export interface Step {
	readonly description: string;
	readonly index: string;
	readonly title: string;
}

export type ShowcaseVisualId =
	| "code"
	| "timeline"
	| "interface"
	| "bezier"
	| "hex3d"
	| "waveform";

export interface ShowcaseItem {
	readonly label: string;
	readonly title: string;
	readonly visual: ShowcaseVisualId;
}

export type GuaranteeIconId = "lock" | "shieldCheck" | "fileCheck" | "zap";

export interface Guarantee {
	readonly description: string;
	readonly icon: GuaranteeIconId;
	readonly title: string;
}

export interface FooterColumn {
	readonly links: readonly NavLink[];
	readonly title: string;
}

export interface ShortlistProfile {
	readonly initials: string;
	readonly name: string;
	readonly role: string;
	/** Match strength 0–100, rendered as the accent progress bar. */
	readonly score: number;
}

export type DeliverableStatus = "done" | "in-progress" | "todo";

export interface Deliverable {
	readonly label: string;
	readonly state: DeliverableStatus;
	readonly status: string;
}

export type MilestoneTone = "approved" | "review" | "locked";

export interface Milestone {
	readonly amount: string;
	readonly label: string;
	readonly tone: MilestoneTone;
}

export const NAV_LINKS: readonly NavLink[] = [
	{ href: "#disciplinas", label: "Disciplinas" },
	{ href: "#como", label: "Como funciona" },
	{ href: "#trabalhos", label: "Trabalhos" },
	{ href: "/freelancer", label: "Sou profissional" },
];

export const HERO_HIGHLIGHTS: readonly string[] = [
	"Pagamento em custódia",
	"Perfis verificados",
	"Escopo claro",
];

export const DISCIPLINES: readonly Discipline[] = [
	{
		index: "01",
		name: "Programação",
		description:
			"Web, mobile, APIs e automações. Do MVP ao sistema em produção.",
		tags: ["React", "Node", "Swift"],
		icon: "code",
	},
	{
		index: "02",
		name: "Edição de vídeo",
		description:
			"Cortes, ritmo e finalização para conteúdo, campanhas e documentários.",
		tags: ["Premiere", "DaVinci"],
		icon: "film",
	},
	{
		index: "03",
		name: "Design de produto",
		description: "Interfaces, fluxos e design systems para web e mobile.",
		tags: ["Figma", "UX", "UI"],
		icon: "penTool",
	},
	{
		index: "04",
		name: "Motion design",
		description: "Animação, motion graphics e identidade em movimento.",
		tags: ["After Effects", "Lottie"],
		icon: "lineChart",
	},
	{
		index: "05",
		name: "Videomakers",
		description:
			"Captação, direção e produção — do roteiro à gravação em campo.",
		tags: ["Direção", "Captação"],
		icon: "video",
	},
	{
		index: "06",
		name: "Modelagem 3D",
		description: "Modelos, render e assets para produto, jogos e visualização.",
		tags: ["Blender", "C4D"],
		icon: "box",
	},
	{
		index: "07",
		name: "Áudio & som",
		description:
			"Trilha, mixagem, sound design e locução para vídeo e produto.",
		tags: ["Mix", "Trilha"],
		icon: "audio",
	},
	{
		index: "08",
		name: "Ilustração",
		description:
			"Arte autoral, ícones e ilustração editorial para marcas e produtos.",
		tags: ["Vetor", "Editorial"],
		icon: "illustration",
	},
];

export const STEPS: readonly Step[] = [
	{
		index: "01",
		title: "Descreva o escopo",
		description:
			"Publique o briefing com entregáveis, prazo e orçamento. A curadoria ajuda a traduzir o pedido em requisitos claros para o profissional certo.",
	},
	{
		index: "02",
		title: "Escolha o profissional",
		description:
			"Receba uma shortlist de perfis verificados. Converse, analise portfólio e feche marcos e valores antes de começar.",
	},
	{
		index: "03",
		title: "Acompanhe e libere",
		description:
			"O valor fica em custódia. A cada entrega aprovada você libera o marco, e o repasse ao profissional acontece em poucos dias.",
	},
];

export const SHOWCASE_ITEMS: readonly ShowcaseItem[] = [
	{ title: "Plataforma de pagamentos", label: "DEV · TS/NODE", visual: "code" },
	{ title: "Filme de campanha", label: "EDIÇÃO · DAVINCI", visual: "timeline" },
	{ title: "Dashboard SaaS", label: "DESIGN · FIGMA", visual: "interface" },
	{ title: "Identidade animada", label: "MOTION · AE", visual: "bezier" },
	{ title: "Render de produto", label: "3D · BLENDER", visual: "hex3d" },
	{ title: "Trilha e mixagem", label: "ÁUDIO · MIX", visual: "waveform" },
];

export const GUARANTEES: readonly Guarantee[] = [
	{
		title: "Pagamento em custódia",
		description:
			"O valor fica retido na plataforma e só é liberado quando você aprova a entrega. Ninguém trabalha sem garantia, ninguém paga no escuro.",
		icon: "lock",
	},
	{
		title: "Profissionais verificados",
		description:
			"Identidade, portfólio e histórico de trabalho são conferidos antes de qualquer perfil entrar na plataforma.",
		icon: "shieldCheck",
	},
	{
		title: "Escopo e entrega claros",
		description:
			"Todo projeto começa com entregáveis, marcos e prazos definidos por escrito. Sem mal-entendido no meio do caminho.",
		icon: "fileCheck",
	},
	{
		title: "Repasse rápido",
		description:
			"Depois da aprovação do marco, o profissional recebe em poucos dias — sem espera longa nem processo obscuro.",
		icon: "zap",
	},
];

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
	{
		title: "Plataforma",
		links: [
			{ href: "#disciplinas", label: "Disciplinas" },
			{ href: "#como", label: "Como funciona" },
			{ href: "#trabalhos", label: "Trabalhos" },
		],
	},
	{
		title: "Profissional",
		links: [
			{ href: "/freelancer", label: "Criar perfil" },
			{ href: "/verificacao", label: "Verificação" },
			{ href: "/repasses", label: "Repasses" },
		],
	},
	{
		title: "Empresa",
		links: [
			{ href: "/sobre", label: "Sobre" },
			{ href: "/contato", label: "Contato" },
			{ href: "/termos", label: "Termos" },
		],
	},
];

export const SHORTLIST_PROFILES: readonly ShortlistProfile[] = [
	{
		initials: "MR",
		name: "Marina Reis",
		role: "DEV FULLSTACK · REACT/NODE",
		score: 94,
	},
	{
		initials: "DV",
		name: "Diego Vasques",
		role: "DEV BACKEND · NODE/POSTGRES",
		score: 88,
	},
	{
		initials: "CP",
		name: "Camila Pires",
		role: "DEV FRONTEND · REACT/TS",
		score: 82,
	},
];

export const DELIVERABLES: readonly Deliverable[] = [
	{ label: "Landing page responsiva", status: "ENTREGUE", state: "done" },
	{
		label: "Integração de pagamento",
		status: "EM ANDAMENTO",
		state: "in-progress",
	},
	{ label: "Painel administrativo", status: "A INICIAR", state: "todo" },
];

export const MILESTONES: readonly Milestone[] = [
	{ label: "MARCO 01 · APROVADO", amount: "+ R$ 2.800", tone: "approved" },
	{ label: "MARCO 02 · EM REVISÃO", amount: "R$ 2.800", tone: "review" },
	{ label: "MARCO 03 · BLOQUEADO", amount: "R$ 2.800", tone: "locked" },
];
