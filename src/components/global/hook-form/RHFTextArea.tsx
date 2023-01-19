import React, { ReactNode }                                   from "react";
import { useFormContext, Controller }                         from "react-hook-form";
import { InputVariant, MantineSize, Textarea, TextareaProps } from "@mantine/core";
import { useFocusWithin }                                     from "@mantine/hooks";
import { InputHelpLabel, InputHelpLabelProps }                from "./InputHelpLabel";
import styles                                                 from "./styles";

export interface RHFTextAreaProps extends TextareaProps, React.RefAttributes<HTMLTextAreaElement> {
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
	onChange ?: (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
    * Input's placeholder
    */
	placeholder?: string;
	/**
    * to change the inpt size.To see more: [textarea](https://mantine.dev/core/textarea/)
    */
    size?: MantineSize;
    /**
    * flag to autosize.To see more: [textarea](https://mantine.dev/core/textarea/)
    */
    autosize ?: boolean;
	/**
    * to change the inpt radius.To see more: [textarea](https://mantine.dev/core/textarea/)
    */
    radius?: MantineSize;
	/**
    * Input varaint type: To see more: [textarea](https://mantine.dev/core/textarea/)
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

export const RHFTextArea = ({
	name,
	size,
	help,
	withAsterisk,
	helpLabelProps,
	onChange,
	label = "",
	autosize = false,
	...rest
}: RHFTextAreaProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	const showInputHelp = !!(help && label);
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
						ref={ref}
						size={size}
						error={error?.message}
						autosize={autosize}
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
							input        : classes.input,
							invalid      : classes.invalid,
							rightSection : error && classes.icon,
							label        : classes.label,
						}}
						{...rest}
					/>
				);}
			}
		/>
	);
};

export default RHFTextArea;
