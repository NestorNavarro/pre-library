import React                          from "react";
import { useFormContext, Controller } from "react-hook-form";
//mantine
import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { useFocusWithin }                    from "@mantine/hooks";
//icons
import { OpenedEye, ClosedEye } from "inprodi-icons";
//Own components
import { getInptLabel } from "helpers";
//styles
import styles from "./styles";

interface IRHFPasswordInput extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}
//TODO: all inpts text test
const RHFPasswordInput = ({
	name,
	label,
	onChange,
	...rest
} : IRHFPasswordInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();

	const getVisibilityIcon = ({ reveal, size } : { reveal : boolean; size : number }) =>
		reveal ? <OpenedEye fontSize={size} /> : <ClosedEye fontSize={size} />; //TODO: test this

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
					onChange && onChange(event);
					field.onChange(event);
				};
				return (
					<PasswordInput
						{...field}
						{...rest}
						ref={ref}
						error={!!error}
						autoComplete="off"
						onChange={handleOnChange}
						icon={<OpenedEye fontSize={14} />}
						visibilityToggleIcon={getVisibilityIcon}
						label={getInptLabel(label, error?.message)}
						classNames={{
							icon       : classes.icon,
							input      : classes.pswInput,
							innerInput : classes.innerInput,
							invalid    : classes.invalidPassword,
							wrapper    : error && classes.invalidWrapper,
							label      : `${classes.label} ${error && classes.labelError}`,
						}}
					/>
				);
			}}
		/>
	);
};

export default RHFPasswordInput;
