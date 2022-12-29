import {
	Text,
	Divider,
} from "@mantine/core";

import { useSmQuery } from "helpers/hooks";
import styles         from "./styles";

const NavDivider = ({ divider, isHoveredSidebar } : any) => {
	const { classes } = styles();

	const isSmDisplay = useSmQuery();

	return (
		<>
			{
				isSmDisplay() ?
					isHoveredSidebar ?
						<Text className={ classes.divider }>{ divider }</Text>
						:
						<Divider my={20} />
					:
					<Text className={ classes.divider }>{ divider }</Text>
			}
		</>
	);
};

export default NavDivider;
