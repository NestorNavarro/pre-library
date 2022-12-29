import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
	divider : {
		paddingTop   : "10px",
		fontWeight   : 500,
		fontSize     : "14px",
		marginTop    : "16px",
		marginBottom : "10px",
		lineHeight   : "100%",
		color        : theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
	},
}));

export default styles;
