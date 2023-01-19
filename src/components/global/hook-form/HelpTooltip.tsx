import React, { ReactNode } from "react";
import { HelpOutline }      from "@inprodi/icons";
import {
	Tooltip,
	TooltipProps,
	ActionIcon,
	ActionIconProps,
	MantineNumberSize,
} from "@mantine/core";

export interface HelpTooltipProps {
    size ?: MantineNumberSize;
    helpLabel : ReactNode;
	toolTipProps ?: TooltipProps;
	actionIconProps ?: ActionIconProps;
}

const HelpTooltip = ({ helpLabel, toolTipProps, size, actionIconProps } : HelpTooltipProps) => {
	return (
		<Tooltip
			multiline
			maw={280}
			label={helpLabel}
			position="left-end"
			{...toolTipProps}
		>
			<ActionIcon variant="transparent" size="sm" {...actionIconProps}>
				<HelpOutline size={size}/>
			</ActionIcon>
		</Tooltip>
	);
};

export default HelpTooltip;
