//External componets
import { useFormContext, Controller } from "react-hook-form";
import { TextInput, TextInputProps }  from "@mantine/core";
import { useFocusWithin }             from "@mantine/hooks";
//Own components
import { getInptLabel } from "helpers";
import styles           from "./styles";

interface IRHFTextInput extends TextInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
}

const RHFTextInput = ({ name, label, ...rest } :IRHFTextInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextInput
					{...field}
					classNames={{
						wrapper : `${error && classes.invalidWrapper}`,
						invalid : classes.invalid,
						icon    : classes.icon,
						input   : classes.input,
						label   : `${classes.label} ${error && classes.labelError}`,
					}}
					label={getInptLabel(label, error?.message)}
					error={!!error}
					ref={ref}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFTextInput;
