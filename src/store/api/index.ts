import { FetchArgs }                        from "@reduxjs/toolkit/dist/query";
import { BaseQueryApi }                     from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// Import Own Components
import { apiUrl }         from "helpers";
import {  clearUserData } from "store/slice/authSlice";
import { ISlices }        from "store/slice/slice.interface";

// Injects token in every request
const baseQuery = fetchBaseQuery({
	baseUrl        : apiUrl,
	prepareHeaders : (headers, { getState }) => {
		const { token } = ( getState() as ISlices ).authSlice;

		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

// Logs the user out if token isn't valid
const baseQueryWithReauth = async (args : FetchArgs | string, api : BaseQueryApi, extraOptions : {}) => {
	const result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		api.dispatch(clearUserData());
	}

	return result;
};

// Retry at most 2 times.
const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries : 2 });

export const api = createApi({
	reducerPath : "api",
	baseQuery   : baseQueryWithRetry,
	tagTypes    : [],
	endpoints   : () => ({}),
});
