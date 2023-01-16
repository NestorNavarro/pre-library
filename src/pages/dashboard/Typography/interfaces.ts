import {
	TextProps,
	StackProps,
	MantineNumberSize,
	TitleProps as MantineTitleProps,
	DefaultMantineColor,
} from "@mantine/core";
import { RelativeRoutingType } from "react-router-dom";



export interface TitleProps extends MantineTitleProps {
    size ?: MantineNumberSize;
}

export interface LinkProps extends TextProps {
    to : string;
    state ?: any;
    replace ?: boolean;
    preventScrollReset ?: boolean;
    relative ?: RelativeRoutingType;
    onClick ?: React.MouseEventHandler<HTMLDivElement>
}

export interface TitleAndTextProps extends StackProps {
    text : string;
    title : string;
    textProps ?: TextProps;
    titleProps ?: TitleProps;
    size ?: MantineNumberSize;
    textColor ?: DefaultMantineColor;
    titleColor ?: DefaultMantineColor;
}
