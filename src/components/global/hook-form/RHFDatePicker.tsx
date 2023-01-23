import React                          from "react";
import { useFormContext, Controller } from "react-hook-form";
//icons
import { CalendarOutline } from "@inprodi/icons";
//helpers
import { DatePicker, DatePickerProps } from "@mantine/dates";
import styles                          from "./styles";

interface IRHFDatePicker extends DatePickerProps {
    name : string;
    label? : string;
    placeholder? : string;
}

const RHFDatePicker = ({
	name,
	label,
	placeholder = "Seleccionar...",
	...rest
} :IRHFDatePicker ) => {
	const { classes } = styles({ focused : false });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<DatePicker
						{...field}
						locale="es"
						label={label}
						classNames={{
							wrapper : `${error && classes.invalidWrapper}`,
							invalid : classes.invalid,
							icon    : classes.icon,
							input   : classes.input,
							label   : classes.label,
						}}
						error={error?.message}
						inputFormat="DD-MM-YYYY"
						placeholder={placeholder}
						icon={<CalendarOutline fontSize={16} />}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFDatePicker;
