import { createFormHookContexts } from "@tanstack/react-form";

/**
 * Shared field/form contexts for the app's composed form hook.
 *
 * Kept in its own module so the bound field components (`text-field`,
 * `submit-button`) can consume the contexts without importing back from the
 * hook factory, avoiding a circular dependency.
 */
export const { fieldContext, formContext, useFieldContext, useFormContext } =
	createFormHookContexts();
