import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import TestPage from './pages/TestPage';
import Blogs from './pages/Blogs';

const App = () => {
    return (
        <div className=' font-roboto'>
            <Header />
            <div className='container mx-auto min-h-screen py-20'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route
                        path='/category/news/:uri'
                        element={<CategoryPage />}
                    />
                    {/* <Route path='/search' element={<SearchPage />} /> */}
                    <Route path='/test' element={<TestPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
