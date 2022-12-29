//External componets
import { useFormContext, Controller } from "react-hook-form";
// mantine
import { Textarea, TextareaProps } from "@mantine/core";
import { useFocusWithin }          from "@mantine/hooks";
//Own components
import { getInptLabel } from "helpers";
import styles           from "./styles";
interface RHFTextArea extends TextareaProps, React.RefAttributes<HTMLTextAreaElement> {
	name : string;
	label ?: string;
	[key: string] : any;
}

const RHFTextArea = ({
	name,
	label = "",
	autosize = false,
	...rest
}: RHFTextArea) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Textarea
					id={name}
					{...field}
					ref={ref}
					classNames={{
						invalid      : classes.invalid,
						input        : classes.input,
						rightSection : error && classes.icon,
						label        : `${classes.label} ${error && classes.labelError}`,
					}}
					autosize={autosize}
					label={getInptLabel(label, error?.message)}
					error={!!error}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFTextArea;
