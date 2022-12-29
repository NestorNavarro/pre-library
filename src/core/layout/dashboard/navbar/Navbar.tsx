import React, { Fragment, useEffect, useState } from "react";

import {
	ScrollArea,
	Navbar as NavBarMantine,
	Transition,
} from "@mantine/core";
//hooks
import { useMediaQuery } from "@mantine/hooks";

import navigate                               from "routes/navigate";
import { useActivePath }                      from "core/hooks";
import { NavLinks, NavDivider }               from "core/components";
import NavBarIconLinks                        from "core/components/NavBarIconLinks";
import { BASE_SIDEBAR_WITH, SM_SIDEBAR_WITH } from "./NavbarConstants";
import styles                                 from "./styles";
interface INavbar {
	opened : boolean;
}

const Navbar = ({ opened } : INavbar) =>  {
	const { classes, theme } = styles();

	const active = useActivePath();

	const [sidebarWidth, setSidebarWidth] = useState(BASE_SIDEBAR_WITH);

	const isHoveredSidebar = sidebarWidth === BASE_SIDEBAR_WITH;

	const getIconsLinksActive = ({ root, to } : { root ?: string; to ?: string }) => {
		if (root) {
			return active.includes(root);
		}
		if (to) {
			return active.includes(to);
		}
		return false;
	};

	const iconsLinks = navigate.map((item, index) => {
		const isDivider = item.divider !== undefined;

		return (
			<Fragment key={`${index}-${item?.label ?? item.divider}`} >
				<>
					{isDivider ?
						<NavDivider divider={item.divider} isHoveredSidebar={isHoveredSidebar} />
						:
						item.divider === undefined &&
						<NavBarIconLinks
							to={item?.to ?? ""}
							icon={item?.icon}
							active={getIconsLinksActive({ root : item?.root, to : item?.to })}
						/>
					}
				</>
			</Fragment>
		);
	});

	const links = navigate.map((item, index) => {
		const isDivider = item.divider !== undefined;

		return (
			<Fragment key={`${index}-${item?.label ?? item.divider}`} >
				<>
					{isDivider ?
						<NavDivider divider={item.divider} isHoveredSidebar={isHoveredSidebar} />
						:
						item.divider === undefined &&
						<NavLinks
							active={active}
							to={item.to}
							label={item?.label ?? ""}
							icon={item.icon}
							root={item.root}
							links={item?.links}
						/>
					}
				</>
			</Fragment>
		);
	});

	const isMaxWidthSm = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
	const isMinWidthSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);

	useEffect(() => {
		if (isSmDisplay()) {
			setSidebarWidth(SM_SIDEBAR_WITH);
			return;
		}
		setSidebarWidth(BASE_SIDEBAR_WITH);
	}, [isMaxWidthSm, isMinWidthSm]);

	return (
		<>
			<Transition mounted={BASE_SIDEBAR_WITH === sidebarWidth} transition="fade" duration={400} timingFunction="ease">
				{(styles) =>
					<NavBarMantine
						px={22}
						py={20}
						style={styles}
						className={classes.navbar}
						hidden={!opened}
						hiddenBreakpoint="sm"
						width={{ md : BASE_SIDEBAR_WITH, lg : BASE_SIDEBAR_WITH, sm : BASE_SIDEBAR_WITH }}
						onMouseLeave={() => {
							if (isSmDisplay()) {
								setSidebarWidth(SM_SIDEBAR_WITH);
							}
						}}
						onMouseEnter={() => {
							if (isSmDisplay()) {
								setSidebarWidth(BASE_SIDEBAR_WITH);
							}
						}}
					>
						<NavBarMantine.Section
							grow
							py={0}
							component={ScrollArea}
						>
							<>{links}</>
						</NavBarMantine.Section>
					</NavBarMantine>}
			</Transition>

			<Transition mounted={SM_SIDEBAR_WITH === sidebarWidth} transition="fade" duration={400} timingFunction="ease">
				{(styles) =>
					<NavBarMantine
						px={22}
						py={20}
						style={styles}
						hidden={!opened}
						hiddenBreakpoint="sm"
						width={{ base : SM_SIDEBAR_WITH }}
						onMouseLeave={() => setSidebarWidth(SM_SIDEBAR_WITH)}
						onMouseEnter={() => setSidebarWidth(BASE_SIDEBAR_WITH)}
					>
						<NavBarMantine.Section
							grow
							component={ScrollArea}
						>
							<>{iconsLinks}</>
						</NavBarMantine.Section>
					</NavBarMantine>}
			</Transition>
		</>

	);
};

export default React.memo(Navbar);
