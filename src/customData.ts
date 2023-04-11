import { cts } from './types/newsApiTypes';

type customCategoryAi = {
    label: string;
    uri: string;
};

export const someCategoriesAi: customCategoryAi[] = [
    {
        label: 'Бизнес',
        uri: 'news/Business',
    },
    {
        label: 'Здоровье',
        uri: 'news/Health',
    },
    {
        label: 'Спорт',
        uri: 'news/Sports',
    },
];

export const allCategoriesAi: customCategoryAi[] = [
    {
        uri: 'news/Arts_and_Entertainment',
        label: 'Искусство и Развлечение',
    },
    {
        uri: 'news/Business',
        label: 'Бизнес',
    },
    {
        uri: 'news/Environment',
        label: 'Окружение',
    },
    {
        uri: 'news/Health',
        label: 'Здоровье',
    },
    {
        uri: 'news/Politics',
        label: 'Политика',
    },
    {
        uri: 'news/Science',
        label: 'Наука',
    },
    {
        uri: 'news/Sports',
        label: 'Спорт',
    },
];

type customCategory = {
    name: string;
    value: cts;
};

export const allCategories: customCategory[] = [
    {
        name: 'Развлечение',
        value: 'entertainment',
    },
    {
        name: 'Бизнес',
        value: 'business',
    },
    {
        name: 'Общее',
        value: 'general',
    },
    {
        name: 'Здоровье',
        value: 'health',
    },
    {
        name: 'Наука',
        value: 'science',
    },
    {
        name: 'Спорт',
        value: 'sports',
    },
    {
        name: 'Технологии',
        value: 'technology',
    },
];

export const someCategories: customCategory[] = [
    {
        name: 'Развлечение',
        value: 'entertainment',
    },
    {
        name: 'Здоровье',
        value: 'health',
    },
    {
        name: 'Спорт',
        value: 'sports',
    },
];

export const footerLinksList = [
    {
        title: 'Продукты',
        links: ['Обязательно к прочтению', 'Ежедневная рассылка'],
    },
    {
        title: 'Компания',
        links: ['О нас', 'Карьера', 'Блог'],
    },
    {
        title: 'Ресурсы',
        links: ['Получить помощь', 'API разработчика', 'Реклама'],
    },
];

export const languages = [
    {
        name: 'English',
        language: 'en-us',
    },
    {
        name: 'Russian',
        language: 'ru-ru',
    },
    {
        name: 'French',
        language: 'fr-fr',
    },
];
