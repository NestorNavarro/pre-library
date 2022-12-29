import { MediaQuery, Image, Text } from "@mantine/core";
import logo                        from "resources/imgs/logo.png";
import { createStyles }            from "@mantine/core";

const styles = createStyles( (theme) => {
	return {
		image : {
			border       : `6px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1]}`,
			borderRadius : "8px",
			background   : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
			padding      : "2px",
		},
		text : {
			color      : theme.colorScheme === "dark" ? "#fff" : "#000",
			fontSize   : "16px",
			fontWeight : 600,
			lineHeight : "100%",
		},
	};
});

export default function Logo() {
	const { classes } = styles();
	return (
		<>
			<Image
				classNames={{
					image : classes.image,
				}}
				width={44}
				height={44}
				src={logo}
				alt="logo"
			/>
			<MediaQuery smallerThan="md" styles={{ display : "none" }}>
				<Text className={classes.text}>Empresa</Text>
			</MediaQuery>

		</>
	);
}
