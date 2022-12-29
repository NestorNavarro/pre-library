import React                          from "react";
import { useFormContext, Controller } from "react-hook-form";
//mantine
import { ColorPicker, ColorPickerProps, Text } from "@mantine/core";
//helpers
import { getInptLabel } from "helpers";

interface IRHFColorPicker extends ColorPickerProps, React.RefAttributes<HTMLDivElement> {
    name : string;
    label : string;
}

const RHFColorPicker = ({ name, label, ...rest } :IRHFColorPicker ) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div >
					<Text>{getInptLabel(label, error?.message)}</Text>
					<ColorPicker
						format="hex"
						{...field}
						withPicker={false}
						fullWidth
						swatches={[
							"#D9D9D9", "#BFBFBF", "#8C8C8C",
							"#FF4D4F", "#F5222D", "#CF1322",
							"#FF7A45", "#FA541C", "#D4380D",
							"#FFA940", "#FA8C16", "#D46B08",
							"#FFC53D", "#FAAD14", "#D48806",
							"#FFEC3D", "#FADB14", "#D4B106",
							"#73D13D", "#52C41A", "#389E0D",
							"#36CFC9", "#13C2C2", "#08979C",
							"#40A9FF", "#1890FF", "#096DD9",
							"#597EF7", "#2F54EB", "#1D39C4",
							"#9254DE", "#722ED1", "#531DAB",
							"#F759AB", "#EB2F96", "#C41D7F",
						]}
						{...rest}
					/>
					<Text align="center" style={{ marginTop : 5 }}>
						{field.value}
					</Text>
				</div>
			)}
		/>
	);
};

export default RHFColorPicker;
