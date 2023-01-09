import React                     from "react";
import { FormProvider, useForm } from "react-hook-form";
import { render }                from "@testing-library/react";
import RHFPasswordInput          from "../../../../src/components/global/hook-form/RHFPasswordInput";

describe("App", () => {
	test("asnapshot", () => {
		const textInptName = "myInpt";

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
});
