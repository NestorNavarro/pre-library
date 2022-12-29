import { Link } from "react-router-dom";
// mantine
import { Box, Button } from "@mantine/core";
//own
import { Auth } from "components/auth";
// paths
import { PATH_AUTH } from "routes/paths";

const ResetPassword = () => {
	return (
		<Box>
			<Auth.Layout>
				<Box>
					<Auth.Title>Contraseña Cambiada Correctamente</Auth.Title>
					<Auth.Text>Tu contraseña se ha estrablecido y ahora podrás ingresar con tus nuevos accesos</Auth.Text>
				</Box>
				<Button component={Link} to={PATH_AUTH.login}>Ir al inicio de Sesión</Button>

			</Auth.Layout>
		</Box>
	);
};

export default ResetPassword;
