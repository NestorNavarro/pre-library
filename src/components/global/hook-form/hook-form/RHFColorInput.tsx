//External componets
import { useFormContext, Controller } from "react-hook-form";
// mantine
import { ColorInput, ColorInputProps } from "@mantine/core";
import { useFocusWithin }              from "@mantine/hooks";

import styles           from "./styles";
import { getInptLabel } from "helpers";

interface IRHFColorInput extends ColorInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label : string;
}

const DEFAULT_SWATCHES = [
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
];

const RHFColorInput = ({ name, label, swatches, ...rest } : IRHFColorInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}

			render={({ field, fieldState: { error } }) => (
				<ColorInput
					{...field}
					ref={ref}
					error={!!error}
					disallowInput
					withPicker={false}
					label={getInptLabel(label, error?.message)}
					classNames={{
						wrapper : `${error && classes.invalidWrapper}`,
						invalid : classes.invalid,
						icon    : classes.icon,
						input   : classes.input,
						label   : `${classes.label} ${error && classes.labelError}`,
					}}
					swatches={swatches ?? DEFAULT_SWATCHES}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFColorInput;
