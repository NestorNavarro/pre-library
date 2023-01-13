
const path = (root : string, sublink : string ) =>  `${root}${sublink}`;

export const ROOTS_AUTH      = "/auth";
export const ROOTS_DASHBOARD = "/dashboard";

export const PATH_ERROR_PAGE = {
	page404 : "/404",
	page403 : "/403",
	page500 : "/500",
};

export const PATH_AUTH = {
	root           : ROOTS_AUTH,
	login          : path(ROOTS_AUTH, "/login"),
	register       : path(ROOTS_AUTH, "/register"),
	recover        : path(ROOTS_AUTH, "/recover-password"),
	changePassword : path(ROOTS_AUTH, "/change-password"),
	restored       : path(ROOTS_AUTH, "/password-restored"),
};

export const PATH_DASHBOARD = {
	root  : ROOTS_DASHBOARD,
	iconography : path(ROOTS_DASHBOARD, "/iconography"),
	form : path(ROOTS_DASHBOARD, "/form"),
};
