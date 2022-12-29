import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	Menu,
	Text,
	Group,
	Avatar,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";

import {
	IconUser,
	IconBuilding,
	IconDoorExit,
} from "@tabler/icons";
//helpers
import { getMainLettersFromName } from "helpers";
// store
import { clearUserData } from "store/slice/authSlice";
// path
import { PATH_DASHBOARD } from "routes/paths";
//icons
import { Preferences } from "inprodi-icons";
//our imports
import styles from "./styles";

const UserDropDown = () => {
	const { classes } = styles();
	const theme = useMantineTheme();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleNavigatePreference = () => navigate(PATH_DASHBOARD.home);

	const logOut = () => dispatch(clearUserData());

	return (
		<Group>
			  <Menu
				position="bottom-end"
				transition="pop-top-right"
			>
				<Menu.Target>
					<UnstyledButton
						className={classes.user}
					>
						<div className={classes.group}>
							<Avatar color="primary" radius="xl" size={44}>
								{getMainLettersFromName("Juan")}
							</Avatar>
							<div>
								<Text className={classes.userInfo} weight={600} size={14} mr={3}>
									Juan
								</Text>
								<Text
									weight={500}
									className={classes.userInfo}
									color={theme.colorScheme === "dark" ? theme.colors.dark[0] :  theme.colors.gray[6]}
									size={12}
								>
									Administrador
								</Text>
							</div>
						</div>
					</UnstyledButton>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
						Mi Cuenta
					</Menu.Item>
					<Menu.Item icon={<IconBuilding size={14} stroke={1.5} />}>
						Empresa
					</Menu.Item>
					<Menu.Item
						icon={<Preferences fontSize={14} />}
						onClick={handleNavigatePreference}
					>
						Preferencias
					</Menu.Item>

					<Menu.Divider />

					<Menu.Item
						color="red"
						icon={<IconDoorExit size={14} stroke={1.5} />}
						onClick={logOut}
					>
						Cerrar Sesión
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default UserDropDown;
