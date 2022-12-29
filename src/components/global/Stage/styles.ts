import { createStyles } from "@mantine/core";
import { StylesParams } from "./stage.interfaces";



const styles = createStyles((theme, { value, stage, index, stageNumber, width : widthParam } : StylesParams ) => {
	const MAX_STAGE = 10;
	const isDark = theme.colorScheme === "dark";

	const emptyColor = isDark ? theme.colors.dark[2] : theme.colors.gray[2];
	const emptyBorderColor = isDark ? theme.colors.dark[3] : theme.colors.gray[3];

	const diff = MAX_STAGE - stageNumber;
	const colors = theme.colors.orange.filter((_, index) => index >= diff);

	const backgroundColor = value >= stage.percentage ? colors[index] : emptyColor;
	const borderColor = value >= stage.percentage ? colors[index+1] : emptyBorderColor;

	const MIN_PIXEL = 19;
	const width = (MAX_STAGE / stageNumber) * MIN_PIXEL;

	let borderRadius = "0px 0px 0px 0px";

	if(index === 0) borderRadius = "4px 0px 0px 4px";

	if(index === stageNumber-1) borderRadius = "0px 4px 4px 0px";

	return {
		root : {
			width       : widthParam ?? width,
			borderRadius,
			backgroundColor,
			height      : 18,
			marginRight : 3,
			cursor      : "pointer",
			border      : `1px solid ${borderColor}`,
		},
	};
});

export default styles;
