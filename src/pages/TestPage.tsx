import React from 'react';
import { newsAIApi } from '../store/services/newsAIApi';

const TestPage = () => {
    const { data } = newsAIApi.useGetCategoriesQuery('');

    return <div>{JSON.stringify(data)}</div>;
};

export default TestPage;
