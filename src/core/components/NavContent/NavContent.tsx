import { Box, Group } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

import NavIcon from "../NavIcon";

interface INavContent {
    label : string;
    icon : TablerIcon;
    element ?: React.ReactNode;
}

const NavContent = ({ icon : Icon, label, element } : INavContent) => {
	return (
		<Group position="apart" spacing={0}>
			<Box sx={{ display : "flex", alignItems : "center" }}>
				<NavIcon icon={Icon} />
				<Box style={{ lineHeight : "100%" }} ml="md">
					{label}
				</Box>
			</Box>
			{element}
		</Group>
	);
};

export default NavContent;
