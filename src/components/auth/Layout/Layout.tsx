import { Card, Center, Image, Stack } from "@mantine/core";
import { styles }                     from "./styles";

export interface ILayout {
    children: React.ReactElement | React.ReactElement[];
    className ?: string,
}

const Layout = ({ children, className  } : ILayout) => {
	const { classes } = styles();
	const containeStyles = className ? className : classes.container;

	return (
		<div className={containeStyles}>
			<Card px={20} py={30} className={classes.card}>
				<Stack align="stretch" justify="center" spacing={30} >
					<Center>
						<Image
							width={175}
							height={41.86}
							src={""}
							alt="brand"
						/>
					</Center>
					{children}
				</Stack>
			</Card>
		</div>

	);
};

export default Layout;
