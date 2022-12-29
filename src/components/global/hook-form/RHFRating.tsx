import { useFormContext, Controller } from "react-hook-form";
//mantiene
import { Group, Rating, RatingProps, useMantineTheme, ActionIcon, Box, BoxProps } from "@mantine/core";
//components
import { Error, Label }  from "components/global/LabelInp";
import { X, Octahedron } from "inprodi-icons";

interface IRHFRating extends RatingProps {
	name : string;
	label ?: string;
    iconGap ?: number,
	containerProps ?: BoxProps;
    fullSymbol ?: React.ReactNode | ((value: number) => React.ReactNode)
}

const RHFRating = ({
	name,
	size,
	label,
	fullSymbol,
	emptySymbol,
	defaultValue,
	iconGap = 5,
	containerProps,
	...rest
} : IRHFRating) => {

	const theme = useMantineTheme();
	const { control } = useFormContext();

	const mantineSizeToNum = typeof(size) === "string" ? theme.fontSizes?.[size] : size;

	const defaultSize = size === undefined  ? theme.fontSizes.lg : mantineSizeToNum;

	const defaultFullSymbol = fullSymbol ?? <Octahedron fontSize={defaultSize} color={theme.colors.primary[6]} />;
	const defaultEmptySymbol = emptySymbol ?? <Octahedron fontSize={defaultSize} color={theme.colors.gray[3]} />;

	const cleanValue = (onChange: (...event: any[]) => void) => () => onChange(null);

	return (
		<Box {...containerProps} >
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={({ field, fieldState: { error } }) => (
					<div style={{ width : "fit-content" }}>
						<Group mb={2} position="apart">
							{!error ? <Label label={label} /> : <Error error={error?.message ?? "Este campo es requerido"} /> }
							{field.value &&
							<ActionIcon
								size="xs"
								variant="transparent"
								onClick={cleanValue(field.onChange)}
							>
								<X fontSize={8} />
							</ActionIcon>}
						</Group>
						<Rating
							{...field}
							name={name}
							fullSymbol={defaultFullSymbol}
							emptySymbol={defaultEmptySymbol}
							styles={() => (
								{
									root : {
										gap : `${iconGap}px`,
									},
								}
							)}
							{...rest}
						/>
					</div>
				)}
			/>
		</Box>
	);
};



export default RHFRating;
