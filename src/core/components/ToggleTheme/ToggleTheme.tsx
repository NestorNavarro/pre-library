import { IconSun, IconMoonStars }                    from "@tabler/icons";
import { useMantineColorScheme, Switch, MediaQuery } from "@mantine/core";

import styles from "./styles";

const ToggleTheme = () => {
	const { classes } = styles();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	return (
		<MediaQuery smallerThan="sm" styles={{ display : "none" }}>
			<Switch
				size="xl"
				checked={colorScheme === "dark"}
				className={classes.switch}
				onChange={() => toggleColorScheme()}
				onLabel={<IconSun size={ 16 } />}
				offLabel={<IconMoonStars size={ 16 } />}
				thumbIcon={
					colorScheme === "dark" ? <IconMoonStars size={ 16 } /> : <IconSun size={ 16 } />
				}
			/>
		</MediaQuery>
	);
};

export default ToggleTheme;
