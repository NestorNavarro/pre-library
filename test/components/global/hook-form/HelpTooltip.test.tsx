import React           from "react";
import { render }      from "@testing-library/react";
import { HelpTooltip } from "../../../../src/components/global/hook-form/HelpTooltip";

describe("HelpTooltip", () => {
	test("snaptshot", () => {
		const { container } = render(
			<HelpTooltip
				label="Help Label"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
