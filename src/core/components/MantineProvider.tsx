import { ReactElement } from "react";
//mantine
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProviderProps,
	MantineProvider as MantineProviderCore,
} from "@mantine/core";

import { useLocalStorage } from "@mantine/hooks";

interface IMantineProvider extends MantineProviderProps {
    children: ReactElement | ReactElement[];
}

const MantineProvider = ({ children, theme } : IMantineProvider) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key          : "color-scheme",
		defaultValue : "dark",
	  });

	  const toggleColorScheme = () =>
		setColorScheme((current) => (current === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProviderCore theme={{ ...theme, colorScheme}} withGlobalStyles withNormalizeCSS>
				{children}
			</MantineProviderCore>
		</ColorSchemeProvider>
	);
};

export default MantineProvider;
