import { useLocation } from "react-router-dom";
import { PuffLoader }  from "react-spinners";
import { Group }       from "@mantine/core";

import { ROOTS_DASHBOARD } from "routes/paths";
import styles              from "./styles";

const LoadingScreen = () => {

	const { classes } = styles();

	const { pathname } = useLocation();

	const getClassNameByTypeOfLayout = () => {
		const isDashboard = pathname.includes(ROOTS_DASHBOARD);
		return isDashboard ? classes.dashboard : classes.auth;
	};

	return (
		<Group
			position="center"
			className={getClassNameByTypeOfLayout()}
		>
			<div className={classes.spinnerContainer}>
				<PuffLoader
					color="rgb(36 58 142 / 63%)"
					size={90}
				/>
			</div>
			<img alt="logo" width={ 85 } src="https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png" />
		</Group>
	);
};

export default LoadingScreen;
