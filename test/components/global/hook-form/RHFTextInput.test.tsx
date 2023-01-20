import React                      from "react";
import * as Yup                   from "yup";
import { FormProvider, useForm }  from "react-hook-form";
import { yupResolver }            from "@hookform/resolvers/yup";
import { act, fireEvent, render } from "@testing-library/react";
import RHFTextInput               from "../../../../src/components/global/hook-form/RHFTextInput";

describe("RHFTextInput", () => {
	test("should change value on RHK", () => {
		const textInptName = "myInpt";
		const value = "testVal";

		  const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: string }>({ defaultValues : {
				[textInptName] : "",
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByRole, getByDisplayValue } = render(
			<Provider>
				<RHFTextInput name={textInptName} />
			</Provider>
		);

		const inpt = getByRole("textbox");
		fireEvent.change(inpt, { target : { value : value } });

		expect(getByDisplayValue(value).getAttribute("name")).toBe(textInptName);
	});

	test("should change value on RHK and call the onChange prop and the onChange callback must receive the HTMLInputElement as a arg", () => {
		const textInptName = "myInpt";
		const value = "testVal";
		let customVal = "";

		const hadleOnChage = (e : React.ChangeEvent<HTMLInputElement>) => {
			customVal = `hadleOnChage${e.target.value}`;
		};

		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: string }>({ defaultValues : {
				[textInptName] : "",
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByRole, getByDisplayValue } = render(
			<Provider>
				<RHFTextInput name={textInptName} onChange={hadleOnChage}/>
			</Provider>
		);

		const inpt = getByRole("textbox");
		fireEvent.change(inpt, { target : { value : value } });

		expect(getByDisplayValue(value).getAttribute("name")).toBe(textInptName);
		expect(customVal).toBe(`hadleOnChage${value}`);
	});

	test("should has the ...rest props", () => {
		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ test : string }>();
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByRole } = render(
			<Provider>
				<RHFTextInput name="test" disabled />
			</Provider>
		);

		const inpt = getByRole("textbox");

		expect(inpt.hasAttribute("disabled")).toBeTruthy();
	});

	test("should to show the correct labels, when there is some error the label should to change to error label", async () => {
		const onSubmit = jest.fn();

		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const schema = Yup.object().shape({
				test : Yup.string()
					.required("Error"),
			});
			const methods = useForm<{ test : string }>({
				resolver : yupResolver(schema),
			});

			return (
				<FormProvider {...methods} handleSubmit={onSubmit}>
					 <form onSubmit={methods.handleSubmit(onSubmit)}>
						{children}
						<button type="submit">SubmitBtn</button>
					 </form>
				</FormProvider>
			);
		};

		const { getByRole, getByLabelText, getByText } = render(
			<Provider>
				<RHFTextInput label="labelTest" name="test" />
			</Provider>
		);

		expect(getByLabelText("labelTest")).toBeTruthy();

		const btn = getByRole("button");
		await act( () => fireEvent.submit(btn));

		expect(getByText("Error")).toBeTruthy();
	});

	test("should has the error styles", async () => {
		const onSubmit = jest.fn();

		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const schema = Yup.object().shape({
				test : Yup.string()
					.required("Error"),
			});
			const methods = useForm<{ test : string }>({
				resolver : yupResolver(schema),
			});

			return (
				<FormProvider {...methods} handleSubmit={onSubmit}>
					 <form onSubmit={methods.handleSubmit(onSubmit)}>
						{children}
						<button type="submit">SubmitBtn</button>
					 </form>
				</FormProvider>
			);
		};

		const { getByRole } = render(
			<Provider>
				<RHFTextInput label="labelTest" name="test" />
			</Provider>
		);

		const inpt = getByRole("textbox");
		const btn = getByRole("button");

		await act( () => fireEvent.submit(btn));

		expect(inpt.className.includes("mantine-Input-invalid mantine-TextInput-invalid")).toBeTruthy();
	});
});
