import { useForm }                   from "react-hook-form";
import { ActionIcon, Button, Stack } from "@mantine/core";

import { RHFTextInput, RHFTextArea, RHFSwitch, FormProvider, RHFPasswordInput } from "@inprodi/core";
import { UserOutline, DiamondFilled, WordColor }                                from "@inprodi/icons";

import { RHFCheckbox } from "components/global/hook-form";

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

				<ActionIcon color="primary" variant="subtle">
					<UserOutline size="xl" />
				</ActionIcon>
				<ActionIcon color="primary" variant="subtle">
					<DiamondFilled size="xl" />
				</ActionIcon>
				<ActionIcon color="primary" variant="subtle">
					<WordColor fillOpacity={1} size="xl" />
				</ActionIcon>
			</Stack>
		</FormProvider>
	);
};

export default Home;
