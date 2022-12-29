//External componets
import { useFormContext, Controller } from "react-hook-form";
import { TextInput, TextInputProps }  from "@mantine/core";
import { useFocusWithin }             from "@mantine/hooks";
//helpers
//styles
import styles from "./styles";

interface IRHFTextInput extends TextInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const RHFTextInput = ({ name, label, onChange, ...rest } :IRHFTextInput) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
					onChange && onChange(e); //TODO: Evitar que alguien elimine esto por accidente
					field.onChange(e); //TODO: Evitar que alguien elimine esto por accidente
				};
				return (
					<TextInput
						{...field}
						{...rest} //TODO: si yo mando la prop styles o id esperari que estas se encontraran dentro de mi inpt, sino, significa que no se está recibiendo el rest
						ref={ref}
						error={!!error} //TODO: validar que los estilos de los errores existan
						onChange={handleChange} //TODO: cuando no se manda la funcion del onchange solo se esperaría que el value de hk cambie, si se mande el onchage se esperaría que el valor en hk cambie y se muestre el evento
						label={error?.message ? error.message : label}  //TODO: Test - verificar que cuando exista un error, el label cambie.
						classNames={{
							icon    : classes.icon,
							input   : classes.input,
							invalid : classes.invalid,
							wrapper : `${error && classes.invalidWrapper}`,
							label   : `${classes.label} ${error && classes.labelError}`, //TODO: Test - verificar que cuando exista un error, el color del label.
						}}
					/>
				);
			}}
		/>
	);
};

export default RHFTextInput;
