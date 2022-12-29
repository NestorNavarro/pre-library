import { useFormContext, Controller } from "react-hook-form";
import AsyncCreatableSelect           from "react-select/async-creatable";


import { useMantineTheme, Group, Text } from "@mantine/core";
//helpers
import { buildOptions, isValidArray } from "helpers";
import { useDebouncedCallback }       from "helpers/hooks";
import { instanceApi }                from "store/api/intanceApi";

//components
import { Error, Label } from "components/global/LabelInp";
//styles
import selectStyles         from "./styles";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { GroupBase }        from "react-select";

const { useLazyGetDataQuery } = instanceApi;

interface IRHFAsyncCreatableSelect {
	name : string;
	query ?: {};
	param : string;
	label ?: string;
	isMulti ?: true;
	labelKey ?: string;
	valueKey ?: string;
    callback ?: (value: any) => void,
	placeholder ?: string;
	isClearable ?: boolean;
	components? : Partial<SelectComponents<any, boolean, GroupBase<any>>> | undefined

}

const RHFAsyncCreatableSelect = ({
	name,
	label,
	param,
	isMulti,
	isClearable,
	query = {},
	callback,
	placeholder = "",
	labelKey = "name",
	valueKey = "uuid",
	components,
	...rest
} : IRHFAsyncCreatableSelect) => {

	const { control } = useFormContext();

	const themeMantine = useMantineTheme();
	const isDarkTheme =  themeMantine.colorScheme === "dark";
	const hoverBackgroundColor = isDarkTheme ? themeMantine.colors.dark[4] : themeMantine.colors.gray[3];

	const [ fetchData ] = useLazyGetDataQuery();

	const handleSearch = useDebouncedCallback( async (search, callback) => {
		const resp : any = await fetchData({ module : param, params : { ...query, search }}).unwrap();
		if (!isValidArray(resp?.data)) {
			callback([]);
			return;
		}
		const parsedData = buildOptions({ arr : resp.data, label : labelKey, value : valueKey });
		callback(parsedData);
	}, 700);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<>
					{!error ? <Label label={label} /> : label && <Error error={error?.message ?? "Error"} /> }
					<AsyncCreatableSelect
						{...field}
						onChange={ (value: any) => {
							field.onChange(value);
							if(typeof callback === "function") callback(value);
						} }
						cacheOptions
						defaultOptions
						isMulti={isMulti}
						formatCreateLabel={(value) => (
							<Group>
								<Text>Crear <Text component="span" weight={600}>{value}</Text></Text>
							</Group>
						)}
						placeholder={placeholder}
						isClearable={isClearable}
						loadOptions={handleSearch}
						components={{
							ClearIndicator     : () => <></>,
							DownChevron        : () => <></>,
							DropdownIndicator  : () => <></>,
							IndicatorSeparator : () => <></>,
							LoadingMessage     : () => <Text align="center">Cargando...</Text>,
							...components,
						}}
						styles={selectStyles(error)}
						theme={(theme) => ({
							...theme,
							colors : {
								...theme.colors,
								primary   : themeMantine.colors.primary[6],
								primary25 : hoverBackgroundColor,
								primary50 : hoverBackgroundColor,
							},
						})}
						{...rest}
					/>
				</>
			)}
		/>
	);
};

export default RHFAsyncCreatableSelect;
