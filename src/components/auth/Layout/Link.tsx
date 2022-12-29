import { Center }             from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";
import { styles }             from "./styles";

interface ILink {
  to : string;
	children : React.ReactNode;
}

const Link = ({ children, to } : ILink) => {
	const { classes } = styles();

	return (
		<Center>
			<RouterLink className={classes.link} to={to}>
				{children}
			</RouterLink>
		</Center>
	);
};

export default Link;
