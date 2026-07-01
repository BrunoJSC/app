import { createFormHook } from "@tanstack/react-form";

import { fieldContext, formContext } from "./form-contexts";
import { SubmitButton } from "./submit-button";
import { TextField } from "./text-field";

/**
 * App-wide composed form hook. Binds the shared field/form components so every
 * form gets consistent accessibility, styling, and type-safe field names
 * without repeating render-prop boilerplate.
 */
export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: { TextField },
	formComponents: { SubmitButton },
});
