import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import { divideArray } from '../utils/utils';
import { Facebook } from 'react-content-loader';
import { allCategoriesAi } from '../customData';
import { newsAIApi } from '../store/services/newsAIApi';
import { StreamActicleType } from '../types/newsAIAPiTypes';
import Heading from '../UI/Heading';

interface CategoryGridSectionProps {
    list: StreamActicleType[];
    title: string;
}

const CategoryGridSection = ({ list, title }: CategoryGridSectionProps) => {
    return (
        <div>
            <Heading>{title}</Heading>
            <article className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 '>
                {list.map((item) => (
                    <div key={item.url} className=''>
                        <ArticleItem data={item} />
                    </div>
                ))}
            </article>
        </div>
    );
};

const CategoryPage = () => {
    const [inputValue, setInputValue] = useState('');

    const { uri } = useParams();
    if (!uri) return <div>Нет такой категории</div>;

    const categoryUri = 'news/' + uri;

    const { data, isLoading } = newsAIApi.useGetStreamOfArticlesQuery({
        categoryUri: categoryUri,
        recentActivityArticlesMaxArticleCount: 27,
        keyword: inputValue,
        keywordLoc: 'body, title',
    });

    const currentCategory = allCategoriesAi.find(
        (item) => item.uri === categoryUri
    )?.label;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) return <Facebook />;

    if (!data) return <div>Error</div>;

    const categoryList = data.recentActivityArticles.activity;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    return (
        <>
            <div className='flex flex-wrap items-baseline justify-between gap-2'>
                <Heading>{currentCategory ? currentCategory : uri}</Heading>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Введите слово или фразу'
                    className='rounded border border-gray-300 px-2 py-1 outline-none transition hover:border-gray-500 focus:border-indigo-500'
                />
            </div>
            {inputValue.length !== 0 && categoryList.length === 0 ? (
                <div>По вашему запросу ничего не найдено</div>
            ) : (
                <CategoryGridSection list={categoryList} title='' />
            )}
        </>
    );
};

export default CategoryPage;
