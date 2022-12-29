import { IQuoteStage } from "store/api/interfaces/quoteStages.interface";

export type Stage = IQuoteStage;

export interface StageProps {
	value : Stage;
    width ?: number | string;
	paramUrl?: string;
	order? : "ASC" | "DESC";
	readonly?: boolean;
    onChange?: (stage? : Stage ) => void;
}


export interface StylesParams {
    value : number;
    index : number;
    stage : Stage;
    width ?: number | string;
    stageNumber : number;
}


export interface ItemProps {
    width ?: number | string;
	index : number;
	value : Stage;
	stage : Stage;
	readonly : boolean;
	hoverValue : number;
	stageNumber : number,
    setHoverValue : ( hoverValue : number ) => void;
	handleOnClick : (stage: Stage) => () => void,
}
