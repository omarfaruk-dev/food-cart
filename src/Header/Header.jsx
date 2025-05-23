import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/fast-foods'>Fast Food</NavLink></li>

                        <li><NavLink to='/mix-foods'>Mix Food</NavLink></li>
                    </ul>
                </div>
                <a className="font-bold text-xl">FoodCart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/fast-foods'>Fast Food</NavLink></li>
                <li><NavLink to='/mix-foods'>Mix Food</NavLink></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;