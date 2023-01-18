import { ReactNode }                  from "react";
import { HelpOutline }                from "@inprodi/icons";
import {
	ActionIcon, Text,
	Tooltip, Flex, MantineNumberSize,
} from "@mantine/core";

interface InputHelpLabelProps {
    label : ReactNode;
    helpLabel ?: ReactNode;
    size ?: MantineNumberSize;
}

export const InputHelpLabel = ({
	size,
	label,
	helpLabel,
} : InputHelpLabelProps) => {
	return (
		<>
			{
				helpLabel ?
					<Flex justify="space-between" align="center" w="100%">
						<Text size={size}>{label}</Text>
						<Tooltip
							multiline
							width={120}
							label={helpLabel}
						>
							<ActionIcon variant="transparent" size={"sm"}>
								<HelpOutline size={size}/>
							</ActionIcon>
						</Tooltip>
					</Flex> : null
			}
		</>
	);
};
export default InputHelpLabel;
