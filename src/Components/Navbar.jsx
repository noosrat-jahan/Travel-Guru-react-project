import React from 'react';
import logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const links = <>
        <li> <NavLink to="/news">News</NavLink> </li>
        <li> <NavLink to="/destination">Destination</NavLink> </li>
        <li> <NavLink to="/blog">Blog</NavLink> </li>
        <li> <NavLink to="/contact">Contact</NavLink> </li>
    </>
    return (
        <div>
            <div className="navbar text-black z-10 w-11/12  absolute top-4 lg:p-4 left-[8%]">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="" className='w-20' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <input type="text" name="" id="" placeholder="🔎 Search your Destination..."  className='border border-blue-600 p-2 w-60 rounded-md'/>
                    <ul className="menu menu-horizontal px-1 space-x-5 ml-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-[#F9A51A] rounded-md px-5 font-semibold text-lg py-1">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;