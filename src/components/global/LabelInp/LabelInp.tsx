import { Text, useMantineTheme } from "@mantine/core";

export const Label = ({ label } : { label? : string }) => {
	const theme = useMantineTheme();
	const color = theme.colorScheme === "dark" ? "dark.0" : "dark";

	if(label){
		return (
			<Text component="label" color={color} weight={600} size={12}>
				{label}
			</Text>
		);
	}

	return (<></>);
};

export const Error = ({ error } : { error : string }) => (
	<Text component="label" color={"red"} weight={600} size={12}>{error}</Text>
);
