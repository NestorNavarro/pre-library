import React                      from "react";
import * as Yup                   from "yup";
import { FormProvider, useForm }  from "react-hook-form";
import { yupResolver }            from "@hookform/resolvers/yup";
import { act, fireEvent, render } from "@testing-library/react";
import RHFTextArea                from "../../../../src/components/global/hook-form/RHFTextArea";


describe("RHFTextArea", () => {
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
				<RHFTextArea name={textInptName} />
			</Provider>
		);

		const inpt = getByRole("textbox");
		fireEvent.change(inpt, { target : { value : value } });

		expect(getByDisplayValue(value).getAttribute("name")).toBe(textInptName);
	});

	test("should change value on RHK and call the onChange prop and the onChange callback must receive the HTMLTextAreaElement as a arg", () => {
		const textInptName = "myInpt";
		const value = "testVal";
		let customVal = "";

		const hadleOnChage = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
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
				<RHFTextArea name={textInptName} onChange={hadleOnChage}/>
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
				<RHFTextArea name="test" disabled />
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
				<RHFTextArea label="labelTest" name="test" />
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
				<RHFTextArea label="labelTest" name="test" />
			</Provider>
		);

		const inpt = getByRole("textbox");
		const btn = getByRole("button");

		await act( () => fireEvent.submit(btn));
		expect(inpt.className.includes("mantine-Input-invalid mantine-Textarea-invalid")).toBeTruthy();
	});
});
