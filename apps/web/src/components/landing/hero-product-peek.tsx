"use client";

import { cn } from "@stack/ui/lib/utils";
import { useState } from "react";
import {
	DELIVERABLES,
	type DeliverableStatus,
	MILESTONES,
	type MilestoneTone,
	SHORTLIST_PROFILES,
} from "./landing-data";
import { CheckIcon, VerifiedBadge } from "./landing-icons";

const TABS = [
	{ id: "shortlist", label: "Shortlist" },
	{ id: "escopo", label: "Escopo" },
	{ id: "custodia", label: "Custódia" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const MILESTONE_AMOUNT_TONE: Record<MilestoneTone, string> = {
	approved: "text-bnc-accent",
	review: "text-bnc-fg",
	locked: "text-bnc-muted",
};

const DELIVERABLE_STATUS_TONE: Record<DeliverableStatus, string> = {
	done: "text-bnc-accent",
	"in-progress": "text-bnc-muted",
	todo: "text-bnc-muted",
};

function PanelLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="mb-2.5 font-mono-code text-[10px] text-bnc-muted tracking-[0.05em]">
			{children}
		</p>
	);
}

function ShortlistPanel() {
	return (
		<div className="p-3.5">
			<PanelLabel>3 PERFIS SELECIONADOS · REACT + NODE</PanelLabel>
			<ul className="flex flex-col gap-2">
				{SHORTLIST_PROFILES.map((profile) => (
					<li
						className="flex items-center gap-3 rounded-md border border-bnc-line bg-bnc-bg p-[11px] transition-colors duration-150 ease-out hover:border-bnc-line-strong"
						key={profile.initials}
					>
						<span className="flex size-[34px] shrink-0 items-center justify-center rounded-md bg-bnc-chip font-display font-semibold text-[13px] text-bnc-fg">
							{profile.initials}
						</span>
						<div className="min-w-0 flex-1">
							<p className="flex items-center gap-1.5 font-semibold text-[13px]">
								{profile.name}
								<VerifiedBadge />
							</p>
							<p className="font-mono-code text-[10px] text-bnc-muted">
								{profile.role}
							</p>
						</div>
						<span className="h-[5px] w-11 shrink-0 overflow-hidden rounded-[3px] bg-bnc-chip">
							<span
								className="block h-full bg-bnc-accent"
								style={{ width: `${profile.score}%` }}
							/>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function ScopePanel() {
	return (
		<div className="p-3.5">
			<PanelLabel>ENTREGÁVEIS DEFINIDOS</PanelLabel>
			<ul className="flex flex-col overflow-hidden rounded-md border border-bnc-line text-[13px]">
				{DELIVERABLES.map((item, index) => (
					<li
						className={cn(
							"flex items-center gap-2.5 bg-bnc-bg px-[11px] py-2.5",
							index > 0 && "border-bnc-line border-t"
						)}
						key={item.label}
					>
						{item.state === "done" ? (
							<span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] bg-bnc-accent text-bnc-bg">
								<CheckIcon className="size-2.5" strokeWidth={3.5} />
							</span>
						) : (
							<span className="size-4 shrink-0 rounded-[4px] border-[1.5px] border-bnc-line-strong" />
						)}
						{item.label}
						<span
							className={cn(
								"ml-auto font-mono-code text-[10px]",
								DELIVERABLE_STATUS_TONE[item.state]
							)}
						>
							{item.status}
						</span>
					</li>
				))}
			</ul>
			<div className="mt-3 flex gap-2">
				<div className="flex-1 rounded-md border border-bnc-line bg-bnc-bg px-3 py-2.5">
					<p className="font-mono-code text-[10px] text-bnc-muted">PRAZO</p>
					<p className="mt-0.5 font-display font-semibold text-base">
						3 semanas
					</p>
				</div>
				<div className="flex-1 rounded-md border border-bnc-line bg-bnc-bg px-3 py-2.5">
					<p className="font-mono-code text-[10px] text-bnc-muted">ORÇAMENTO</p>
					<p className="mt-0.5 font-display font-semibold text-base">
						R$ 8.400
					</p>
				</div>
			</div>
		</div>
	);
}

function EscrowPanel() {
	return (
		<div className="p-3.5">
			<PanelLabel>CONTA EM CUSTÓDIA · LEDGER</PanelLabel>
			<div className="mb-2.5 rounded-md border border-bnc-line bg-bnc-bg p-3.5">
				<p className="font-mono-code text-[10px] text-bnc-muted">
					RETIDO COM SEGURANÇA
				</p>
				<p className="mt-0.5 font-display font-semibold text-[30px] tracking-[-0.02em]">
					R$ 8.400
					<span className="font-normal text-[14px] text-bnc-muted">,00</span>
				</p>
			</div>
			<ul className="flex flex-col gap-1.5 font-mono-code text-[11px]">
				{MILESTONES.map((milestone) => (
					<li
						className="flex justify-between rounded-md border border-bnc-line bg-bnc-bg px-[11px] py-[9px]"
						key={milestone.label}
					>
						<span className="text-bnc-muted">{milestone.label}</span>
						<span className={MILESTONE_AMOUNT_TONE[milestone.tone]}>
							{milestone.amount}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

const PANELS: Record<TabId, () => React.ReactElement> = {
	shortlist: ShortlistPanel,
	escopo: ScopePanel,
	custodia: EscrowPanel,
};

export function HeroProductPeek() {
	const [activeTab, setActiveTab] = useState<TabId>("shortlist");
	const ActivePanel = PANELS[activeTab];

	return (
		<div className="overflow-hidden rounded-md border border-bnc-line bg-bnc-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
			{/* window chrome */}
			<div className="flex items-center gap-2 border-bnc-line border-b bg-bnc-surface-2 px-3.5 py-3">
				<span className="size-2.5 rounded-full bg-[#2f313b]" />
				<span className="size-2.5 rounded-full bg-[#2f313b]" />
				<span className="size-2.5 rounded-full bg-[#2f313b]" />
				<span className="ml-2 font-mono-code text-[11px] text-bnc-muted">
					bancada · projeto #A24
				</span>
				<span className="ml-auto rounded-[4px] bg-bnc-accent px-1.5 py-0.5 font-mono-code font-semibold text-[10px] text-bnc-bg">
					ATIVO
				</span>
			</div>

			{/* tabs */}
			<div
				aria-label="Etapas do projeto"
				className="flex gap-0.5 border-bnc-line border-b px-3 pt-2.5"
				role="tablist"
			>
				{TABS.map((tab) => {
					const isActive = tab.id === activeTab;
					return (
						<button
							aria-selected={isActive}
							className={cn(
								"relative cursor-pointer border-none bg-transparent px-3 pt-2 pb-3 font-mono-code text-[11px] transition-colors",
								isActive ? "text-bnc-fg" : "text-bnc-muted hover:text-bnc-fg"
							)}
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							role="tab"
							type="button"
						>
							{tab.label}
							{isActive ? (
								<span className="absolute inset-x-3 bottom-[-1px] h-0.5 rounded-sm bg-bnc-accent" />
							) : null}
						</button>
					);
				})}
			</div>

			<ActivePanel />
		</div>
	);
}
