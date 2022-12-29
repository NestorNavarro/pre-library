import { createStyles } from "@mantine/core";

const styles = createStyles((theme,) => ({
	header : {
		padding      : theme.spacing.md,
		paddingTop   : 0,
		marginLeft   : -theme.spacing.md,
		marginRight  : -theme.spacing.md,
		color        : theme.colorScheme === "dark" ? theme.white : theme.black,
		borderBottom : `1px solid 
			${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},
	navbar : {
		borderRightColor : theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3],
	},
	links : {
		marginLeft  : -theme.spacing.md,
		marginRight : -theme.spacing.md,
	},
	footer : {
		marginLeft  : -theme.spacing.md,
		marginRight : -theme.spacing.md,
		borderTop   : `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
	},
}));

export default styles;
