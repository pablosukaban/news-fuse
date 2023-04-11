import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsType, ResponseType } from '../../types';

const BASE_URL = 'http://api.mediastack.com/v1';
const API_KEY = '7f15894ce975b36ae5fdbca3b58fe51f';

export const newsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<ResponseType, ParamsType>({
            query: (param) => ({
                url: '/news',
                params: {
                    access_key: API_KEY,
                    ...param,
                },
            }),
        }),
    }),
});
