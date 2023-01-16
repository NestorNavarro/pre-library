import React              from "react";
import { render }         from "@testing-library/react";
import { CirclesOutline } from "@inprodi/icons";
import { TextGroup }      from "../../../src/components/Typography";

describe("TextGroup", () => {
	test("snapshot", () => {
		const { container } = render(
			<TextGroup leftIcon={<CirclesOutline />} rightIcon={<CirclesOutline />}>Label</TextGroup>
		);
		expect(container).toMatchSnapshot();
	});
	test("should has all the correct classNames", () => {
		const flexClassName = "flex-className";
		const textClassName = "text-className";
		const { getByTestId } = render(
			<TextGroup className={textClassName} wrapperProps={{ className : flexClassName }}>Label</TextGroup>
		);
		expect(getByTestId("text-group-flex").className.includes(flexClassName)).toBeTruthy();
		expect(getByTestId("text-group-text").className.includes(textClassName)).toBeTruthy();
	});
});
