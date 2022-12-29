import { createStyles } from "@mantine/core";

const styles = createStyles((theme, _params ?: { focused : boolean; }, getRef?) => ({
	label : {
		fontSize   : "12px",
		color      : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		fontWeight : 600,
	},
	labelError : {
		color : `${theme.colors.red[theme.colorScheme === "dark" ? 7 : 6]} !important`,
	},
	input : {
		fontWeight : 500,
		"&:focus"  : {
			backgroundColor :
				theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.primary[8], 0.15) : `${theme.colors.primary[0]}`,
		},
		"&::placeholder" : {
			fontWeight : 400,
		},
	},
	invalid : {
		backgroundColor :
			theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.red[8], 0.15) : `${theme.colors.red[0]} !important`,
		borderColor :
			theme.colorScheme === "dark" ? theme.colors.red[7] : `${theme.colors.red[6]} !important`,
		color : theme.colorScheme === "dark" ? "#fff" : "#000",

		"&::placeholder" : {
			color : theme.colors.red[4],
		},
	},
	invalidWrapper : {
		[`& .${ getRef("icon") }`] : {
			color : theme.colorScheme === "dark" ? theme.colors.red[7] : `${theme.colors.red[6]} !important`,
		},
	},
	icon : {
		ref   : getRef("icon"),
		color : _params?.focused ? theme.colors.primary[6] : "",
	},
	pswInput : {
		"&:focus-within" : {
			backgroundColor :
				theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.primary[8], 0.15) : `${theme.colors.primary[0]}`,
		},
	},
	invalidPassword : {
		backgroundColor :
			theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.red[8], 0.15) : `${theme.colors.red[0]} !important`,
		borderColor :
			theme.colorScheme === "dark" ? theme.colors.red[7] : `${theme.colors.red[6]} !important`,
		[`& .${ getRef("innerInput") }`] : {
			border           : "none",
			"$::placeholder" : {
				color : `${ theme.colors.red[4] } !important`,
			},
		},
	},
	innerInput : {
		ref              : getRef("innerInput"),
		fontWeight       : 500,
		"&::placeholder" : {
			fontWeight : 400,
		},
	},
	rating : {
		gap : "5px",
	},
}));

export default styles;
