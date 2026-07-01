import { SearchIcon } from "./landing-icons";

interface SearchInputProps {
	/** Where the search query is submitted (native GET form, works without JS). */
	action?: string;
	className?: string;
	/** Visible label text; rendered visually hidden for accessibility. */
	label?: string;
	/** Query string parameter name for the typed term. */
	name?: string;
	placeholder?: string;
	submitLabel?: string;
}

export function SearchInput({
	action = "/buscar",
	name = "q",
	placeholder = "Busque por habilidade, disciplina ou profissional…",
	label = "Buscar talento",
	submitLabel = "Buscar",
	className,
}: SearchInputProps) {
	const inputId = "hero-search";

	return (
		<search className={className}>
			<form
				action={action}
				className="flex items-center gap-2 rounded-md border border-bnc-line bg-bnc-surface p-1.5 pl-3.5 transition-colors duration-150 ease-out focus-within:border-bnc-line-strong focus-within:ring-2 focus-within:ring-primary/40"
				method="get"
			>
				<label className="sr-only" htmlFor={inputId}>
					{label}
				</label>
				<SearchIcon className="size-[18px] shrink-0 text-bnc-muted" />
				<input
					autoComplete="off"
					className="min-w-0 flex-1 border-none bg-transparent text-[15px] text-bnc-fg outline-none placeholder:text-bnc-muted"
					id={inputId}
					name={name}
					placeholder={placeholder}
					type="search"
				/>
				<button
					className="inline-flex shrink-0 items-center gap-2 rounded-[5px] bg-primary px-4 py-2.5 font-semibold text-[14px] text-primary-foreground transition-all duration-150 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
					type="submit"
				>
					<SearchIcon className="size-4 sm:hidden" />
					<span className="hidden sm:inline">{submitLabel}</span>
				</button>
			</form>
		</search>
	);
}
