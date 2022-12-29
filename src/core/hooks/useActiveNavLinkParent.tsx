import { useEffect, useState } from "react";

interface useActiveNavLinkParent {
    root ?: string;
    activePath : string;
}
const useActiveNavLinkParent = ({ root, activePath } : useActiveNavLinkParent) => {
	const [opened, setOpened] = useState(false);


	useEffect(() => {
		const isChildActive = activePath.includes(root ?? "#");

		if (isChildActive) {
			setOpened(true);
			return;
		}
		setOpened(false);
	}, [activePath, root]);

	const toggle = () => setOpened((o) => !o);

	return { opened, toggle };
};

export default useActiveNavLinkParent;
