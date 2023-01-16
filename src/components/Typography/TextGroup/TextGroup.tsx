import { Text }                       from "@mantine/core";
import { Flex, TextProps, FlexProps } from "@mantine/core";
import useStyles                      from "./TextGroup.styles";

export interface TextGroupProps extends TextProps {
    leftIcon ?: React.ReactNode;
    rightIcon ?: React.ReactNode;
	wrapperProps ?: FlexProps
}

export const TextGroup = ({
	color,
	children,
	leftIcon,
	rightIcon,
	wrapperProps,
	...rest
} : TextGroupProps) => {
	const { classes } = useStyles({ color });
	return (
		<Flex
			data-testid="text-group-flex"
			gap={20}
			align="center"
			className={classes.root}
			{...wrapperProps}
		>
			{leftIcon && leftIcon}
			<Text
				data-testid="text-group-text"
				color={color}
				{...rest}
			>
				{children}
			</Text>
			{rightIcon && rightIcon}
		</Flex>
	);
};

export default TextGroup;
