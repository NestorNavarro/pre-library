import { createStyles } from "@mantine/core";

const styles = createStyles((theme, _params : { focused ?: boolean; }, getRef?) => {
	const { rgba } = theme.fn;

	const isDark = theme.colorScheme === "dark";
	const darkColors = theme.colors.dark;
	const grayColors = theme.colors.gray;
	const redColors =  theme.colors.red;
	const primaryColors =  theme.colors.primary;

	return ({
		label : {
			width      : "100%",
			color      : isDark ? darkColors[0] : grayColors[7],
			fontWeight : 600,
			maxHeight  : 31,
			minHeight  : 21,
		},
		input : {
			fontWeight : 500,
			"&:focus"  : {
				backgroundColor : isDark ? rgba(primaryColors[8], 0.15) : primaryColors?.[0],
			},
			"&::placeholder" : {
				fontWeight : 400,
				color      : isDark  ? darkColors[3] : grayColors[5],
			},
		},
		invalid : {
			backgroundColor : isDark ? `${rgba(redColors[9], 0.4)} !important` : `${redColors[0]} !important`,
			borderColor     : isDark ? `${redColors[5]} !important` : `${redColors[6]} !important`,
			color           : `${redColors[isDark ? 5 : 6]} !important`,

			"&::placeholder" : {
				color : isDark  ? redColors[6] : redColors[5],
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
				backgroundColor : isDark ? rgba(primaryColors[8], 0.15) : primaryColors?.[0],
			},
		},
		invalidPassword : {
			backgroundColor : isDark ? `${rgba(redColors[9], 0.2)} !important` : `${redColors[0]} !important`,
			borderColor     : isDark ? `${redColors[5]} !important` : `${redColors[6]} !important`,
			color           : `${redColors[isDark ? 5 : 6]} !important`,

			"&::placeholder" : {
				color : isDark  ? redColors[6] : redColors[5],
			},

			[`& .${ getRef("innerInput") }`] : {
				border : "none",

				"$::placeholder" : {
					color : `${redColors[isDark ? 6 : 5]} !important`,
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
