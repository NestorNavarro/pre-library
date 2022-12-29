import { Box }             from "@mantine/core";
import { Auth, LoginForm } from "components/auth";
import { PATH_AUTH }       from "routes/paths";

const Login = () => {
	return (
		<Auth.Layout>
			<Box>
				<Auth.Title>¡Bienvenido de Nuevo!</Auth.Title>
				<Auth.Text>Inicia sesión con tu usuario y constraseña para ingresar a la plataforma</Auth.Text>
			</Box>
			<LoginForm />
			<Auth.Link to={PATH_AUTH.recover}>¿Olvidaste tu contraseña?</Auth.Link>
		</Auth.Layout>
	);
};

export default Login;
