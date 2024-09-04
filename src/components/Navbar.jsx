import React, { useEffect, useState } from 'react'
import logos from '../../public/logos.png'
import { FaUser } from "react-icons/fa";
import Modal from './Modal';

const Navbar = () => {

    const [isSticky, setSticky] = useState(false);

    useEffect( () => {

        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 0){
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);

        }

    },[])


    const navItems = <>
        <li><a href='/'>Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Menu</summary>
                <ul className="p-2">
                    <li><a href='/menu'>All </a></li>
                    <li><a>Salad</a></li>
                    <li><a>Pizza</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>Services</summary>
                <ul className="p-2">
                    <li><a>Online Order</a></li>
                    <li><a>Table Boking</a></li>
                    <li><a>Order Tracking</a></li>
                </ul>
            </details>
        </li>
        <li><a>Offers</a></li>
    </>
    return (
        <header className='max-w-screen-2xl conainer lg:mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
            <div className={`navbar lg:px-16 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" :""}`}>
                <div className="navbar-start">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* navItems */}
                            {navItems}
                        </ul>
                    </div>
                    <a href='/'><img className='w-30 h-12' src={logos} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* navItems */}
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* search */}

                    <button className="btn btn-ghost btn-circle hidden lg:flex">
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* my cart */}



                    <label tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:mr-3 hidden lg:flex items-center justify-center">
                        <div className="indicator">
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
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>


                    {/* button */}
                    <button
                     onClick={()=>document.getElementById('my_modal_5').showModal()}
                     className="btn bg-yellow-500 rounded-full lg:px-6 mr-3  lg:flex items-center gap-2 text-white"><FaUser />Login</button>

                     <Modal/>
                </div>
            </div>
        </header>
    )
}


export default Navbar
