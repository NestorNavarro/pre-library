import { Text, TextProps }                  from "@mantine/core";
import { RelativeRoutingType, useNavigate } from "react-router-dom";

export interface LinkProps extends TextProps {
    to : string;
    state ?: any;
    replace ?: boolean;
    preventScrollReset ?: boolean;
    relative ?: RelativeRoutingType;
    onClick ?: React.MouseEventHandler<HTMLDivElement>
}

export const Link = ({
	to,
	state,
	replace,
	children,
	relative,
	preventScrollReset,
	color = "blue",
	onClick,
	...rest
} : LinkProps) => {
	const navigate  = useNavigate();
	const handleOnClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate(to, { relative, replace, preventScrollReset, state });
		onClick && onClick(e);
	};
	return (
		<Text
			{...rest}
			color={color}
			onClick={handleOnClick}
			style={{
				cursor         : "pointer",
				textDecoration : "underline",
				width          : "fit-content",
			}}
		>
			{children}
		</Text>
	);
};

export default Link;
