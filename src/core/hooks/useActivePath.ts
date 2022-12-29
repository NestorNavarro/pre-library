import { useEffect, useState } from "react";
import { useLocation }         from "react-router-dom";

const useActivePath = () => {
	const location = useLocation();
	const [active, setActive] = useState("");

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return active;
};

export default useActivePath;
