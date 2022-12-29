import { lazy }                from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "core/layout";
// components
import { Loadable }   from "core/components";
import { GuestRoute } from "components/global";
import RoleBasedAuth  from "components/global/RoleBasedAuth";
// ac
import { USERS_PERMISSION } from "./roleBasedAuth";
import AuthLayout           from "core/layout/auth/AuthLayout";

// //Auth
const Login         = Loadable(lazy(() => import("pages/auth/Login")));
const Register      = Loadable(lazy(() => import("pages/auth/Register")));
const RecoverPassword = Loadable(lazy(() => import("pages/auth/RecoverPassword")));
const ChangePassword    = Loadable(lazy(() => import("pages/auth/ChangePassword")));
const PasswordRestored    = Loadable(lazy(() => import("pages/auth/PasswordRestored")));
// // Dashboard
const Home = Loadable(lazy(() => import("pages/dashboard/Home")));
// //users
const UserCards   = Loadable(lazy(() => import("pages/dashboard/UserCard")));
const UserCreate  = Loadable(lazy(() => import("pages/dashboard/UserCreate")));
// //Erros
const NotFound  = Loadable(lazy(() => import("pages/Page404")));
const Forbidden = Loadable(lazy(() => import("pages/Page403")));
const Page500   = Loadable(lazy(() => import("pages/Page500")));


export default function Router() {
	return useRoutes([
		//Auth Routes
		{
			path     : "auth",
			element  : <GuestRoute component={() => <AuthLayout />} />,
			children : [
				{
					index   : true,
					element : <Navigate to="/auth/login" replace />,
				},
				{
					path    : "login",
					element : <Login />,
				},
				{
					path    : "register",
					element : <Register />,
				},
				{
					path    : "recover-password",
					element : <RecoverPassword />,
				},
				{
					path    : "change-password",
					element : <ChangePassword />,
				},
				{
					path    : "password-restored",
					element : <PasswordRestored />,
				},
				{ path : "*", element : <Navigate to="/auth/login" replace />},
			],
		},
		//Auth DashBoard
		{
			path     : "dashboard",
			// element  : <PrivateRoute component={DashboardLayout} />,
			element  : <DashboardLayout />,
			children : [
				{ element : <Navigate to="/dashboard/home" replace />, index : true },
				{ path : "home", element : <Home /> },
				{
					path     : "user",
					children : [
						{ element : <Navigate to="/dashboard/user/cards" replace />, index : true },
						{
							path    : "cards",
							element : <RoleBasedAuth component={UserCards} requiredRoles={USERS_PERMISSION.cards} />,
						},
						{
							path    : "new",
							element : <RoleBasedAuth component={UserCreate} requiredRoles={USERS_PERMISSION.new} />,
						},
						{
							path    : "edit/:id",
							element : <RoleBasedAuth component={UserCreate} requiredRoles={USERS_PERMISSION.edit} />,
						},
					],
				},
			],
		},
		//Redirect
		{
			path    : "/",
			element : <Navigate to={"dashboard/home"} replace />,
		},
		{
			path     : "*",
			children : [
				{ path : "500", element : <Page500 /> },
				{ path : "404", element : <NotFound /> },
				{ path : "403", element : <Forbidden /> },
				{ path : "*", element : <Navigate to="/404" replace /> },
			],
		},
	]);
}
