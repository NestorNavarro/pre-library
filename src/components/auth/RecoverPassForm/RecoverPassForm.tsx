import { useNavigate } from "react-router-dom";
// form
import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// icons
import { IconMail } from "@tabler/icons";
// mantine
import { Button, Stack } from "@mantine/core";
// our componets
import { FormProvider, RHFTextInput } from "components/global/hook-form";
// paths
import { PATH_AUTH } from "routes/paths";

export interface IFormInput {
  email: string;
}

const RecoverPassForm = () => {
	const navigate = useNavigate();

	const ResetSchema = Yup.object().shape({
		email : Yup.string()
			.email("El correo ingresado no es valido")
			.required("Debes de ingresar un correo electrónico"),
	});

	const defaultValues: IFormInput = {
		email : "",
	};

	const formMethods = useForm<IFormInput>({
		resolver : yupResolver(ResetSchema),
		defaultValues,
	});

	const { handleSubmit } = formMethods;

	const onSubmit = handleSubmit(async ( data ) => {
		try {
			//replace for your petition
			await new Promise((resolve) => setTimeout(resolve, 500));

			console.log("Login", data);
			navigate(PATH_AUTH.changePassword);
		} catch (error) {
			console.error(error);
		}
	});

	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={30}>
				<RHFTextInput
					name="email"
					label="Correo Electrónico"
					placeholder="mail@empresa.com"
					icon={<IconMail />}
				/>
				<Button fullWidth type="submit" loading={isSubmitting}>
					Enviar Instrucciones
				</Button>
			</Stack>
		</FormProvider>
	);
};

export default RecoverPassForm;
