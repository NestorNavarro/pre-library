import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {


		iconLink : {
			width          : 40,
			height         : 35,
			borderRadius   : theme.radius.md,
			display        : "flex",
			alignItems     : "center",
			justifyContent : "center",
			marginTop      : "10px",

			color : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

			"&:hover" : {
			  backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
			},
		  },

		  active : {
			"&, &:hover" : {
			  backgroundColor : theme.fn.variant({ variant : "light", color : theme.primaryColor }).background,
			  color           : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
			},
		  },

		  activeParent : {
			"&, &:hover" : {
				color           : theme.colorScheme === "dark" ? theme.white : theme.black,
				backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
			},
		  },
	};
});

export default styles;
