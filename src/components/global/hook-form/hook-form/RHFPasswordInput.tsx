import React from "react";
//External componets
import { useFormContext, Controller }        from "react-hook-form";
import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { useFocusWithin }                    from "@mantine/hooks";

//Own components
import { ClosedEyeOutline, OpenedEyeOutline, LockOutline } from "@inprodi/icons";
import { getInptLabel }                                    from "helpers";
import styles                                              from "./styles";

interface IRHFPasswordInput extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	onChange ?: (val : any) => void;
}

const RHFPasswordInput = ({
	name,
	label,
	onChange,
	...rest
} : IRHFPasswordInput) => {
	const { ref, focused } = useFocusWithin();

	const { classes } = styles({ focused });
	const { control } = useFormContext();

	const handleOnChange = (fieldOnChange : (val : any) => void ) => (event : any) => {
		if (typeof onChange === "function") {
			onChange(event);
		}
		fieldOnChange(event);
	};

	const getVisibilityIcon = ({ reveal, size } : { reveal : boolean; size : number }) =>
		reveal ? <ClosedEyeOutline fontSize={size} /> : <OpenedEyeOutline fontSize={size} />;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<PasswordInput
					{...field}
					ref={ref}
					id={name}
					error={!!error}
					autoComplete="off"
					icon={<LockOutline fontSize={14} />}
					visibilityToggleIcon={getVisibilityIcon}
					label={getInptLabel(label, error?.message)}
					classNames={{
						invalid    : classes.invalidPassword,
						wrapper    : error && classes.invalidWrapper,
						input      : classes.pswInput,
						innerInput : classes.innerInput,
						icon       : classes.icon,
						label      : `${classes.label} ${error && classes.labelError}`,
					}}
					onChange={handleOnChange(field.onChange)}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFPasswordInput;
