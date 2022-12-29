import { useFormContext, Controller } from "react-hook-form";
//react-select
import {
	components,
	ClearIndicatorProps,
	GroupBase,
	StylesConfig,
} from "react-select";

import AsyncSelect from "react-select/async";
//resources
import {
	X as ClearIcon,
} from "inprodi-icons";
// store
import { instanceApi } from "store/api/intanceApi";
//mantine
import { useMantineTheme, Box, BoxProps } from "@mantine/core";
//helpers
import { buildOptions as buildOptionsHelper, isValidArray } from "helpers";
import { useDebouncedCallback }                             from "helpers/hooks";
//components
import { Error, Label } from "components/global/LabelInp";
//styles
import selectStyles         from "./styles";
import { SelectComponents } from "react-select/dist/declarations/src/components";

interface IRHFAsyncSelect {
	name : string;
	query ?: {};
	param : string;
	label ?: string;
	isMulti ?: true;
	labelKey ?: string;
	valueKey ?: string;
	placeholder ?: string;
	isClearable ?: boolean;
	buildOptions ?: (items : any[]) => any[];
	styles ?: StylesConfig<any>;
	containerProps ?: BoxProps;
	menuPortalTarget ?: HTMLElement;
	components? : Partial<SelectComponents<any, boolean, GroupBase<any>>> | undefined
}

const { useLazyGetDataQuery } = instanceApi;

const RHFAsyncSelect = ({
	name,
	label,
	param,
	styles,
	isMulti,
	isClearable,
	query = {},
	components,
	buildOptions,
	containerProps,
	placeholder = "",
	labelKey = "name",
	valueKey = "uuid",
	menuPortalTarget,
	...rest
} :IRHFAsyncSelect) => {
	const { control } = useFormContext();

	const themeMantine = useMantineTheme();
	const isDarkTheme =  themeMantine.colorScheme === "dark";
	const hoverBackgroundColor = isDarkTheme ? themeMantine.colors.dark[4] : themeMantine.colors.gray[1];

	const [ fetchData ] = useLazyGetDataQuery();

	const handleSearch = useDebouncedCallback( async (search, callback) => {
		const resp : any = await fetchData({ module : param, params : { ...query, search }}).unwrap();
		if (!isValidArray(resp?.data)) {
			callback([]);
			return;
		}
		const isValidBuildOptions = typeof(buildOptions) === "function";

		const parsedData = isValidBuildOptions ? buildOptions(resp.data)
			: buildOptionsHelper({ arr : resp.data, label : labelKey, value : valueKey });
		callback(parsedData);
	}, 700);

	return (
		<Box {...containerProps} >
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } } ) => (
					<>
						{!error ? <Label label={label} /> : <Error error={error?.message ?? "Error"} /> }
						<AsyncSelect
							{...field}
							cacheOptions
							defaultOptions
							isMulti={isMulti}
							placeholder={placeholder}
							isClearable={isClearable}
							loadOptions={handleSearch}
							styles={{
								...selectStyles(error),
								...styles,
							}}
							components={{
								// TODO: Add compoenet and icon DropdownIndicator,
								ClearIndicator,
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
				)}
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

export default RHFAsyncSelect;
