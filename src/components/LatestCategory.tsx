import React from 'react';
import { newsApi } from '../store/services/newsApi';
import ArticleItem from './ArticleItem';
import { capitalizeFirstLetter } from '../utils/utils';
import { Facebook } from 'react-content-loader';
import { useAppSelector } from '../store/store';
import { someCategories, someCategoriesAi } from '../customData';
import { newsAIApi } from '../store/services/newsAIApi';
import Heading from '../UI/Heading';

interface LatestCategorySectionProps {
    categoryLabel: string;
    categoryUri: string;
}

const LatestCategorySection = ({
    categoryLabel,
    categoryUri,
}: LatestCategorySectionProps) => {
    const { data, isLoading } = newsAIApi.useGetStreamOfArticlesQuery({
        categoryUri: categoryUri,
        recentActivityArticlesMaxArticleCount: 3,
    });

    if (isLoading) return <Facebook />;

    if (!data) return <div>Latest category Error</div>;

    return (
        <section className='mb-8'>
            <div>
                <Heading>{capitalizeFirstLetter(categoryLabel)}</Heading>
                <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3 lg:gap-x-4'>
                    {data.recentActivityArticles.activity.map((item, index) => (
                        <ArticleItem key={index} data={item} />
                    ))}
                </div>
            </div>
            <hr className='mt-4' />
        </section>
    );
};

const LatestCategory = () => {
    return (
        <div className='mx-auto'>
            <div>
                {someCategoriesAi.map((item, index) => (
                    <LatestCategorySection
                        key={index}
                        categoryLabel={item.label}
                        categoryUri={item.uri}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCategory;
