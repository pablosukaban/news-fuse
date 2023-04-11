import React, { useMemo } from 'react';
import { Facebook } from 'react-content-loader';
import { newsAIApi } from '../store/services/newsAIApi';
import ArticleItem from '../components/ArticleItem';
import { DateTime } from 'luxon';
import Heading from '../UI/Heading';

const Blogs = () => {
    const now = useMemo(() => {
        return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    }, []);

    // const { data, isLoading } = newsApi.useGetNewsQuery({
    //     limit: 8,
    //     categories: '-business',
    //     ...p,
    // });

    const { data, isLoading } = newsAIApi.useGetStreamOfArticlesQuery({
        dataType: 'blog',
        lang: 'rus',
    });

    if (isLoading) return <Facebook />;

    if (!data) return <div>Latest error</div>;

    return (
        <div className='mx-auto'>
            <div className='flex items-center justify-between'>
                <Heading>Популярные блоги</Heading>
                <p>{now}</p>
            </div>
            <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 '>
                {data.recentActivityArticles.activity.map((item, index) => (
                    <ArticleItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
