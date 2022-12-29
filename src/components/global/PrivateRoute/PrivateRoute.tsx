import { JSXElementConstructor, ReactElement } from "react";
import { shallowEqual, useSelector }           from "react-redux";
// routes
import { Navigate }   from "react-router";
import { ROOTS_AUTH } from "routes/paths";
//interface
import { ISlices } from "store/slice/slice.interface";

interface IPrivateRoute { component : (props: any) => ReactElement<any, string | JSXElementConstructor<any>> | null}

const PrivateRoute = ({ component : Component, ...rest } : IPrivateRoute) => {
	const { loggedIn } = useSelector((state : ISlices) => state.authSlice, shallowEqual);

	return loggedIn
		? <Component {...rest} />
		: <Navigate to={ROOTS_AUTH} replace={true} />;
};

export default PrivateRoute;
