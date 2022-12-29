import { useMantineTheme } from "@mantine/core";
import { FieldError }      from "react-hook-form";
import { StylesConfig }    from "react-select";


const selectStyles = (isInvalid ?: FieldError) => {
	const theme = useMantineTheme();

	const isDarkTheme =  theme.colorScheme === "dark";
	//background
	const background = isDarkTheme ? theme.colors.dark[5] : theme.colors.gray[1];

	const invalidBackground = isDarkTheme ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0];

	const activeBackground = isDarkTheme ? theme.fn.rgba(theme.colors.primary[8], 0.15) : theme.colors.primary[0];
	//text
	const colorText =  isDarkTheme ? `${theme.colors.dark[0]} !important` : "#000";

	//text
	const colorTextPlaceholder = isDarkTheme ? `${theme.colors.dark[3]}` : `${theme.colors.dark[1]}`;

	const colorValues =  theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7];
	//border
	const invalidBorderColor =  isDarkTheme ? `${theme.colors.red[7]} !important` : `${theme.colors.red[6]} !important`;

	const borderColor = isDarkTheme ? `${theme.colors.dark[5]} !important` : `${theme.colors.gray[1]} !important`;


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
		singleValue : (provided) => ({
			...provided,
			color      : colorValues,
			fontWeight : "500",
			fontSize   : ".875rem",
		}),
		multiValueLabel : (provided) => ({
			...provided,
			color      : colorValues,
			fontWeight : 500,
			"fontSize" : "12px",
		}),
		multiValue : (styles) => ({
			...styles,
			"display"         : "flex",
			"alignItems"      : "center",
			"height"          : "22px",
			"paddingLeft"     : "12px",
			"paddingRight"    : "0",
			"fontWeight"      : "500",
			"fontSize"        : "12px",
			"borderRadius"    : "4px",
			"cursor"          : "default",
			"userSelect"      : "none",
			"maxWidth"        : "calc(100% - 20px)",
			"margin"          : "calc(10px / 2 - 2px) calc(10px / 2)",
			"backgroundColor" : isDarkTheme ? theme.colors.dark[7] : theme.colors.gray[1],
		}),

		option : (styles) => ({
			...styles,
			fontSize     : "14px",
			padding      : "8px 12px",
			borderRadius : "4px",
			width        : "95%",
			margin       : "0 auto",
			cursor       : "pointer",
		}),

		input : (styles) => ({
			...styles,
			color : colorText,
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
		menu : (styles) => ({
			...styles,
			backgroundColor : background,
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
	};
	return customStyles;
};

export default selectStyles;
