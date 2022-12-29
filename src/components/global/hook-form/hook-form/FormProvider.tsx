import { ReactNode } from "react";
// form
import { FormProvider as Form, UseFormReturn} from "react-hook-form";

export interface IFormProvider {
    children : ReactNode | ReactNode[];
    onSubmit : () => void;
    methods : UseFormReturn<any, any>;
}

export default function FormProvider({ children, onSubmit, methods } : IFormProvider) {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	);
}
