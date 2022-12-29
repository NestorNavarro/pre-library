import { createStyles } from "@mantine/core";

export const styles = createStyles((theme) => {
	return {
		text : {
			fontWeight                   : 500,
			fontSize                     : "14px",
			lineHeight                   : "155%",
			color                        : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
			[theme.fn.smallerThan("sm")] : {
				fontSize : "12px",
			},
		},
		link : {
			color      : theme.colors.primary[6], // change to primary
			fontSize   : "12px",
			fontWeight : 600,
			lineHeight : "155%",
		},
		container : {
			display        : "flex",
			justifyContent : "center",
			alignItems     : "center",
			width          : "100vw",
			height         : "100vh",
		},
		card : {
			width                        : "450px",
			boxShadow                    : "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)",
			[theme.fn.smallerThan("sm")] : {
				width : "320px",
			},
		},
		title : {
			fontWeight : 600,
			fontSize   : "16px",
			lineHeight : "155%",
		},
	};
});
