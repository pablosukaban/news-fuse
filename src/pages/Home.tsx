import React from 'react';
import Latest from '../components/Latest';
import LatestCategory from '../components/LatestCategory';
import CategoryNames from '../components/CategoryNames';

const Home = () => {
    return (
        <>
            <Latest />
            <LatestCategory />
            <CategoryNames />
        </>
    );
};

export default Home;
