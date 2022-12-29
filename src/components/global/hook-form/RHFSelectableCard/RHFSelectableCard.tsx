import { Controller, useFormContext } from "react-hook-form";
//mantine
import { UnstyledButton } from "@mantine/core";
//styles
import styles from "./styles";

interface IRHFSelectableCard {
    name : string;
	value : string | number | boolean;
	size ?: number;
	width ?: number;
	height ?: number;
	checked : boolean;
	icon : React.ReactNode;
	justifyContent ?: string;
}

const RHFSelectableCard = ({
	name,
	icon,
	size,
	width,
	value,
	height,
	checked,
	justifyContent,
} : IRHFSelectableCard) => {
	const { control } = useFormContext();
	const { classes, cx } = styles({ checked });
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState : { error } }) => {

				return (
					<UnstyledButton
						style={{
							width  : width ?? size,
							height : height ?? size,
							justifyContent,
						}}
						value={field.value}
						onClick={() => field.onChange(value)}
						className={cx(classes.button, {
							[ classes.invalid ] : error,
						})}
					>
						{icon}
					</UnstyledButton>
				);
			}}
		/>
	);
};

export default RHFSelectableCard;
