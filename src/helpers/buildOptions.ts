interface IBuildOptionsArgs {
    arr : any[],
    label ?: string;
    value ?: string;
}
const buildOptions = ({ arr, label = "name", value = "uuid" } :  IBuildOptionsArgs) => {
	const parsedData = arr.map((item : any) => ({
		...item,
		label : item[label],
		value : item[value],
	}));
	return parsedData;
};

export default buildOptions;
