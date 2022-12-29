import { createStyles } from "@mantine/core";

const styles = createStyles( ( theme ) => {
	return {
		  switch : {
			minWidth : "fit-content",
			maxWidth : "fit-content",

			"& .mantine-Switch-input" : {
				display : "none",
			},

			"& .mantine-Switch-track" : {
				minWidth        : "70px",
				maxWidth        : "70px",
				borderColor     : `${ theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2] } !important`,
				backgroundColor : `${ theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2] } !important`,

				"& svg" : {
					color : theme.colors.gray[6],
				},
			},

			"& .mantine-Switch-thumb" : {
				boxShadow       : "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)",
				borderColor     : `${ theme.colorScheme === "dark" ? theme.colors.dark[4] : "#fff" } !important`,
				backgroundColor : `${ theme.colorScheme === "dark" ? theme.colors.dark[4] : "#fff" } !important`,

				"& svg" : {
					color : `${ theme.colorScheme === "dark" ? "#fff" : "#000" } !important`,
				},
			},

			"& .mantine-Switch-trackLabel" : {
				padding  : "0",
				color    : "#000",
				minWidth : "40px",
			},
		},
	};
});

export default styles;
