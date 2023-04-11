export type cts =
    | 'general'
    | 'business'
    | 'entertainment'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology'
    | '-general'
    | '-business'
    | '-entertainment'
    | '-health'
    | '-science'
    | '-sports'
    | '-technology';

export type ls = 'ru' | 'en' | 'fr';

export type ss = 'published_asc' | 'published_desc' | 'popularity';

export type cns = 'us' | 'fr';

export type ParamsType = {
    sources?: string;
    categories?: cts;
    countries?: cns;
    languages?: ls;
    keywords?: string;
    sort?: ss;
    offset?: number;
    limit?: number;
};

export type ArticleType = {
    author: string | null;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string | null;
    category: string;
    language: string;
    country: string;
    published_at: string;
};

export type ResponseType = {
    pagination: { limit: number; offset: number; count: number; total: number };
    data: ArticleType[];
};
