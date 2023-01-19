import { ReactNode }                           from "react";
import { Flex, FlexProps, Input, MantineSize } from "@mantine/core";
import HelpTooltip, { HelpTooltipProps }       from "./HelpTooltip";

export interface InputHelpLabelProps extends Omit<HelpTooltipProps, "helpLabel"> {
	label : ReactNode;
    size ?: MantineSize;
	required ?: boolean;
    helpLabel ?: ReactNode;
	flexProps ?: FlexProps;
}

export const InputHelpLabel = ({
	size,
	label,
	required,
	flexProps,
	helpLabel,
	toolTipProps,
	actionIconProps,
} : InputHelpLabelProps) => {
	return (
		<>
			{
				helpLabel ?
					<Flex
						align="center"
						justify="space-between"
						{...flexProps}
					>
						  <Input.Label required={required} size={size}>{label}</Input.Label>
						<HelpTooltip
							size={size}
							helpLabel={helpLabel}
							toolTipProps={toolTipProps}
							actionIconProps={actionIconProps}
						/>
					</Flex> : null
			}
		</>
	);
};

export default InputHelpLabel;
