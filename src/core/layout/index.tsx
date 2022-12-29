import { useState } from "react";
import { Outlet }   from "react-router-dom";
//mantine
import { AppShell as AppShellMantine, useMantineTheme } from "@mantine/core";
//core
import Navbar from "core/layout/dashboard/navbar";
import Header from "core/layout/dashboard/header";

export default function AppShell() {
	const theme = useMantineTheme();

	const [opened, setOpened] = useState(false);

	return (
		<AppShellMantine
			styles={{
				main : {
					background  : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
					borderColor : theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3],
				},
			}}
			asideOffsetBreakpoint="sm"
			navbarOffsetBreakpoint="sm"
			header={<Header opened={opened} setOpened={setOpened} />}
			navbar={<Navbar opened={opened} />}
		>
			<Outlet />
		</AppShellMantine>
	);
}
