import { useMediaQuery }   from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

const useSmQuery = () => {
	const theme = useMantineTheme();

	const isMaxWidthSm = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
	const isMinWidthSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);

	return isSmDisplay;

};

export default useSmQuery;
