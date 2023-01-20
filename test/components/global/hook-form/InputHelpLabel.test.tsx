import React              from "react";
import { render }         from "@testing-library/react";
import { InputHelpLabel } from "../../../../src/components/global/hook-form/InputHelpLabel";

describe("InputHelpLabel", () => {
	test("snaptshot", () => {
		const { container } = render(
			<InputHelpLabel
				required
				label="Label"
				helpLabel="Help Label"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
