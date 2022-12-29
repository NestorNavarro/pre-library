import { createStyles } from "@mantine/core";

const styles = createStyles((theme, { checked }: { checked: boolean }) => ({
	button : {
		display    : "flex",
		alignItems : "center",
		transition : "background-color 150ms ease, border-color 150ms ease",
		border     : `1px solid ${
            checked ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 9 : 6] : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
        }`,
		borderRadius    : theme.radius.sm,
		backgroundColor : checked
			? theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][5], 0.3)
				: theme.colors[theme.primaryColor][1]
			: theme.colorScheme === "dark"
				? theme.colors.dark[8]
				: theme.white,
		color : checked ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 9 : 6] : "",

		"&:hover" : {
			backgroundColor : theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][4], 0.3)
				: theme.colors[theme.primaryColor][0],
			border : `1px solid ${
					theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 9 : 6]
				}`,
			color : theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 9 : 6],
		},
	},

	invalid : {
		transition      : "all 0.3s ease-in-out",
		backgroundColor : theme.colors.red[0],
		color           : `${theme.colors.red[7]} !important`,
		borderColor    	: `${theme.colors.red[7]} !important`,

		"& svg" : {
			color      : theme.colors.red[7],
			transition : "all 0.3s ease-in-out",
		},
	},

	body : {
		flex       : 1,
		marginLeft : theme.spacing.md,
	},
}));

export default styles;
