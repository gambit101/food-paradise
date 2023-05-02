import React from 'react';
import Header from './Header';
import Footer from './Footer';

// import Foods from './Foods';
import { Outlet } from 'react-router-dom';

const FoodsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default FoodsLayout;