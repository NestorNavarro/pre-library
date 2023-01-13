import { PaperOutline, ColumnsOutline } from "@inprodi/icons";

import { PATH_DASHBOARD } from "./paths";

const navigate = [
	{
		to    : PATH_DASHBOARD.form,
		label : "Formulario",
		icon  : PaperOutline,
	},
	{
		to    : PATH_DASHBOARD.iconography,
		label : "Icons",
		icon  : ColumnsOutline,
	},
];

export default navigate;
