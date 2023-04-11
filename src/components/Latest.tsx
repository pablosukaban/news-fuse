import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { Facebook } from 'react-content-loader';
import ArticleItem from './ArticleItem';
import { newsAIApi } from '../store/services/newsAIApi';
import Heading from '../UI/Heading';

const Latest = () => {
    const now = useMemo(() => {
        return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    }, []);

    const { data, isLoading } = newsAIApi.useGetStreamOfArticlesQuery({
        dataType: 'news',
        recentActivityArticlesMaxArticleCount: 6,
    });

    if (isLoading) return <Facebook />;

    if (!data) return <div>Latest error</div>;

    return (
        <div className='mx-auto'>
            <div className='flex items-center justify-between'>
                <Heading>Последние новости</Heading>
                <p>{now}</p>
            </div>
            <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 '>
                {data.recentActivityArticles.activity.map((item, index) => (
                    <ArticleItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Latest;
