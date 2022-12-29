import { useFormContext, Controller } from "react-hook-form";

import { Checkbox, CheckboxProps } from "@mantine/core";

interface IRHFCheckbox extends CheckboxProps {
    name : string;
}

const RHFCheckbox = ({ name, ...rest } : IRHFCheckbox ) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Checkbox
					id={name}
					checked={field.value}
					{...field}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFCheckbox;
