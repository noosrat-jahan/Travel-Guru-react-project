import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import Errorpage from '../Components/Errorpage';
import News from '../Components/News';
import Destination from '../Components/Destination';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import HomeBanner from '../Components/HomeBanner';
import Booking from '../Components/Booking';
import Login from '../Components/Login';
import Register from '../Components/Register';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomeBanner></HomeBanner>,
                children: [
                    {
                        path: "/booking",
                        element: <Booking></Booking>
                    }
                ]
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
])

export default Router;