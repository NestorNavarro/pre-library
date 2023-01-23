import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Box, Button, Grid, Group, MantineSize,
	Stack, Avatar,
} from "@mantine/core";

import {
	RHFSwitch,
	RHFTextArea,
	RHFTextInput,
	FormProvider,
	RHFPasswordInput,
} from "@inprodi/core";
import {
	RHFCheckbox,
	RHFColorInput,
	RHFDatePicker,
	RHFDateRangePicker,
} from "components/global/hook-form";
import { useToggle } from "@mantine/hooks";

const Form = () => {
	const [size, toggleSize] = useToggle(["xs", "sm", "md", "lg", "xl"]);
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
						<Stack >
							<h3>@inprodi/core</h3>
							<Grid>
								<Grid.Col span={12}>
									<RHFSwitch name="switch" label="Switch" size={size as MantineSize} />
								</Grid.Col>
								<Grid.Col md={6}>
									<RHFTextInput
										withAsterisk
										name="textinpt"
										label="Normal"
										placeholder="Placeholder"
										size={size as MantineSize}
									/>
								</Grid.Col>
								<Grid.Col md={6}>
									<RHFTextInput
										withAsterisk
										name="textinpt2"
										label="Name"
										placeholder="placeholder"
										size={size as MantineSize}
										help="Ayuda sjdkhhjksdhjkfhjsgdahjgfdsahjghjgksdahg hjsdgghjsdghjf sgdfhjsadgfhjsa df sahjdfghjsadfg sajhdf hsjadfghjsad hjfdsgjhfgdshj fhjsadfgsdhagfhjsdagfhjsdagjhf ashdgf"
									/>

								</Grid.Col>
								<Grid.Col span={6}>
									<RHFPasswordInput
										withAsterisk
										name="password"
										label="Password"
										placeholder="placeholder"
										size={size as MantineSize}
									/>
								</Grid.Col>
								<Grid.Col span={6}>
									<RHFPasswordInput withAsterisk name="password" label="Password" placeholder="placeholder" size={size as MantineSize} />
								</Grid.Col>
								<Grid.Col span={12}>
									<RHFTextArea
										withAsterisk
										name="textArea"
										label="TextArea"
										size={size as MantineSize}
									/>
								</Grid.Col>
							</Grid>
							<Button type="submit">Submit</Button>
						</Stack>
					</Grid.Col>
					<Grid.Col md={6}>
						<h3>Local</h3>
						<Stack>
							<RHFCheckbox name="checkbox" label="checkbox" size={size as MantineSize}/>
							<RHFColorInput name="colorPicker" label="ColorPicker" size={size as MantineSize}/>
							<RHFDatePicker name="datePicker" label="DatePicker" size={size as MantineSize}/>
							<RHFDateRangePicker name="rangePicker" label="RangePicker" size={size as MantineSize}/>
						</Stack>
					</Grid.Col>
				</Grid>
			</FormProvider>
		</Box>
	);
};

export default Form;
