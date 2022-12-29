// mantine
import { Box } from "@mantine/core";
//own
import { Auth, ChangePassForm } from "components/auth";
// paths

const ResetPassword = () => {
	return (
		<Auth.Layout>
			<Box>
				<Auth.Title>Cambia tu Contraseña</Auth.Title>
				<Auth.Text>Ingresa tu nueva contraseña y guardala en un lugar seguro</Auth.Text>
			</Box>
			<ChangePassForm />
		</Auth.Layout>
	);
};

export default ResetPassword;
