import { PaperOutline, ColumnsOutline, PencilOutline } from "@inprodi/icons";

import { PATH_DASHBOARD } from "./paths";

const navigate = [
	{
		to    : PATH_DASHBOARD.form,
		label : "Form",
		icon  : PaperOutline,
	},
	{
		to    : PATH_DASHBOARD.iconography,
		label : "Icons",
		icon  : ColumnsOutline,
	},
	{
		to    : PATH_DASHBOARD.typography,
		label : "Typography",
		icon  : PencilOutline,
	},
];

export default navigate;
