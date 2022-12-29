import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate }   from "redux-persist/integration/react";


import { theme }            from "theme";
import store, { persistor } from "store";
import Router               from "routes";
import { MantineProvider }  from "core/components";

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<MantineProvider theme={theme}>
						<Router />
					</MantineProvider>
				</PersistGate>
			</BrowserRouter>
		</Provider>
	);
}
