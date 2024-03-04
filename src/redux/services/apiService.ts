import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    retry,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { store } from '@/redux/store';
import { RootState } from '@/hooks/useRedux';

// create a new mutex
const mutex = new Mutex();

const baseQuery = retry(
    fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        credentials: 'include',
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = (getState() as RootState).root.auth.accessToken;
            headers.set('Authorization', `Bearer ${token}`);

            return headers;
        },
    }),
    {
        maxRetries: 3,
    },
);

const BaseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);
    if (!result.error) {
        return result;
    }

    if (result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    } else {
        console.log(result.error);
    }

    return result;
};

export const apiService = createApi({
    baseQuery: BaseQueryWithReAuth,
    endpoints: () => ({}),
});
