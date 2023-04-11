export type ParamsType = {
    dataType?: 'news' | 'blog' | 'pr';
    lang?: 'rus' | 'eng';
    categoryUri?: string;
    recentActivityArticlesMaxArticleCount?: number;
    keyword?: string;
    keywordLoc?: string;
};

export type StreamActicleType = {
    uri: 'string';
    lang: 'string';
    isDuplicate: 'boolean';
    date: 'string';
    time: 'string';
    dateTime: 'string';
    sim: 'double';
    url: 'string';
    title: 'string';
    body: 'string';
    source: {
        uri: 'string';
        dataType: 'string';
        title: 'string';
        description: 'string';
        location: {
            type: 'string';
            label: {
                eng: 'string';
            };
        };
    };
    categories: [
        {
            uri: 'string';
            label: 'string';
            wgt: 0;
        }
    ];
    links: ['string'];
    videos: ['string'];
    image: 'string';
    duplicateList: ['string'];
    originalArticle: 'string';
    eventUri: 'string';
    location: {
        type: 'string';
        label: {
            eng: 'string';
        };
    };
};

export type StreamResponseType = {
    recentActivityArticles: {
        activity: StreamActicleType[];
    };
};
