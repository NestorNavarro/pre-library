import { useState } from "react";
//mantine
import { Box, Flex, Tooltip } from "@mantine/core";
//interfaces
import { ItemProps, Stage as TypeStage, StageProps } from "./stage.interfaces";
//helpers
import { isValidArray } from "helpers";
//store
import { instanceApi } from "store/api/intanceApi";
//styles
import styles from "./styles";

const { useGetDataQuery } = instanceApi;

const Stage = ({
	width,
	value,
	paramUrl,
	order = "ASC",
	readonly = false,
	onChange = () => undefined,
}: StageProps) => {
	const [hoverValue, setHoverValue] = useState<number>(0);

	const { data : { data = [] } = {} } = useGetDataQuery({
		module : `${paramUrl}`,
		params : { order },
		tags   : [paramUrl],
	});


	if(!isValidArray(data)){
		return <></>;
	}

	const handleOnClick = (stage : TypeStage) => () => {
		onChange(stage);
	};

	return (
		<Flex>
			{ data.map((stage: TypeStage, index: number) => (
				<Item
					key={stage.uuid}
					width={width}
					index={index}
					stage={stage}
					value={value}
					readonly={readonly}
					hoverValue={hoverValue}
					stageNumber={data.length ?? 0}
					handleOnClick={handleOnClick}
					setHoverValue={setHoverValue}
				/>
			)) }
		</Flex>
	);
};

const Item = ({
	width,
	index,
	value,
	stage,
	readonly,
	hoverValue,
	stageNumber,
	handleOnClick,
	setHoverValue,
} : ItemProps) => {
	const { classes } = styles({
		index,
		width,
		stage,
		stageNumber,
		value : hoverValue ? hoverValue : value?.percentage ?? -1,
	});

	return (
		<Tooltip label={stage.name} withArrow withinPortal>
			<Box
				className={classes.root}
				onClick={handleOnClick(stage)}
				onMouseOver={() => !readonly && setHoverValue(stage?.percentage)}
				onMouseOut={() => !readonly && setHoverValue(0)}
			/>
		</Tooltip>
	);
};


export default Stage;
