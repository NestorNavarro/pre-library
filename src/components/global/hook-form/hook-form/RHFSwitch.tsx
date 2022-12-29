//External componets
import { useFormContext, Controller } from "react-hook-form";
import { Switch, SwitchProps }        from "@mantine/core";
//Own components

interface IRHFSwitch extends SwitchProps {
	name : string;
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const RHFSwitch = ({ name, onChange, ...rest } : IRHFSwitch ) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
					if (typeof(onChange) === "function") {
						onChange(e);
					}
					field.onChange(e);
				};
				return (
					<Switch
						{...field}
						{...rest}
						onChange={handleChange}
						checked={field.value}
						id={name}
						name={name}
					/>
				);
			}}
		/>
	);
};

export default RHFSwitch;
