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
					onChange && onChange(e);
					field.onChange(e);
				};
				return (
					<Switch
						{...field}
						id={name}
						name={name}
						checked={field.value}
						onChange={handleChange}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFSwitch;
