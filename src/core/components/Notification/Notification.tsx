import { ActionIcon } from "@mantine/core";
import { IconBell }   from "@tabler/icons";

const Notification = () => {
	return (
		<ActionIcon variant="default" size={35}>
			<IconBell size={16} />
		</ActionIcon>
	);
};

export default Notification;
