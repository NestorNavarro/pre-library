import { ActionIcon, Stack } from "@mantine/core";

import { UserOutline, DiamondFilled, WordColor } from "@inprodi/icons";

const Iconography = () => {
	return (
		<Stack>
			<ActionIcon color="primary" variant="subtle">
				<UserOutline size="xl" />
			</ActionIcon>
			<ActionIcon color="primary" variant="subtle">
				<DiamondFilled size="xl" />
			</ActionIcon>
			<ActionIcon color="primary" variant="subtle">
				<WordColor fillOpacity={1} size="xl" />
			</ActionIcon>
		</Stack>
	);
};

export default Iconography;
