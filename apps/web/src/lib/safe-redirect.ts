/**
 * Sentinel base whose host is guaranteed never to resolve. A same-origin
 * relative path resolves back to this exact origin; anything that escapes it
 * (protocol-relative, backslash, or scheme-qualified input) resolves elsewhere.
 */
const SENTINEL_BASE = "https://x.invalid";

// Control characters (C0 range plus DEL) that the WHATWG URL parser silently
// strips; rejecting them up front is what closes the check-time vs use-time gap.
// biome-ignore lint/suspicious/noControlCharactersInRegex: matching these control chars is the intended behaviour, not a mistake.
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/;

/**
 * Returns `value` only when it is a rooted, same-origin in-app path; otherwise
 * `undefined`. Accepts the raw shape of a Next.js search param, which is
 * `string | string[]` at runtime (duplicate query keys arrive as an array).
 *
 * Validation mirrors the semantics the browser applies when the value reaches
 * `router.push` / `router.replace`. The value must start with `/` — this
 * rejects the empty string, scheme-qualified URLs (`https://host`,
 * `javascript:…`), and absolute URLs that merely target the sentinel host, none
 * of which are relative in-app paths. Control characters are then rejected (the
 * WHATWG URL parser would strip them, creating a check-time vs use-time
 * mismatch), and finally the value is resolved against a non-resolvable
 * sentinel base: if the resolved origin differs from that base, the input
 * escaped the current origin (e.g. `//host`, `/\host`) and is rejected.
 */
export function getSafeRedirect(
	value: string | string[] | undefined
): string | undefined {
	if (typeof value !== "string") {
		return;
	}

	if (!value.startsWith("/")) {
		return;
	}

	if (CONTROL_CHARS.test(value)) {
		return;
	}

	try {
		if (new URL(value, SENTINEL_BASE).origin !== SENTINEL_BASE) {
			return;
		}
	} catch {
		return;
	}

	return value;
}
