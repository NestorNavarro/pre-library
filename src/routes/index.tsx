import { lazy }                from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "core/layout";
// components
import { Loadable }   from "core/components";
import { GuestRoute } from "components/global";
// ac
import AuthLayout from "core/layout/auth/AuthLayout";

// //Auth
const Login         = Loadable(lazy(() => import("pages/auth/Login")));
const Register      = Loadable(lazy(() => import("pages/auth/Register")));
const RecoverPassword = Loadable(lazy(() => import("pages/auth/RecoverPassword")));
const ChangePassword    = Loadable(lazy(() => import("pages/auth/ChangePassword")));
const PasswordRestored    = Loadable(lazy(() => import("pages/auth/PasswordRestored")));
// // Dashboard
const Form = Loadable(lazy(() => import("pages/dashboard/Form")));
const Iconography = Loadable(lazy(() => import("pages/dashboard/Iconography")));
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
			element  : <DashboardLayout />,
			children : [
				{ element : <Navigate to="/dashboard/form" replace />, index : true },
				{ path : "form", element : <Form /> },
				{ path : "iconography", element : <Iconography /> },
			],
		},
		//Redirect
		{
			path    : "/",
			element : <Navigate to={"dashboard/form"} replace />,
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
