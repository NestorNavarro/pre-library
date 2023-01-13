import { Link as RouterLink, RelativeRoutingType } from "react-router-dom";

import {
	Grid,
	Card,
	Text,
	Stack,
	TitleProps,
	StackProps,
	TextProps,
	TitleOrder,
	MantineNumberSize,
	DefaultMantineColor,
	Title as MantineTitle,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";


const Typography = () => {
	return (
		<Grid>
			<Grid.Col md={6}>
				<Card>
					<Stack>
						<Title order={1}>This is h1 title</Title>
						<Title order={2}>This is h2 title</Title>
						<Title order={3}>This is h3 title</Title>
						<Title order={4}>This is h4 title</Title>
						<Title order={5}>This is h5 title</Title>
						<Title order={6}>This is h6 title</Title>
					</Stack>
				</Card>
			</Grid.Col>
			<Grid.Col md={6}>
				<Card h={"100%"}>
					<Text size="xl" >Text xl</Text>
					<Stack>
						<Text size="lg">Text lg</Text>
						<Text size="md">Text md</Text>
						<Text size="sm">Text sm</Text>
						<Text size="xs">Text xs</Text>
					</Stack>
				</Card>
			</Grid.Col>
			<Grid.Col md={6}>
				<Card h={"100%"}>
					<TitleAndText
						size="lg"
						title="This is a Title"
						text="This is the complementary text for the title"
					/>
				</Card>
			</Grid.Col>
			<Grid.Col md={6}>
				<Card h={"100%"}>
					<Link to="/" size="xl">
                        Route
					</Link>
				</Card>
			</Grid.Col>
			<RouterLink to={"/"} ></RouterLink>
		</Grid>
	);
};

const Title = ({children, ...rest} : TitleProps) => {
	return (
		<MantineTitle
			sx={(theme) => ({
				color : theme.colorScheme === "dark" ? "#fff" : "#000",
			})}
			{...rest}
		>
			{children}
		</MantineTitle>
	);
};

interface LinkProps extends TextProps {
    to : string;
    state ?: any;
    replace ?: boolean;
    preventScrollReset ?: boolean;
    relative ?: RelativeRoutingType;
    onClick ?: React.MouseEventHandler<HTMLDivElement>
}

const Link = ({
	to,
	state,
	replace,
	children,
	relative,
	preventScrollReset,
	color = "blue",
	onClick,
	...rest
} : LinkProps) => {
	const navigate  = useNavigate();
	const handleOnClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate(to, { relative, replace, preventScrollReset, state });
		onClick && onClick(e);
	};
	return (
		<Text
			{...rest}
			color={color}
			onClick={handleOnClick}
			style={{
				cursor         : "pointer",
				textDecoration : "underline",
			}}
		>
			{children}
		</Text>
	);
};

interface TitleAndTextProps extends StackProps {
    text : string;
    title : string;
    size ?: MantineNumberSize;
    titleColor ?: DefaultMantineColor;
    textColor ?: DefaultMantineColor;
    titleProps ?: TitleProps;
    textProps ?: TextProps;
}

const TitleAndText = ({
	text,
	title,
	textColor,
	titleColor,
	titleProps,
	textProps,
	size = "md",
	...rest
} : TitleAndTextProps) => {
	const getOrder = () => {
		const orders = {
			"xl" : 2,
			"lg" : 3,
			"md" : 4,
			"sm" : 5,
			"xs" : 6,
		} as { [key in MantineNumberSize] : TitleOrder };
		return orders[size];
	};
	return (
		<Stack spacing={0} {...rest}>
			<Title order={getOrder()} color={titleColor} {...titleProps}>{title}</Title>
			<Text size={size} color={textColor} {...textProps}>{text}</Text>
		</Stack>
	);
};

export default Typography;
