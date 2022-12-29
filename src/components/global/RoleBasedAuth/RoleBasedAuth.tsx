import { JSXElementConstructor, ReactElement } from "react";
import { shallowEqual, useSelector }           from "react-redux";
import { Navigate }                            from "react-router";

import { isValidArray }    from "helpers";
import { PATH_ERROR_PAGE } from "routes/paths";
import { ISlices }         from "store/slice/slice.interface";

interface RoleBasedAuth {
	component : (props: any) => ReactElement<any, string | JSXElementConstructor<any>> | null;
	requiredRoles : Array<string>;
}
const RoleBasedAuth = ({ component : Component, requiredRoles } : RoleBasedAuth) => {
	//it means that all roles have access
	if (!isValidArray(requiredRoles)) return <Component />;

	const { role } = useSelector( (state : ISlices) => state.authSlice.user, shallowEqual);

	const userHasRequiredRole = requiredRoles.includes(role);

	return userHasRequiredRole ?
		<Component />
		:
		<Navigate to={PATH_ERROR_PAGE.page403} />;
};

export default RoleBasedAuth;
