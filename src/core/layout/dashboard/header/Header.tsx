import {
	Burger,
	TextInput,
	MediaQuery,
	Header as HeaderMantine,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons";

import { Brand, Notifications, ToggleTheme, UserDropDown } from "core/components";
import styles                                              from "./styles";
interface IHeader {
    opened : boolean;
    setOpened :  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ opened, setOpened } : IHeader) {
	const { classes, theme } = styles();

	return (
		<HeaderMantine height={70} className={classes.header}>
			<div className={classes.inner}>
				<div className={classes.brand}>
					<MediaQuery largerThan="sm" styles={{ display : "none" }}>
						<Burger
							mr="xl"
							size="sm"
							opened={opened}
							color={theme.colors.gray[6]}
							onClick={() => setOpened((o) => !o)}
						/>
					</MediaQuery>
					<Brand />
				</div>

				<div className={classes.tools}>
					<div className={classes.searchContainer}>
						<MediaQuery smallerThan="sm" styles={{ display : "none" }}>
							<TextInput
								size="md"
								ml={20}
								classNames={{ input : classes.search }}
								icon={<IconSearch size={18} />}
								variant="filled"
								placeholder="Buscar..."
							/>
						</MediaQuery>
					</div>
					<div  className={classes.rightTools}>
						<ToggleTheme />
						<Notifications />
						<UserDropDown />
					</div>
				</div>
			</div>
		</HeaderMantine>
	);
}
