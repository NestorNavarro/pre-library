import { createStyles } from "@mantine/core";
const styles = createStyles((theme, _params ?: { focused : boolean; }, getRef?) => {
	const { rgba } = theme.fn;

	const isDark = theme.colorScheme === "dark";
	//colors Array
	const darkColors = theme.colors.dark;
	const grayColors = theme.colors.gray;
	const redColors =  theme.colors.red;
	const primaryColors =  theme.colors.primary;

	return ({
		label : {
			fontSize   : "12px",
			color      : isDark ? darkColors[0] : grayColors[7],
			fontWeight : 600,
		},
		labelError : {
			color : `${redColors[isDark ? 7 : 6]} !important`,
		},
		input : {
			fontWeight : 500,
			"&:focus"  : {
				backgroundColor : isDark ? rgba(primaryColors[8], 0.15) : primaryColors[0],
			},
			"&::placeholder" : {
				fontWeight : 400,
			},
		},
		invalid : {
			backgroundColor : isDark ? rgba(redColors[8], 0.15) : `${redColors[0]} !important`,
			borderColor     : isDark ? redColors[7] : `${redColors[6]} !important`,
			color           : isDark ? "#fff" : "#000",

			"&::placeholder" : {
				color : redColors[4],
			},
		},
		invalidWrapper : {
			[`& .${ getRef("icon") }`] : {
				color : isDark ? redColors[7] : `${redColors[6]} !important`,
			},
		},
		icon : {
			ref   : getRef("icon"),
			color : _params?.focused ? primaryColors[6] : undefined,
		},
		pswInput : {
			"&:focus-within" : {
				backgroundColor : isDark ? rgba(primaryColors[8], 0.15) : `${primaryColors[0]}`,
			},
		},
		invalidPassword : {
			backgroundColor : isDark ? rgba(redColors[8], 0.15) : `${redColors[0]} !important`,
			borderColor     : isDark ? redColors[7] : `${redColors[6]} !important`,

			[`& .${ getRef("innerInput") }`] : {
				border : "none",

				"$::placeholder" : {
					color : `${ redColors[4] } !important`,
				},
			},
		},
		innerInput : {
			ref        : getRef("innerInput"),
			fontWeight : 500,

			"&::placeholder" : {
				fontWeight : 400,
			},
		},
	});
});


export default styles;
