/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';
import { __API__ } from '../const/constants';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const accessToken = Cookies.get('accessToken');
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }
        },
    }),
    endpoints: (builder) => ({}),
});
