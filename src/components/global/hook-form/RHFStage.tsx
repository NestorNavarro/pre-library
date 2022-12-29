import { Box }                        from "@mantine/core";
import React                          from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Error, Label }               from "../LabelInp";
import Stage                          from "../Stage";

interface RHFStageProps {
	w ?: string | number;
    name : string;
    label?: string;
    paramUrl : string;
}

const RHFStage = ({
	w,
	name,
	label,
	paramUrl,
} : RHFStageProps ) => {
	const { control } = useFormContext();
	return (
		<Box>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => {
					return (
						<>
							{!error ? <Label label={label} /> : <Error error={error?.message ?? "Este campo es requerido"} /> }
							<Stage value={field.value} onChange={field.onChange} paramUrl={paramUrl} width={w}/>
						</>
					);
				}}
			/>
		</Box>
	);
};

export default RHFStage;
