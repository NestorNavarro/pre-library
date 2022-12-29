import { useMantineTheme } from "@mantine/core";
import { FieldError }      from "react-hook-form";
import { StylesConfig }    from "react-select";


const selectStyles = (isInvalid ?: FieldError) => {
	const theme = useMantineTheme();

	const isDarkTheme =  theme.colorScheme === "dark";
	//background
	const background = isDarkTheme ? theme.colors.dark[6] : "#fff";

	const invalidBackground = isDarkTheme ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0];

	const activeBackground = isDarkTheme ? theme.fn.rgba(theme.colors.primary[8], 0.15) : theme.colors.primary[0];
	//text
	const colorText =  isDarkTheme ? `${theme.colors.dark[0]} !important` : "#000";

	//text
	const colorTextPlaceholder = isDarkTheme ? `${theme.colors.dark[3]}` : `${theme.colors.dark[1]}`;

	const colorValues =  theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7];
	//border
	const invalidBorderColor =  isDarkTheme ? `${theme.colors.red[7]} !important` : `${theme.colors.red[6]} !important`;

	const borderColor = isDarkTheme ? `${theme.colors.dark[4]} !important` : `${theme.colors.gray[4]} !important`;


	const customStyles : StylesConfig<any> = {
		control : (provided) => ({
			...provided,
			"minWidth"         : "60px",
			"minHeight"        : "36px",
			"backgroundColor"  : "transparent",
			"outline"          : "0",
			"fontSize"         : "14px",
			"padding"          : "0",
			"WebkitAppearance" : "none",
			"MozAppearance"    : "none",
			"MsAppearance"     : "none",
			"appearance"       : "none",
			"width"            : "100%",

			color      : colorText,
			border     : "1px solid",
			background : isInvalid ?  invalidBackground : background,

			borderColor : isInvalid ? invalidBorderColor : borderColor,

			"&:active" : {
				backgroundColor : isInvalid ?  invalidBackground : activeBackground,
				borderColor     : isInvalid ? invalidBorderColor: `${theme.colors.primary[6]} !important`,
				boxShadow       : "none",
			},
			"&:focus-within" : {
				backgroundColor : isInvalid ?  invalidBackground : activeBackground,
				borderColor     : isInvalid ?  invalidBorderColor : `${theme.colors.primary[6]} !important`,
				boxShadow       : "none",
			},
		}),
		valueContainer : (provided) => ({
			...provided,
			padding : "2px 12px",
			cursor  : "text",
		}),
		singleValue : (provided) => ({
			...provided,
			fontWeight : 500,
			color      : colorText,
			lineHeight : "100%",
			margin     : 0,
			// fontWeight : "500",
			// fontSize   : "12px",
			// lineHeight : "100%",
		}),
		multiValueLabel : (provided) => ({
			...provided,
			color      : colorText,
			fontWeight : 500,
			"fontSize" : "14px",
		}),
		multiValue : (styles) => ({
			...styles,
			"display"         : "flex",
			"alignItems"      : "center",
			"height"          : "24px",
			"paddingLeft"     : "4px",
			"paddingRight"    : "0",
			"fontWeight"      : "500",
			"fontSize"        : "12px",
			"borderRadius"    : "4px",
			"cursor"          : "default",
			"userSelect"      : "none",
			"maxWidth"        : "calc(100% - 20px)",
			"margin"          : "3px 5px",
			"border"          : "solid 1px",
			"borderColor"     : isDarkTheme ? theme.colors.dark[4] : theme.colors.gray[4],
			"backgroundColor" : isDarkTheme ? theme.colors.dark[7] : "white",

		}),
		option : (styles) => ({
			...styles,
			fontSize     : "14px",
			padding      : "8px 12px",
			borderRadius : "4px",
			width        : "100%",
			margin       : "0",
			cursor       : "pointer",
			whiteSpace   : "nowrap",
			overflow     : "hidden",
			textOverflow : "ellipsis",
		}),
		indicatorSeparator : () => ({ display : "none"}),

		input : (styles) => ({
			...styles,
			color  : colorText,
			margin : 0,
		}),
		dropdownIndicator : (styles) => ({
			...styles,
			width     : "30px",
			padding   : "5px",
			color     : theme.colors.gray[6],
			"&:hover" : {
				color : theme.colors.gray[6],
			},
		}),
		loadingMessage : (styles) => ({
			...styles,
			color    : colorText,
			fontSize : "12px",
		}),
		placeholder : (styles) => ({
			...styles,
			color    : colorTextPlaceholder,
			fontSize : "14px",
		}),
		menuList : (styles) => ({
			...styles,
			"padding" : "4px !important",
		}),
		menu : (styles) => ({
			...styles,
			backgroundColor : background,
			border          : "solid 1px",
			borderColor     : isDarkTheme ? theme.colors.dark[4] : theme.colors.gray[2],
			boxShadow       : theme.shadows.md,
			borderRadius    : theme.radius.sm,
		}),
		multiValueRemove : (styles) => ({
			...styles,
			color : colorValues,

			"&:hover" : {
				backgroundColor : "transparent !important",
				cursor          : "pointer",
				color           : colorValues,
			},
		}),
		menuPortal : (styles) => ({
			...styles,
			zIndex : 9999,
		}),
		clearIndicator : (styles) => ({
			...styles,
			color  : theme.colors.red[6],
			cursor : "pointer",
		}),
	};
	return customStyles;
};

export default selectStyles;
