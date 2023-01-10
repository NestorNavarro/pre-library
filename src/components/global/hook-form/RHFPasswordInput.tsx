import React                                 from "react";
import { useFormContext, Controller }        from "react-hook-form";
import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { useFocusWithin }                    from "@mantine/hooks";
import { OpenedEye, ClosedEye }              from "@inprodi/icons";
import styles                                from "./styles";

interface RHFPasswordInputProps extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}
const RHFPasswordInput = ({
	name,
	label,
	onChange,
	...rest
} : RHFPasswordInputProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();

	const getVisibilityIcon = ({ reveal, size } : { reveal : boolean; size : number }) =>{
		return reveal ? <OpenedEye data-testid="opened-eye" fontSize={size} />
			: <ClosedEye data-testid="closed-eye" fontSize={size} />;
	};

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
						data-testid="password"
						ref={ref}
						error={!!error}
						autoComplete="off"
						onChange={handleOnChange}
						icon={<OpenedEye fontSize={14} />}
						visibilityToggleIcon={getVisibilityIcon}
						label={error?.message ? error.message : label}
						classNames={{
							icon       : classes.icon,
							input      : classes.pswInput,
							innerInput : classes.innerInput,
							invalid    : classes.invalidPassword,
							wrapper    : error && classes.invalidWrapper,
							label      : `${classes.label} ${error && classes.labelError}`,
						}}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFPasswordInput;
