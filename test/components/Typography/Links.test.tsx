import React                      from "react";
import { act, fireEvent, render } from "@testing-library/react";
import { BrowserRouter }          from "react-router-dom";
import { Link }                   from "../../../src/components/Typography";

describe("Links", () => {
	test("snapshot", () => {
		const { container } = render(
			<BrowserRouter>
				<Link to="/">Path Label</Link>
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	});
	test("should onClick correctly", async () => {
		const onClick = jest.fn();
		const label = "Path Label";
		const { getByText } = render(
			<BrowserRouter>
				<Link to="/dashboard/typography" onClick={onClick} >{label}</Link>
			</BrowserRouter>
		);
		const link = getByText(label);
		await act( () => fireEvent.click(link));

		expect(onClick).toBeCalled();
	});
	test("should has a custom className", async () => {
		const className = "custom-className";
		const label = "Path Label";
		const { getByText } = render(
			<BrowserRouter>
				<Link className={className} to="/dashboard/typography" >{label}</Link>
			</BrowserRouter>
		);
		const link = getByText(label);

		expect(link.className.includes(className)).toBeTruthy();
	});
});
