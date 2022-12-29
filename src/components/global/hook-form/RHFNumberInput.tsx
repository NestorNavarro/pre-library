//External componets
import { useFormContext, Controller }    from "react-hook-form";
import { NumberInput, NumberInputProps } from "@mantine/core";
import { useFocusWithin }                from "@mantine/hooks";
import { getInptLabel }                  from "helpers";
//Own components
import styles from "./styles";
interface IRHFNumberInput extends NumberInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
}

const RHFNumberInput = ({
	name,
	label,
	...rest
} : IRHFNumberInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<NumberInput
					{...field}
					id={name}
					error={error ? true : false}
					classNames={{
						wrapper : `${error && classes.invalidWrapper}`,
						invalid : classes.invalid,
						icon    : classes.icon,
						input   : classes.input,
						label   : `${classes.label} ${error && classes.labelError}`,
					}}
					label={getInptLabel(label, error?.message)}
					hideControls
					ref={ref}
					{...rest}
				/>
			)}
		/>
	);
};

export default (RHFNumberInput);
