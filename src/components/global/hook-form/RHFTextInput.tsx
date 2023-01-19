import React, { ReactNode }                                     from "react";
import { useFormContext, Controller }                           from "react-hook-form";
import { TextInput, TextInputProps, MantineSize, InputVariant } from "@mantine/core";
import { useFocusWithin }                                       from "@mantine/hooks";
import { InputHelpLabel, InputHelpLabelProps }                  from "./InputHelpLabel";
import styles                                                   from "./styles";

export interface RHFTextInputProps extends TextInputProps, React.RefAttributes<HTMLInputElement> {
	/**
    * Input's name being registered. [controller](https://react-hook-form.com/api/usecontroller/controller)
    */
	name : string;
	/**
    * Input's label
    */
	label ?: ReactNode;
	/**
    * An extra action to invoke when the inpt changes. Note: the library still control the input's value.
    */
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
	/**
    * Input's placeholder
    */
	placeholder?: string;
	/**
    * to change the inpt size.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
   size?: MantineSize;
	/**
    * to change the inpt radius.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
    radius?: MantineSize;
	/**
    * Input varaint type: To see more: [textInput](https://mantine.dev/core/text-input/)
    */
   variant ?: InputVariant;
   /**
   * Tooltip label
   */
	help ?: ReactNode;
	/**
    * All the props to customize all the label and helper node.
    */
	helpLabelProps ?: Omit<InputHelpLabelProps, "label" | "helpLabel">;
}

export const RHFTextInput = ({
	size,
	name,
	label,
	help,
	withAsterisk,
	helpLabelProps,
	onChange,
	...rest
} : RHFTextInputProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	const showInputHelp = !!(help && label);
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
						ref={ref}
						size={size}
						error={error?.message}
						withAsterisk={!showInputHelp ? withAsterisk : false}
						onChange={handleChange}
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
							icon    : classes.icon,
							input   : classes.input,
							invalid : classes.invalid,
							wrapper : `${error && classes.invalidWrapper}`,
							label   : classes.label,
						}}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFTextInput;
