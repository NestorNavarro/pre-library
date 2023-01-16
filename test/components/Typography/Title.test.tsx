import React      from "react";
import { render } from "@testing-library/react";
import { Title }  from "../../../src/components/Typography";

describe("Title", () => {
	test("should snapshot", () => {
		const { container } = render(
			<Title>My title</Title>
		);
		expect(container).toMatchSnapshot();
	});
	test("should h1 order", () => {
		const { getByRole } = render(
			<Title order={1}>My title</Title>
		);
		const h1 = getByRole("heading");
		expect(h1.tagName).toBe("H1");
	});
	test("should h2 order", () => {
		const { getByRole } = render(
			<Title size="xl">My title</Title>
		);
		const h2 = getByRole("heading");
		expect(h2.tagName).toBe("H2");
	});
	test("should h3 order", () => {
		const { getByRole } = render(
			<Title size="lg">My title</Title>
		);
		const h3 = getByRole("heading");
		expect(h3.tagName).toBe("H3");
	});
	test("should h4 order", () => {
		const { getByRole } = render(
			<Title size="md">My title</Title>
		);
		const h4 = getByRole("heading");
		expect(h4.tagName).toBe("H4");
	});
	test("should h5 order", () => {
		const { getByRole } = render(
			<Title size="sm">My title</Title>
		);
		const h5 = getByRole("heading");
		expect(h5.tagName).toBe("H5");
	});
	test("should h6 order", () => {
		const { getByRole } = render(
			<Title size="xs">My title</Title>
		);
		const h6 = getByRole("heading");
		expect(h6.tagName).toBe("H6");
	});
	test("should has custom className", () => {
		const className = "custom-className";
		const { getByRole } = render(
			<Title className={className}>My title</Title>
		);
		const title = getByRole("heading");
		expect(title.className.includes(className)).toBeTruthy();
	});
});
