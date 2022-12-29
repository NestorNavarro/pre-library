import { useFormContext, Controller } from "react-hook-form";
import AsyncCreatableSelect           from "react-select/async-creatable";
//mantine
import { Group, Text } from "@mantine/core";
//react-select
import {
	components,
	ClearIndicatorProps,
} from "react-select";
//resources
import {
	X as ClearIcon,
	Plus,
} from "inprodi-icons";
// store
import { instanceApi } from "store/api/intanceApi";
//mantine
import { useMantineTheme, Box, BoxProps } from "@mantine/core";
//helpers
import { buildOptions, isValidArray } from "helpers";
import { useDebouncedCallback }       from "helpers/hooks";
//components
import { Error, Label } from "components/global/LabelInp";
//styles
import selectStyles from "../RHFAsyncSelect/styles";

interface IRHFAsyncCreatable {
	name : string;
	query ?: {};
	containerProps ?: BoxProps;
	param : string;
	label ?: string;
	isMulti ?: true;
	labelKey ?: string;
	valueKey ?: string;
	placeholder ?: string;
	isClearable ?: boolean;
	menuPortalTarget ?: HTMLElement;
	components? : any
}

const { useLazyGetDataQuery, useCreateOrUpdateMutation } = instanceApi;

const RHFAsyncCreatable = ({
	name,
	label,
	param,
	isMulti,
	isClearable,
	query = {},
	containerProps,
	placeholder = "",
	labelKey = "name",
	valueKey = "uuid",
	menuPortalTarget,
	components,
	...rest
} :IRHFAsyncCreatable) => {
	const { control } = useFormContext();

	const themeMantine = useMantineTheme();
	const isDarkTheme =  themeMantine.colorScheme === "dark";
	const hoverBackgroundColor = isDarkTheme ? themeMantine.colors.dark[4] : themeMantine.colors.gray[1];

	const [ fetchData ] = useLazyGetDataQuery();
	const [ createOption, { isLoading } ] = useCreateOrUpdateMutation();



	const handleSearch = useDebouncedCallback( async (search, callback) => {
		const resp : any = await fetchData({
			module : param,
			params : { ...query, search },
			tags   : ["creatable"],
		}).unwrap();

		if (!isValidArray(resp?.data)) {
			callback([]);
			return;
		}
		const parsedData = buildOptions({ arr : resp.data, label : labelKey, value : valueKey });
		callback(parsedData);
	}, 700);

	return (
		<Box {...containerProps} >
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => {
					const handleCreate = (inputValue: string) => {
						createOption({
							module : param,
							data   : { name : inputValue },
							tags   : ["creatable"],
						}).unwrap();
					};

					return (
						<>
							{!error ? <Label label={label} /> : <Error error={error?.message ?? "Error"} /> }
							<AsyncCreatableSelect
								{...field}
								cacheOptions
								defaultOptions
								isMulti={isMulti}
								isDisabled={isLoading}
								isLoading={isLoading}
								placeholder={placeholder}
								isClearable={isClearable}
								loadOptions={handleSearch}
								onCreateOption={handleCreate}
								styles={selectStyles(error)}
								formatCreateLabel={(value) => (
									<Group  align="center">
										<Plus fontSize={14} />
										<Text>Crear <Text component="span" weight={600}>{value}</Text></Text>
									</Group>
								)}
								components={{
									// TODO: ADD compoenten + icon -DropdownIndicator,
									ClearIndicator,
									LoadingMessage : () => <Text align="center">Cargando...</Text>,
									...components,
								}}
								menuPortalTarget={menuPortalTarget}
								{...rest}
								theme={(theme) => ({
									...theme,
									colors : {
										...theme.colors,
										primary   : themeMantine.colors.primary[6],
										primary25 : hoverBackgroundColor,
										primary50 : hoverBackgroundColor,
									},
								})}
							/>
						</>
					);
				}}
			/>
		</Box>
	);
};


const ClearIndicator = (
	props: ClearIndicatorProps<any, true>
) => {
	return (
	  <components.ClearIndicator {...props}>
			<ClearIcon fontSize={9} />
	  </components.ClearIndicator>
	);
};

export default RHFAsyncCreatable;
