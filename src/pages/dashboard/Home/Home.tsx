import { useForm }                   from "react-hook-form";
import { Button, Stack, ActionIcon } from "@mantine/core";
import { User }                  from "@inprodi/icons";

import { RHFTextInput, RHFTextArea, RHFSwitch, FormProvider } from "@inprodi/core";
import { RHFCheckbox, RHFPasswordInput }                                   from "components/global/hook-form";

const Home = () => {
	const methods = useForm({
		defaultValues : {
			inpt : "",
		},
	});

	const { handleSubmit } = methods;


	const onSubmit = (data : {}) => console.log(data);


	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<RHFTextInput name="inpt" label="InptText"/>
				<RHFTextArea name="textArea" label="TextArea" />
				<RHFPasswordInput name="password" label="Password"/>
				<RHFSwitch name="switch" label="Switch" />

				<RHFCheckbox name="myCheck" label="check" />
				
				<Button type="submit">Submit</Button>
			</Stack>
		</FormProvider>
	);
};

export default Home;
