import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { FiExternalLink } from 'react-icons/fi';
import he from 'he';
import { StreamActicleType } from '../types/newsAIAPiTypes';

interface ArticleItemProps {
    data: StreamActicleType;
    isCategoryList?: boolean;
}

const ArticleItem = ({ data, isCategoryList = false }: ArticleItemProps) => {
    const date = DateTime.fromISO(data.date);
    const formattedDate = date.toLocaleString({
        month: 'long',
        day: 'numeric',
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`h-full rounded-lg border border-transparent transition ${
                isHovered && 'border-gray-200 shadow-2xl'
            }`}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative flex h-full min-h-[430px] flex-col gap-8`}
            >
                <div className={`relative `}>
                    {data.image ? (
                        <img
                            src={data.image}
                            className={`w-full  ${
                                isCategoryList
                                    ? 'h-full rounded-l-lg object-contain'
                                    : 'h-[200px] rounded-t-lg object-cover'
                            }`}
                        />
                    ) : (
                        <div
                            className={`'rounded-t-lg' h-[200px] w-full bg-indigo-500 p-8 text-center text-gray-300`}
                        >
                            Извините, изображение в данный момент недоступно.
                        </div>
                    )}
                    <div
                        className={`absolute top-0 h-[200px] w-full rounded-t-lg bg-gray-900 bg-opacity-40 transition ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className='flex h-full items-center justify-center gap-2'>
                            <span className='font-semibold text-white'>
                                Полная статья
                            </span>
                            <FiExternalLink className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex   flex-1 flex-col justify-between overflow-hidden px-4'>
                    <div className='mb-4'>
                        <h2 className='mb-4 text-base font-semibold'>
                            {he.decode(data.title)}
                        </h2>
                        <p className='h-[140px] overflow-hidden text-sm text-black'>
                            {he.decode(data.body)}
                        </p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='text-sm font-medium text-gray-600'>
                            {data.source.uri}
                        </div>
                        <p className='text-sm'>{formattedDate}</p>
                    </div>
                </div>
                <a
                    href={data.url}
                    target='_blank'
                    className={`absolute z-10 h-full w-full rounded-lg  ${
                        isHovered ? 'block' : 'hidden'
                    }`}
                    rel='noreferrer'
                ></a>
            </div>
            <hr className='block h-0.5 sm:hidden' />
        </article>
    );
};

export default ArticleItem;
