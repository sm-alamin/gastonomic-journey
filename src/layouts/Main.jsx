import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;