import { Group, Box } from "@mantine/core";
// core
import { Logo } from "core/components";


export default function Brand() {
	return (
		<Box>
			<Group position="apart">
				<Logo />
			</Group>
		</Box>
	);
}
