import React             from "react";
import { render }        from "@testing-library/react";
import Typography        from "../../src/pages/dashboard/Typography";
import { BrowserRouter } from "react-router-dom";
//import.meta.env.DEV dosen't work with jest
//solution: https://stackoverflow.com/questions/72128718/test-suite-failed-to-run-import-meta-env-vite
jest.mock("../../src/constants", () => ({
	ENVIRONMENT : "development",
}));

describe("Typography", () => {
	test("should render the Typography", () => {
		const { container } = render(<Typography />, { wrapper : BrowserRouter});
		expect(container).toMatchSnapshot();
	});
});
