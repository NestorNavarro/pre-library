import { Title as TitleMantine } from "@mantine/core";
import { styles }                from "./styles";

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
	const { classes } = styles();

	return (
		<TitleMantine order={1} className={classes.title}>{children}</TitleMantine>
	);
};

export default Title;
