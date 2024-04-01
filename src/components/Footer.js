import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-teal-900 text-gray-100 py-12'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Logo and Description */}
                    <div className='md:col-span-1'>
                        <h1 className='text-3xl font-bold text-teal-400 mb-4'>YumEats</h1>
                        <p className='text-gray-300 mb-4'>
                            Experience the convenience of having your favorite meals delivered right to your doorstep. Our app offers a wide variety of options to choose from, ensuring there's always something for everyone. Whether you're craving pizza, salad, or a burger, we've got you covered.
                        </p>
                        <div className='flex space-x-4'>
                            <a href="https://www.facebook.com/"> <FaFacebookSquare size={30} /></a>
                            <a href="https://www.instagram.com/saurabh._shukla._"> <FaInstagram size={30} /></a>
                            <a href="https://github.com/"> <FaGithubSquare size={30} /></a>
                            <a href="https://twitter.com/"> <FaTwitterSquare size={30} /></a>
                            <a href="https://dribbble.com/"> <FaDribbbleSquare size={30} /></a>
                        </div>
                    </div>
                    {/* Locations */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:gap-y-0'>
                        <div>
                            <h6 className='font-medium text-gray-300 mb-2'>Location</h6>
                            <ul className='text-gray-400'>
                                <li>New York</li>
                                <li>USA</li>
                                <li>India</li>
                                <li>Canada</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-gray-300 mb-2'>Location</h6>
                            <ul className='text-gray-400'>
                                <li>New York</li>
                                <li>USA</li>
                                <li>India</li>
                                <li>Canada</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-gray-300 mb-2'>Location</h6>
                            <ul className='text-gray-400'>
                                <li>New York</li>
                                <li>USA</li>
                                <li>India</li>
                                <li>Canada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
