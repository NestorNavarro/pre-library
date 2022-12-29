import { Suspense } from "react";
// components
import { LoadingScreen } from "core/components";

const Loadable = (Component : React.LazyExoticComponent<() => JSX.Element>) => (props : any) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default Loadable;
