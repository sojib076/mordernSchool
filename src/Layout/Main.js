import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <h1> This is a header </h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;