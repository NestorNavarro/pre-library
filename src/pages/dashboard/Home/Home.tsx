import { useForm, useWatch }                                  from "react-hook-form";
import { FormProvider, RHFSwitch, RHFTextArea, RHFTextInput } from "components/global/hook-form";
import { Stack }                                              from "@mantine/core";

const Home = () => {
	const methods = useForm({
		defaultValues : {
			inpt : "",
		},
	});

	const { handleSubmit, control } = methods;

	const watch = useWatch({ name : "inpt", control });
	console.log(watch);

	const onSubmit = (data : {}) => console.log(data);

	const onChangeText = (value : any) => {
		console.log(value);
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				{/* We need to define the inpt in default value to avoid the uncorntoler warning */}
				{/*TODO: Testing onChange */}
				<RHFTextInput name="inpt" label="InptText" onChange={onChangeText}/>
				<RHFTextArea name="textArea" label="TextArea" onChange={onChangeText} />
				<RHFSwitch name="switch" label="Switch" />
			</Stack>
		</FormProvider>
	);
};

export default Home;
