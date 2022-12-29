import React, { useState } from "react";
//External componets
import { PasswordInputProps, Text, Box, Popover, Progress } from "@mantine/core";
import { IconCheck, IconX }                                 from "@tabler/icons";
import RHFPasswordInput                                     from "./RHFPasswordInput";

//Own imports

interface IRHFPasswordStrength extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
	label ?: string;
}

const MIN_PASSWORD_LENGTH = 8;

const requirements = [
	{ re : /[a-z]/, label : "Uso de 1 minúscula" },
	{ re : /[A-Z]/, label : "Uso de 1 mayúscula" },
	{ re : /[0-9]/, label : "Uso de 1 número" },
];

function getStrength(password: string) {
	let multiplier = password.length >= MIN_PASSWORD_LENGTH ? 0 : 1;

	requirements.forEach((requirement) => {
	  if (!requirement.re.test(password)) {
			multiplier += 1;
	  }
	});

	return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}
const RHFPasswordStrength = ({ name, ...rest } : IRHFPasswordStrength) => {

	const [value, setValue] = useState("");
	const [popoverOpened, setPopoverOpened] = useState(false);

	const checks = requirements.map((requirement, index) => (
		<PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
	));
	const strength = getStrength(value);
	const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

	const handleOnChange = (event : any) => setValue(event?.currentTarget?.value ?? "");

	return (
		<Popover opened={popoverOpened} position="bottom" width="target" transition="pop" withinPortal>
			<Popover.Target>
				<div
					onFocusCapture={() => setPopoverOpened(true)}
					onBlurCapture={() => setPopoverOpened(false)}
				>
					<RHFPasswordInput
						name={name}
						onChange={handleOnChange}
						{...rest}
					/>
				</div>
			</Popover.Target>
			<Popover.Dropdown>
				<Progress color={color} value={strength} size={5} style={{ marginBottom : 10 }} />
				<PasswordRequirement label="Mínimo 8 caracteres" meets={value.length >= MIN_PASSWORD_LENGTH} />
				{checks}
			</Popover.Dropdown>
		</Popover>
	);
};

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
	return (
	  <Text
			color={meets ? "teal" : "red"}
			sx={{ display : "flex", alignItems : "center" }}
			mt={7}
			size="sm"
	  >
			{meets ? <IconCheck size={14} /> : <IconX size={14} />} <Box ml={10}>{label}</Box>
	  </Text>
	);
}

export default RHFPasswordStrength;
