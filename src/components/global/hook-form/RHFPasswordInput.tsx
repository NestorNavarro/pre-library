import React, { ReactNode }                               from "react";
import { useFormContext, Controller }                     from "react-hook-form";
import { MantineSize, PasswordInput, PasswordInputProps } from "@mantine/core";
import { useFocusWithin }                                 from "@mantine/hooks";
import { OpenedEyeOutline, ClosedEyeOutline }             from "@inprodi/icons";
import InputHelpLabel, { InputHelpLabelProps }            from "./InputHelpLabel";
import styles                                             from "./styles";

export interface RHFPasswordInputProps extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
    /**
    * Input's name being registered. [controller](https://react-hook-form.com/api/usecontroller/controller)
    */
	name : string;
    /**
    * Input's label
    */
	label ?: string;
    /**
    * An extra action to invoke when the inpt changes. Note: the library still control the input's value.
    */
	onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
    /**
    * Input description, displayed after label [PasswordInput](https://mantine.dev/core/password-input/)
    */
    description ?: string;
    /**
    * Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input [PasswordInput](https://mantine.dev/core/password-input/)
    */
    withAsterisk ?: boolean;
    /**
    * to change the inpt size.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
   size?: MantineSize;
	/**
    * to change the inpt radius.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
    radius?: MantineSize;
	/**
   * Tooltip label
   */
	help ?: ReactNode;
	/**
    * All the props to customize all the label and helper node.
    */
	helpLabelProps ?: Omit<InputHelpLabelProps, "label" | "helpLabel">;
}
export const RHFPasswordInput = ({
	name,
	size,
	help,
	label,
	withAsterisk,
	helpLabelProps,
	onChange,
	...rest
} : RHFPasswordInputProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	const showInputHelp = !!(help && label);

	const getVisibilityIcon = ({ reveal, size } : { reveal : boolean; size : number }) =>{
		return reveal ? <OpenedEyeOutline data-testid="opened-eye" fontSize={size} />
			: <ClosedEyeOutline data-testid="closed-eye" fontSize={size} />;
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
						name={name}
						size={size}
						error={error?.message}
						autoComplete="off"
						withAsterisk={!showInputHelp ? withAsterisk : false}
						onChange={handleOnChange}
						visibilityToggleIcon={getVisibilityIcon}
						label={
							showInputHelp ?
								<InputHelpLabel
									size={size}
									label={label}
									helpLabel={help}
									required={withAsterisk}
									{...helpLabelProps}
								/>
								:
								label
						}
						classNames={{
							icon       : classes.icon,
							input      : classes.pswInput,
							innerInput : classes.innerInput,
							invalid    : classes.invalidPassword,
							wrapper    : error && classes.invalidWrapper,
							label      : classes.label,
						}}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFPasswordInput;
