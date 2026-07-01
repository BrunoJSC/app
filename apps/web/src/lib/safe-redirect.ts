/**
 * Regex for a safe in-app redirect target: an absolute path whose second
 * character is neither `/` nor `\`. This rejects protocol-relative URLs
 * (`//host`) and backslash variants (`/\host`) that browsers normalize to a
 * protocol-relative URL — the classic open-redirect bypasses.
 */
const SAFE_INTERNAL_PATH = /^\/(?![/\\])/;

/**
 * Returns `value` only when it is a safe, in-app absolute path; otherwise
 * `undefined`. Accepts the raw shape of a Next.js search param, which is
 * `string | string[]` at runtime (duplicate query keys arrive as an array).
 */
export function getSafeRedirect(
	value: string | string[] | undefined
): string | undefined {
	if (typeof value !== "string") {
		return;
	}

	return SAFE_INTERNAL_PATH.test(value) ? value : undefined;
}
