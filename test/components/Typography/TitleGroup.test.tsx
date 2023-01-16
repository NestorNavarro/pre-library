import React          from "react";
import { render }     from "@testing-library/react";
import { TitleGroup } from "../../../src/components/Typography";

describe("TitleGroup", () => {
	test("snapshot", () => {
		const { container } = render(
			<TitleGroup
				title="Title"
				text="text"
			/>
		);
		expect(container).toMatchSnapshot();
	});
	test("should has all the correct classNames", () => {
		const stackClassName = "stack-className";
		const titleClassName = "title-className";
		const textClassName = "text-className";
		const { getByTestId } = render(
			<TitleGroup
				spacing={15}
				className={stackClassName}
				title="Title"
				text="text"
				textProps={{
					className : textClassName,
				}}
				titleProps={{
					className : titleClassName,
				}}
			/>
		);
		expect(getByTestId("stack-group-stack").className.includes(stackClassName)).toBeTruthy();
		expect(getByTestId("title-group-stack").className.includes(titleClassName)).toBeTruthy();
		expect(getByTestId("text-group-stack").className.includes(textClassName)).toBeTruthy();
	});
});
