import { Outlet }          from "react-router-dom";
import { useMantineTheme } from "@mantine/core";

const AuthLayout = () => {
	const theme = useMantineTheme();
	return (
		<div style={{ background : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1] }}>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
