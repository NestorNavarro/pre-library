//External componets
import { useFormContext, Controller } from "react-hook-form";
// mantine
import { Textarea, TextareaProps } from "@mantine/core";
import { useFocusWithin }          from "@mantine/hooks";
//Own components
import styles           from "./styles";
interface RHFTextArea extends TextareaProps, React.RefAttributes<HTMLTextAreaElement> {
	name : string;
	label ?: string;
	autosize ?: boolean;
	onChange ?: (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
}
//TODO: test- repiclar los test del inpt
const RHFTextArea = ({
	name,
	onChange,
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
			render={({ field, fieldState: { error } }) => {
				const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
					onChange && onChange(e);
					field.onChange(e);
				};
				return (
					<Textarea
						{...field}
						{...rest}
						ref={ref}
						error={!!error}
						autosize={autosize}
						onChange={handleChange}
						label={error?.message ? error.message : label}
						classNames={{
							input        : classes.input,
							invalid      : classes.invalid,
							rightSection : error && classes.icon,
							label        : `${classes.label} ${error && classes.labelError}`,
						}}
					/>
				);}
			}
		/>
	);
};

export default RHFTextArea;
