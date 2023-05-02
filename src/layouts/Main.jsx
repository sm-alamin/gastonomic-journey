import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='bg-black h-36 text-white'>
            <Header />
            <NavigationBar/>
            </div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;