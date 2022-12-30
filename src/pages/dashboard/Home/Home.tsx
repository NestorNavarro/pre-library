import { useForm, useWatch } from "react-hook-form";
import { Stack }             from "@mantine/core";

import FormProvider from "../../../components/global/hook-form/FormProvider";
import RHFSwitch    from "../../../components/global/hook-form/RHFSwitch";
import RHFTextArea  from "../../../components/global/hook-form/RHFTextArea";
import RHFTextInput from "../../../components/global/hook-form/RHFTextInput";

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
				<RHFTextInput name="inpt" label="InptText" onChange={onChangeText}/>
				<RHFTextArea name="textArea" label="TextArea" onChange={onChangeText} />
				<RHFSwitch name="switch" label="Switch" />
			</Stack>
		</FormProvider>
	);
};

export default Home;
