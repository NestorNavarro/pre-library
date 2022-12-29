//External componets
import { useFormContext, Controller } from "react-hook-form";
import { Switch, SwitchProps }        from "@mantine/core";
//Own components

interface IRHFSwitch extends SwitchProps {
	name : string;
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

//TODO: replicar los test del intp text - menos los de los estilos
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
						{...rest}
						id={name}
						name={name}
						checked={field.value}
						onChange={handleChange}
					/>
				);
			}}
		/>
	);
};

export default RHFSwitch;
