import { Text as TextMantine } from "@mantine/core";
import { styles }              from "./styles";

interface Props {
  children: React.ReactNode
}

const Text = ({ children }: Props) => {
	const { classes } = styles();

	return (
		<TextMantine className={classes.text}>{children}</TextMantine>
	);
};

export default Text;
