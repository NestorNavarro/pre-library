import { useNavigate } from "react-router-dom";
// form
import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// icons
import { IconLock } from "@tabler/icons";
// mantine
import { Button, Stack } from "@mantine/core";
// our componets
import { FormProvider, RHFPasswordInput } from "components/global/hook-form";
import { PATH_AUTH }                      from "routes/paths";
import RHFPasswordStrength                from "components/global/hook-form/RHFPasswordStrength";
// paths

export interface IFormInput {
    password: string;
    passwordConfirm: string;

}

const ChangePasswordForm = () => {
	const navigate = useNavigate();

	const ResetSchema = Yup.object().shape({
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
			navigate(PATH_AUTH.restored);
		} catch (error) {
			console.error(error);
		}
	});

	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={30}>
				<RHFPasswordStrength
					name="password"
					label="Nueva Contraseña"
					icon={<IconLock />}
				/>
				<RHFPasswordInput
					name="passwordConfirm"
					label="Confirmar Contraseña"
					icon={<IconLock />}
				/>
				<Button fullWidth type="submit" loading={isSubmitting}>
					Cambiar mi Contraseña
				</Button>
			</Stack>
		</FormProvider>
	);
};

export default ChangePasswordForm;
