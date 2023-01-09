import React                      from "react";
import * as Yup                   from "yup";
import { FormProvider, useForm }  from "react-hook-form";
import { act, fireEvent, render } from "@testing-library/react";
import RHFPasswordInput           from "../../../../src/components/global/hook-form/RHFPasswordInput";
import { yupResolver }            from "@hookform/resolvers/yup";

describe("RHFPasswordInput.test", () => {
	test("snapshot", () => {
		const textInptName = "password";

		  const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: string }>({ defaultValues : {
				[textInptName] : "",
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { container } = render(
			<Provider>
				<RHFPasswordInput name={textInptName} />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
	test("should change value on RHK and call the onChange prop and the onChange callback must receive the HTMLInputElement as a arg", () => {
		const inptName = "password";
		const value = "testVal";
		let customVal = "";

		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ [inptName]: string }>({ defaultValues : {
				[inptName] : "",
			}});
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const hadleOnChage = (e : React.ChangeEvent<HTMLInputElement>) => {
			customVal = `hadleOnChage${e.target.value}`;
		};

		const { getByTestId, getByDisplayValue } = render(
			<Provider>
				<RHFPasswordInput name={inptName} onChange={hadleOnChage} />
			</Provider>
		);

		const inpt = getByTestId("password");
		fireEvent.change(inpt, { target : { value : value } });

		expect(getByDisplayValue(value).getAttribute("name")).toBe(inptName);
		expect(customVal).toBe(`hadleOnChage${value}`);
	});
	test("should has the ...rest props", () => {
		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const methods = useForm<{ test : string }>();
			return <FormProvider {...methods}>{children}</FormProvider>;
		};

		const { getByTestId } = render(
			<Provider>
				<RHFPasswordInput name="test" disabled />
			</Provider>
		);

		const inpt = getByTestId("password");

		expect(inpt.hasAttribute("disabled")).toBeTruthy();
	});
	test("should to show the correct labels, when there is some error the label should to change to error label", async () => {
		const onSubmit = jest.fn();
		const labelError = "Error";

		const Provider: React.FC<{children : React.ReactElement }> = ({ children }) => {
			const schema = Yup.object().shape({
				test : Yup.string()
					.required(labelError),
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

		const { getByRole, getByLabelText } = render(
			<Provider>
				<RHFPasswordInput label="labelTest" name="test" />
			</Provider>
		);

		expect(getByLabelText("labelTest")).toBeTruthy();

		const btn = getByRole("button");
		await act( () => fireEvent.submit(btn));


		expect(getByLabelText(labelError)).toBeTruthy();
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

		const { getByRole, container } = render(
			<Provider>
				<RHFPasswordInput label="labelTest" name="test" />
			</Provider>
		);

		const inpt = container.querySelector("input");
		const btn = getByRole("button");

		await act( () => fireEvent.submit(btn));

		expect(inpt?.className.includes("mantine-PasswordInput-invalid")).toBeTruthy();
	});
});
