import { useNavigate } from "react-router";
// form
import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// icons
import { IconLock } from "@tabler/icons";
// mantine
import { Button, Grid, Stack } from "@mantine/core";
// our componets
import { FormProvider, RHFPasswordInput, RHFTextInput } from "components/global/hook-form";
import { PATH_DASHBOARD }                               from "routes/paths";
import RHFPasswordStrength                              from "components/global/hook-form/RHFPasswordStrength";
// paths

export interface IFormInput {
  name: string;
  lastName: string;
  password: string;
  passwordConfirm: string;

}


const RegisterForm = () => {

	const navigate = useNavigate();

	const ResetSchema = Yup.object().shape({
		name     : Yup.string().required("Debes ingresar un nombre"),
		lastName : Yup.string().required("Debes ingresar un apellido"),
		password : Yup.string()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
				"La contraseña no es suficientemente segura"
			)
			.required("Debes de ingresar una nueva contraseña"),
		passwordConfirm : Yup.string()
			.oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
			.required("Debes de confirmar la nueva contraseña"),
	});

	const defaultValues: IFormInput = {
		name            : "",
		lastName        : "",
		password        : "",
		passwordConfirm : "",
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
			navigate(PATH_DASHBOARD.home);
		} catch (error) {
			console.error(error);
		}
	});

	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={30}>
				<Grid>
					<Grid.Col xs={5}>
						<RHFTextInput
							name="name"
							label="Nombre (s)"
							placeholder="Nombre"
						/>
					</Grid.Col>
					<Grid.Col xs={7}>
						<RHFTextInput
							name="lastName"
							label="Apellidos"
							placeholder="Apellidos"
						/>
					</Grid.Col>
				</Grid>
				<RHFTextInput
					name="email"
					label="Correo Electronico"
					value="aaguinaga@inprodi.com.mx"
					disabled
				/>
				<RHFPasswordStrength
					name="password"
					label="Contraseña"
					placeholder="•••••••••••••••"
					icon={<IconLock />}
				/>
				<RHFPasswordInput
					name="passwordConfirm"
					label="Confirmar Contraseña"
					placeholder="•••••••••••••••"
					icon={<IconLock />}
				/>
				<Button fullWidth  type="submit" loading={isSubmitting}>
					Crear mi cuenta
				</Button>
			</Stack>
		</FormProvider>
	);
};

export default RegisterForm;
