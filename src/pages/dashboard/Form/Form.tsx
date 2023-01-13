import * as Yup                                                 from "yup";
import { useForm }                                              from "react-hook-form";
import { yupResolver }                                          from "@hookform/resolvers/yup";
import { Box, Button, Grid, Group, MantineSize, Stack, Avatar } from "@mantine/core";

import {
	RHFTextInput,
	RHFTextArea,
	RHFSwitch,
	FormProvider,
	RHFPasswordInput,
} from "@inprodi/core";
import {
	RHFTextInput as Inpt,
	RHFCheckbox,
	RHFColorInput,
	RHFDatePicker,
	RHFDateRangePicker,
} from "components/global/hook-form";
import { useToggle } from "@mantine/hooks";

const Form = () => {
	const [size, toggleSize] = useToggle(["lg", "md", "sm", "xs", "xl"]);
	const schema = Yup.object().shape({
		textinpt : Yup.string()
			.required("El campo es requerido"),
		password : Yup.string()
			.required("El campo es requerido"),
		textArea : Yup.string()
			.required("El campo es requerido"),
		checkbox : Yup.boolean()
			.required("El campo es requerido"),
		colorPicker : Yup.string()
			.required("El campo es requerido"),
		datePicker : Yup.string()
			.required("El campo es requerido"),
		rangePicker : Yup.string()
			.required("El campo es requerido"),
	});
	const methods = useForm({
		defaultValues : {
			switch      : false,
			textinpt    : "",
			password    : "",
			textArea    : "",
			checkbox    : undefined,
			colorPicker : "",
			datePicker  : "",
			rangePicker : "",
		},
		resolver : yupResolver(schema),

	});
	const { handleSubmit } = methods;
	const onSubmit = (data : {}) => console.log(data);
	return (
		<Box px={25}>
			<Group>
				<Button onClick={() => toggleSize()}>
					{size}
				</Button>
				<Avatar color="primary"/>
			</Group>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<Grid gutter={45}>
					<Grid.Col md={6}>
						<Stack>
							<h3>Publicados</h3>
							<Grid>
								<Grid.Col span={12}>
									<RHFSwitch name="switch" label="Switch" size={size as MantineSize} />
								</Grid.Col>
								<Grid.Col md={6}>
									<RHFTextInput name="textinpt" label="InptText" size={size as MantineSize}/>
									<Inpt name="textinpt" label="InptText" size={size as MantineSize}/>
								</Grid.Col>
								<Grid.Col md={6}>
									<RHFPasswordInput name="password" label="Password" size={size as MantineSize}/>
								</Grid.Col>
								<Grid.Col span={12}>
									<RHFTextArea name="textArea" label="TextArea" size={size as MantineSize}/>
								</Grid.Col>
							</Grid>
							<Button type="submit">Submit</Button>
						</Stack>
					</Grid.Col>
					<Grid.Col md={6}>
						<h3>Por publicar</h3>
						<RHFCheckbox name="checkbox" label="checkbox" size={size as MantineSize}/>
						<RHFColorInput name="colorPicker" label="ColorPicker" size={size as MantineSize}/>
						<RHFDatePicker name="datePicker" label="DatePicker" size={size as MantineSize}/>
						<RHFDateRangePicker name="rangePicker" label="RangePicker" size={size as MantineSize}/>
					</Grid.Col>
				</Grid>
			</FormProvider>
		</Box>
	);
};

export default Form;