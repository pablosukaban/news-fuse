import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsType, StreamResponseType } from '../../types/newsAIAPiTypes';

const BASE_URL = ' http://eventregistry.org/api/v1';
const API_KEY = 'c63db148-7e5e-4064-9ecb-be7a289a9e69';

export const newsAIApi = createApi({
    reducerPath: 'newsAiApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getStreamOfArticles: builder.query<StreamResponseType, ParamsType>({
            query: (param) => ({
                url: '/minuteStreamArticles',
                params: {
                    apiKey: API_KEY,
                    articleBodyLen: 100,
                    includeArticleConcepts: true,
                    includeArticleCategories: true,
                    recentActivityArticlesUpdatesAfterMinsAgo: 120,
                    lang: 'eng',
                    ...param,
                },
            }),
        }),
        getCategories: builder.query({
            query: () => ({
                url: 'suggestCategoriesFast',
                params: {
                    apiKey: API_KEY,
                },
            }),
        }),
        // getArticlesByCategory: builder.query<StreamResponseType, ParamsType>({
        //     query: (oaram) => ({
        //         url: '/article/getArticles',
        //         params: {
        //             action: 'getArticles',
        //             apiKey: API_KEY,
        //         },
        //     }),
        // }),
    }),
});
