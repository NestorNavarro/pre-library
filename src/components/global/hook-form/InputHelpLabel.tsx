import { ReactNode }                           from "react";
import { Flex, FlexProps, Input, MantineSize } from "@mantine/core";
import HelpTooltip, { HelpTooltipProps }       from "./HelpTooltip";

export interface InputHelpLabelProps extends Omit<HelpTooltipProps, "label">{
	label : ReactNode;
    size ?: MantineSize;
	required ?: boolean;
    helpLabel ?: ReactNode;
	wrapperInputHelpLabel ?: FlexProps;
}

export const InputHelpLabel = ({
	size,
	label,
	required,
	wrapperInputHelpLabel,
	helpLabel,
	boxProps,
	...rest
} : InputHelpLabelProps) => {
	return (
		<>
			{
				helpLabel ?
					<Flex
						align="center"
						justify="space-between"
						{...wrapperInputHelpLabel}
					>
						  <Input.Label required={required} size={size}>{label}</Input.Label>
						<HelpTooltip
							size={size}
							label={helpLabel}
							boxProps={boxProps}
							{...rest}
						/>
					</Flex> : null
			}
		</>
	);
};

export default InputHelpLabel;
