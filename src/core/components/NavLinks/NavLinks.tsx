import { NavLink as NavLinkReact } from "react-router-dom";

import { Collapse, UnstyledButton }                                 from "@mantine/core";
import { TablerIcon, IconChevronLeft, IconChevronRight, IconPoint } from "@tabler/icons";

import styles                     from "./styles";
import NavContent                 from "../NavContent";
import { useActiveNavLinkParent } from "core/hooks";

interface INavLinks {
	to ?: string;
    label: string;
    active : string;
    icon: (props : any) => JSX.Element;
	root ?: string;
    links?: { label: string; to: string }[];
}

export const NavLinks = ({
	to,
	root,
	links,
	label,
	active,
	icon : Icon,
} : INavLinks) => {
	const { classes, theme, cx } = styles();

	const { opened, toggle } = useActiveNavLinkParent({ root, activePath : active });

	const hasLinks = Array.isArray(links);

	const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

	const items = (hasLinks ? links : []).map((link) => (
		<NavChildLink
			link={link}
			key={link.label}
			className={cx(classes.control, { [classes.linkActive] : active === link.to  })}
		/>
	));
	return (
		<>
			{
				hasLinks ?
					<>
						<UnstyledButton
							className={cx(classes.control, { [classes.activeParent] : opened })}
							onClick={toggle}
						>
							<NavContent
								icon={Icon}
								label={label}
								element={
									<ChevronIcon
										className={classes.chevron}
										size={14}
										stroke={1.5}
										style={{
											transform : opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
										}}
									/>
								}
							/>
						</UnstyledButton>
						<Collapse in={opened}>{items}</Collapse>
					</>
					:
					<NavLink
						icon={Icon}
						link={{ to : to ?? "/", label }}
						className={cx(classes.control, { [classes.linkActive] : active.includes(to ?? "#") })}
					/>
			}
		</>
	);
};


const NavLink = ({ link, className, icon : Icon } :
    {
        icon: TablerIcon;
        className : string;
        link : { to: string, label : string };
    }) => {

	return (
		<NavLinkReact
			to={link.to}
			className={className}
		>
			<NavContent label={link.label} icon={Icon} />
		</NavLinkReact>
	);
};


const NavChildLink = ({ link, className } :
    {
        className : string;
        link : {  to : string, label : string };
    }) => {
	return (
		<NavLinkReact
			className={className}
			to={link.to}
			key={link.label}
		>
			<NavContent label={link.label} icon={IconPoint} />
		</NavLinkReact>
	);
};
