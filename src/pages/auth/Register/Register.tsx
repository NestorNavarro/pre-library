import { Box }              from "@mantine/core";
import {Auth, RegisterForm} from "components/auth";

const Register = () => {
	return (
		<Box>
			<Auth.Layout>
				<Box>
					<Auth.Title>¡Crea tu Cuenta!</Auth.Title>
					<Auth.Text>Verifica tu información y estalece una contraseña para acceder a tu cuenta</Auth.Text>
				</Box>
				<RegisterForm />
			</Auth.Layout>
		</Box>
	);
};

export default Register;
