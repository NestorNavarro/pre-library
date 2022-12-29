// import "regenerator-runtime/runtime"; Uncomment this line if bugs appear.
import { combineReducers } from "redux";
import { configureStore }  from "@reduxjs/toolkit";
import { setupListeners }  from "@reduxjs/toolkit/query";

import localForage from "localforage";

import {
	FLUSH,
	PAUSE,
	PURGE,
	PERSIST,
	REGISTER,
	REHYDRATE,
	persistStore,
	persistReducer,
} from "redux-persist";

// Import Own Components
import { api }     from "./api";
import * as Slices from "./slice";

const rootReducer    = combineReducers({
	...Object.entries(Slices).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key] : value.reducer,
		}),
		{}
	),
	[api.reducerPath] : api.reducer,
});


const persistConfig = {
	key       : "root",
	storage   : localForage,
	version   : 1,
	whitelist : [
		"authSlice",
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer    : persistedReducer,
	devTools   : import.meta.env.DEV,
	middleware : (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck : {
				ignoredActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
