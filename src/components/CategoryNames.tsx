import React from 'react';
import { Link } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import { allCategoriesAi, allCategories } from '../customData';
import Heading from '../UI/Heading';

const CategoryNames = () => {
    return (
        <section className=''>
            <div className='mb-4'>
                <Heading>Откройте для себя больше тем</Heading>
            </div>
            <ul className='flex flex-wrap items-center gap-4'>
                {allCategoriesAi.map((item, index) => (
                    <Link to={`/category/${item.uri}`} key={index}>
                        <SingleCategory givenCategory={item.label} />
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default CategoryNames;
