//own
import { Auth, RecoverPassForm } from "components/auth";
// paths
import { PATH_AUTH } from "routes/paths";

const RecoverPassword = () => {
	return (
		<Auth.Layout>
			<Auth.Title>Restablecer contraseña</Auth.Title>
			<Auth.Text>Ingresa el correo de tu cuenta para que recibas intrucciones para restablecer tu contraseña</Auth.Text>
			<RecoverPassForm />
			<Auth.Link to={PATH_AUTH.login}>Regresar al Inicio de Sesión</Auth.Link>
		</Auth.Layout>
	);
};

export default RecoverPassword;
