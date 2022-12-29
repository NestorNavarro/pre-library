import { useNavigate } from "react-router-dom";
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm }     from "react-hook-form";
// icons
import { IconMail, IconLock } from "@tabler/icons";
// Mantine
import { Stack, Button } from "@mantine/core";
// owr
import { RHFPasswordInput, FormProvider, RHFTextInput } from "components/global/hook-form";
// paths
import { PATH_DASHBOARD } from "routes/paths";

export interface IFormInput {
	email: string;
	password: string;
}

const LoginForm = () => {

	const navigate = useNavigate();

	const LoginSchema = Yup.object().shape({
		email : Yup.string()
			.email("El correo ingresado no es valido")
			.required("Debes de ingresar un correo electrónico"),
		password : Yup.string()
			.required("Debes de ingresar una contraseña"),
	});

	const defaultValues: IFormInput = {
		email    : "",
		password : "",
	};

	const formMethods = useForm<IFormInput>({
		resolver : yupResolver(LoginSchema),
		defaultValues,
	});

	const { handleSubmit } = formMethods;

	const onSubmit = handleSubmit(async ( data ) => {
		try {
			//replace for your petition
			await new Promise((resolve) => setTimeout(resolve, 500));

			console.log("Login", data);
			navigate(PATH_DASHBOARD.home);
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
				<RHFPasswordInput
					name="password"
					label="Contraseña"
					placeholder="•••••••••••••••"
					icon={<IconLock />}
				/>
				<Button fullWidth type="submit" loading={isSubmitting}>
					Iniciar Sesión
				</Button>
			</Stack>

		</FormProvider>
	);
};

export default LoginForm;
