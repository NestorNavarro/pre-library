import { Stack, Text, Title } from "@mantine/core";
import {
	TextProps,
	StackProps,
	MantineNumberSize,
	DefaultMantineColor,
} from "@mantine/core";
import { TitleProps } from "components/Typography";

export interface TitleGroupProps extends StackProps {
    text : string;
    title : string;
    textProps ?: TextProps;
    titleProps ?: TitleProps;
    size ?: MantineNumberSize;
    textColor ?: DefaultMantineColor;
    titleColor ?: DefaultMantineColor;
}

export const TitleGroup = ({
	text,
	title,
	textColor,
	titleColor,
	titleProps,
	textProps,
	size = "md",
	...rest
} : TitleGroupProps) => {
	return (
		<Stack data-testid="stack-group-stack" spacing={0} {...rest}>
			<Title data-testid="title-group-stack" size={size} color={titleColor} {...titleProps}>{title}</Title>
			<Text data-testid="text-group-stack" size={size} color={textColor} {...textProps}>{text}</Text>
		</Stack>
	);
};

export default TitleGroup;
