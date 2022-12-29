import { NavLink as NavLinkReact } from "react-router-dom";

import styles from "./styles";

const NavBarIconLinks = ({ icon : Icon, to, active }
	: {
		icon: (props : any) => JSX.Element;
		to : string;
		active : boolean
	}
) => {
	const { classes, cx } = styles();

	const hasChildrens = () => to === "";

	return (
		<NavLinkReact
			to={to}
			className={
				cx(classes.iconLink,
					{ [classes.active] : active  && !hasChildrens() },
					{ [classes.activeParent] : active  && hasChildrens() }
				)
			}
		>
			<Icon size={18} />
		</NavLinkReact>
	  );
};

export default NavBarIconLinks;
