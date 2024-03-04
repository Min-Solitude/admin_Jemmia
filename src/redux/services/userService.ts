import { apiService } from './apiService';

export const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getAuthUser: builder.query({
            query: () => 'users',
        }),
    }),
});

export const { useGetAuthUserQuery, useLazyGetAuthUserQuery } = userApi;
