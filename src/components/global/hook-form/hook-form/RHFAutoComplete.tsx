//External componets
import { useFormContext, Controller }       from "react-hook-form";
import { Autocomplete, AutocompleteProps  } from "@mantine/core";
//Own components
import { getInptLabel, isValidArray } from "helpers";
import { instanceApi }                from "store/api/intanceApi";
import { useDebouncedCallback }       from "helpers/hooks";
import { useState }                   from "react";

const { useLazyGetDataQuery } = instanceApi;


interface IRHFAutoComplete extends AutocompleteProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
	query ?: {};
	param : string;
	labelKey ?: string;
	valueKey ?: string;
	callback : (values: any) => void;
	buildOptions : (data : any[]) => any[];
}

const RHFAutoComplete = ({
	name,
	label,
	param,
	query = {},
	buildOptions,
	...rest
} :IRHFAutoComplete) => {
	const { control } = useFormContext();
	const [ fetchData ] = useLazyGetDataQuery();

	const [data, setData] = useState<any[]>([]);

	const handleSearch = useDebouncedCallback( async (search = "") => {

		const resp : any = await fetchData({ module : param, params : { ...query, search }}).unwrap();
		if (!isValidArray(resp?.data)) {
			setData([]);
			return;
		}

		setData(buildOptions(resp.data));
	}, 700);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					id={name}
					{...field}
					onChange={(value) => {
						handleSearch(value);
						field.onChange(value);
					}}
					label={getInptLabel(label, error?.message)}
					error={!!error}
					{...rest}
					data={data}
				/>

			)}
		/>
	);
};

export default RHFAutoComplete;
