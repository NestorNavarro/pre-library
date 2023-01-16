import { createStyles, DefaultMantineColor } from "@mantine/core";

const styles = createStyles((theme, { color } : { color ?: DefaultMantineColor } ) => {
	return {
		root : {
			"& svg" : {
				color : color
					?  theme.fn.variant({ variant : "filled", color }).background
					: theme.colorScheme === "dark" ? theme.colors.dark[3]: theme.colors.gray[6],
			},
		},
	};
});

export default styles;
