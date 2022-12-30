//External componets
import { useFormContext, Controller } from "react-hook-form";
import { TextInput, TextInputProps }  from "@mantine/core";
import { useFocusWithin }             from "@mantine/hooks";
//helpers
//styles
import styles from "./styles";

interface IRHFTextInput extends TextInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const RHFTextInput = ({ name, label, onChange, ...rest } :IRHFTextInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
					onChange && onChange(e);
					field.onChange(e);
				};
				return (
					<TextInput
						{...field}
						{...rest}
						ref={ref}
						error={!!error}
						onChange={handleChange}
						label={error?.message ? error.message : label}
						classNames={{
							icon    : classes.icon,
							input   : classes.input,
							invalid : classes.invalid,
							wrapper : `${error && classes.invalidWrapper}`,
							label   : `${classes.label} ${error && classes.labelError}`,
						}}
					/>
				);
			}}
		/>
	);
};

export default RHFTextInput;
