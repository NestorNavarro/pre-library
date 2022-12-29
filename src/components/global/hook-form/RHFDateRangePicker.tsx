import React                          from "react";
import { useFormContext, Controller } from "react-hook-form";
//icons
import { Calendar } from "inprodi-icons";
//mantine
import { Text } from "@mantine/core";
//helpers
import { getInptLabel }                          from "helpers";
import { DateRangePicker, DateRangePickerProps } from "@mantine/dates";

interface IRHFDateRangePicker extends DateRangePickerProps {
    name : string;
    label? : string;
    placeholder? : string;
}

const RHFDateRangePicker = ({
	name,
	label,
	placeholder = "Seleccionar...",
	...rest
} :IRHFDateRangePicker ) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<div >
						<Text>{getInptLabel(label, error?.message)}</Text>
						<DateRangePicker
							{...field}
							{...rest}
							locale="es"
							inputFormat="DD-MM-YYYY"
							placeholder={placeholder}
							icon={<Calendar fontSize={16} />}
						/>
					</div>
				);
			}}
		/>
	);
};

export default RHFDateRangePicker;
