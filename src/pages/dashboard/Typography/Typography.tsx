import { useNavigate }     from "react-router-dom";
import { CirclesOutline }  from "@inprodi/icons";
import {
	Grid,
	Card,
	Text,
	Stack,
	TitleOrder,
	MantineNumberSize,
	Title as MantineTitle,
} from "@mantine/core";

import { TextGroup }                                from "components/Typography";
import { LinkProps, TitleAndTextProps, TitleProps } from "./interfaces";


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
					<Stack>
						<Text size="xl">Text xl</Text>
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
			<Grid.Col md={6}>
				<Card h={"100%"}>
					<Stack>
						<TextGroup leftIcon={<CirclesOutline />}>Text Icon</TextGroup>
						<TextGroup color="blue" rightIcon={<CirclesOutline />}>Text Icon -  Color blue</TextGroup>
						<TextGroup
							color="red"
							leftIcon={<CirclesOutline color="#BE4BDB"/>}
							rightIcon={<CirclesOutline color="#9775FA" />}
						>
							Text Icon - Custmos colors
						</TextGroup>
						<TextGroup
							wrapperProps={{
								p         : 15,
								gap       : 10,
								align     : "center",
								justify   : "end",
								bg        : "dark",
								direction : "column",
							}}
							leftIcon={<CirclesOutline />}
							rightIcon={<CirclesOutline />}
						>
							Text Icon - wrapperConfig
						</TextGroup>
					</Stack>
				</Card>
			</Grid.Col>
		</Grid>
	);
};



const Title = ({children, size = "md", color, ...rest} : TitleProps) => {
	const getOrderTitle = () => {
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
		<MantineTitle
			order={getOrderTitle()}
			sx={(theme) => ({
				color : color ?
					color : theme.colorScheme === "dark" ? "#fff" : "#000",
			})}
			{...rest}
		>
			{children}
		</MantineTitle>
	);
};

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
				width          : "fit-content",
			}}
		>
			{children}
		</Text>
	);
};

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

	return (
		<Stack spacing={0} {...rest}>
			<Title size={size} color={titleColor} {...titleProps}>{title}</Title>
			<Text size={size} color={textColor} {...textProps}>{text}</Text>
		</Stack>
	);
};

export default Typography;
