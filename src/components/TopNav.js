import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { MdHelp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);

    return (
        <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setSideNav(!sideNav)} className="lg:hidden cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>
                <Link to="/">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-5 font-bold">Yum<span className="text-orange-700">Eats</span></h1>
                </Link>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-orange-700 text-white rounded-full p-2 font-semibold">Free Delivery</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-full flex items-center px-3 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent p-3 w-full focus:outline-none" type="text" placeholder="Search Meals" />
            </div>
            <Link to="/cart">
                <button className="bg-orange-700 text-white hidden md:flex items-center px-5 py-3 rounded-full hover:bg-white hover:text-orange-700 transition-all border-orange-700">
                    <BsFillCartFill size={20} className="mx-1" />Cart
                </button>
            </Link>
            {sideNav ? (
                <div className="fixed z-50 top-0 left-0 w-full h-full bg-black opacity-50" onClick={() => setSideNav(false)}></div>
            ) : null}
            <div className={sideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-50 duration-300 overflow-y-auto" : "hidden"}>
                <div className="flex justify-end p-4">
                    <AiOutlineClose onClick={() => setSideNav(false)} size={25} className="cursor-pointer" />
                </div>
                <nav className="text-gray-900">
                    <ul className="flex flex-col p-4">
                        <li className="text-xl py-4 flex">
                            <BsPerson size={25} className="mr-4 text-white bg-black rounded-full p-2" />
                            <span className="font-semibold">My Account</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <TbTruckReturn size={25} className="mr-4 text-white bg-black rounded-full p-2" />
                            <span className="font-semibold">Delivery</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdOutlineFavorite size={25} className="mr-4 text-white bg-black rounded-full p-2" />
                            <span className="font-semibold">My Favourite</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaGoogleWallet size={25} className="mr-4 text-white bg-black rounded-full p-2" />
                            <span className="font-semibold">My Wallet</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdHelp size={25} className="mr-4 text-white bg-black rounded-full p-2" />
                            <span className="font-semibold">Help</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopNav;
