/**
 * @jest-environment jsdom
 */
import React                     from "react";
import { FormProvider, useForm } from "react-hook-form";
import { render, act }           from "@testing-library/react";
import RHFSwitch                 from "../../../../src/components/global/hook-form/RHFSwitch";

describe("RHFSwitch", () => {
	test("should change value on RHK", async () => {
		const textInptName = "myInpt";

		  const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: boolean }>({ defaultValues : {
				[textInptName] : false,
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByRole } = render(
			<Provider>
				<RHFSwitch name={textInptName}  />

			</Provider>
		);

		const inpt = getByRole("checkbox");
		await act(() => inpt.click());


		expect(getByRole("checkbox")).toHaveProperty("checked", true);
	});

	test("should change value on RHK", async () => {
		const textInptName = "myInpt";
		let customVal = false;

		const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
			customVal = e.target.checked;
		};

		  const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: boolean }>({ defaultValues : {
				[textInptName] : false,
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByRole } = render(
			<Provider>
				<RHFSwitch name={textInptName} onChange={handleChange} />

			</Provider>
		);

		const inpt = getByRole("checkbox");
		await act(() => inpt.click());

		expect(getByRole("checkbox")).toHaveProperty("checked", true);
		expect(customVal).toBe(true);
	});
});
