import { createStyles } from "@mantine/core";

const styles = createStyles( ( theme ) => {
	return {
		  user : {
			color       : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
			paddingLeft : theme.spacing.sm,
			transition  : "background-color 100ms ease",
			borderLeft  : `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,

			"&:hover" : {
			  backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
			},

		  },

		  group : {
			display : "flex",
			gap     : "0 15px",
		  },

		  userInfo : {
			lineHeight : "155%",

			[theme.fn.smallerThan("md")] : {
				display : "none",
			},
		},
	};
});

export default styles;
