import React           from "react";
import { HelpOutline } from "@inprodi/icons";
import {
	Box,
	BoxProps,
	Tooltip,
	TooltipProps,
	MantineNumberSize,
} from "@mantine/core";

export interface HelpTooltipProps extends Omit<TooltipProps, "children"> {
	boxProps ?: Omit<BoxProps, "children">;
    size ?: MantineNumberSize;
}

export const HelpTooltip = ({ boxProps, size, ...rest } : HelpTooltipProps) => {
	return (
		<Tooltip
			multiline
			maw={280}
			position="left-end"
			{...rest}
		>
			<Box style={{ cursor : "pointer"}} {...boxProps}>
				<HelpOutline size={size}/>
			</Box>
		</Tooltip>
	);
};

export default HelpTooltip;
