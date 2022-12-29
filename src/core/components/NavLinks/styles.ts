import { createStyles } from "@mantine/core";

const styles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");

	return {
		linkActive : {
			"&, &:hover" : {
				color           : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
				backgroundColor : theme.fn.variant({ variant : "light", color : theme.primaryColor })
					.background,
				[`& .${icon}`] : {
					color : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
				},
			},
		},

		activeParent : {
			"&, &:hover" : {
				color           : theme.colorScheme === "dark" ? theme.white : theme.black,
				backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
			},
		  },

		control : {
			...theme.fn.focusStyles(),
			marginTop      : "10px",
			fontWeight     : 600,
			display        : "block",
			width          : "100%",
			textDecoration : "none",
			borderRadius   : theme.radius.md,
			padding        : "10px 14px",
			color          : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
			fontSize       : theme.fontSizes.sm,

			"&:hover" : {
				color           : theme.colorScheme === "dark" ? theme.white : theme.black,
				backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],

				[`& .${icon}`] : {
					color : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
				},
			},
		},

		label : {
			color : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		},

		chevron : {
			transition : "transform 200ms ease",
		},
	};
});

export default styles;
