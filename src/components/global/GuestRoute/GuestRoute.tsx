import { JSXElementConstructor, ReactElement } from "react";
import { shallowEqual, useSelector }           from "react-redux";
// routes
import { Navigate }        from "react-router";
import { ROOTS_DASHBOARD } from "routes/paths";
//interface
import { ISlices } from "store/slice/slice.interface";

interface IGuestRoute { component : (props: any) => ReactElement<any, string | JSXElementConstructor<any>> | null}

const GuestRoute = ({ component : Component } : IGuestRoute) => {
	const { loggedIn } = useSelector((state : ISlices ) => state.authSlice, shallowEqual);

	return loggedIn
		? <Navigate to={ROOTS_DASHBOARD} replace={true} />
		: <Component />;
};

export default GuestRoute;
