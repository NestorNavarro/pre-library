/**
 * @jest-environment jsdom
 */
import React                      from "react";
import { useForm }                from "react-hook-form";
import { act, render, fireEvent } from "@testing-library/react";
import RHFSwitch                  from "../../../../src/components/global/hook-form/RHFSwitch";
import FormProvider               from "../../../../src/components/global/hook-form/FormProvider";

describe("FormProvaider", () => {
	test("should change value on RHK", async () => {
		const textInptName = "myInpt";
		const onSubmit = jest.fn();

		const Provider: React.FC<{children : React.ReactElement[] }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: boolean }>({ defaultValues : {
				[textInptName] : false,
			}});
			return <FormProvider methods={methods} onSubmit={onSubmit}>{children}</FormProvider>;
		};

		const { getByRole } = render(
			<Provider>
				<RHFSwitch name="test" />
				<button type="submit">Submit</button>
			</Provider>
		);

		const btn = getByRole("button");
		await act( () => fireEvent.submit(btn));
		expect(onSubmit).toBeCalled();
	});
});
