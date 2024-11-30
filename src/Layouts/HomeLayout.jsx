import React from 'react';
import Navbar from '../Components/Navbar';
import HomeBanner from '../Components/HomeBanner';
import { Outlet, useLocation } from 'react-router-dom';

const HomeLayout = () => {

    const location = useLocation()
    console.log(location.pathname);
    return (
        <div className='font-montserrat'>
            <Navbar className={location.pathname != "/" ? 'text-black' : ""}></Navbar>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default HomeLayout;