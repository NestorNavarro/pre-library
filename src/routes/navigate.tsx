import {
	IconGauge,
	IconUsers,
} from "@tabler/icons";

import { PATH_DASHBOARD } from "./paths";

const navigate = [
	{
		to    : PATH_DASHBOARD.home,
		label : "Escritorio",
		icon  : IconGauge,
	},
	{ divider : "Usuarios" },
	{
	  label : "Usuarios",
	  icon  : IconUsers,
	  root  : PATH_DASHBOARD.users.root,
	  links : [
			{
				to    : PATH_DASHBOARD.users.cards,
				label : "Cartas",
			},
			{
				to    : PATH_DASHBOARD.users.new,
				label : "Nuevo",
			},
	  ],
	},
];

export default navigate;
