//External componets
import { useFormContext, Controller }      from "react-hook-form";
import { Select, SelectItem, SelectProps } from "@mantine/core";
import { useFocusWithin }                  from "@mantine/hooks";
//Own components
import { getInptLabel } from "helpers";
import styles           from "./styles";

interface IRHFSelect extends SelectProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
    clearable ?: boolean;
    data : (string | SelectItem)[];
}

const RHFSelect = ({ name, label, data,  clearable = true, ...rest } :IRHFSelect) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<>
					<Select
						id={name}
						searchable
						autoComplete="off"
						clearable={clearable}
						{...field}
						data={data}
						classNames={{
							wrapper : `${error && classes.invalidWrapper}`,
							invalid : classes.invalid,
							icon    : classes.icon,
							input   : classes.input,
							label   : `${classes.label} ${error && classes.labelError}`,
						}}
						label={getInptLabel(label, error?.message)}
						error={!!error}
						ref={ref}
						{...rest}
					/>
				</>
			)}
		/>
	);
};

export default RHFSelect;
