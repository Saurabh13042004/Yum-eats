import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';

const NewsLetter = () => {
    return (
        <div className='bg-gray-900 text-white py-8'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='grid lg:grid-cols-3 gap-8'>
                    {/* Newsletter Text */}
                    <div className='lg:col-span-2 flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold mb-4 text-green-500'>Need advice on how to improve your flow?</h1>
                        <p className='text-lg mb-6'>Sign up for our newsletter and get free tips and tricks.</p>
                    </div>
                    {/* Newsletter Form */}
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input type='email' placeholder='Your email' className='p-3 w-full sm:w-auto rounded-md text-black mb-4 sm:mb-0 bg-gray-200' />
                            <button className='bg-green-500 text-white rounded-md font-medium px-6 py-3 sm:ml-4 hover:bg-green-600 transition-colors duration-300'>
                                <RiMailSendLine className='inline-block mr-2' size={20} />
                                Notify me
                            </button>
                        </div>
                        <p className='text-sm mt-2'>We are committed to the security of your data. <span className='text-green-500 cursor-pointer'>Privacy Policy</span></p>
                    </div>
                </div>
                {/* Divider */}
                <hr className='my-8 bg-gray-700 border-1'></hr>
            </div>
        </div>
    );
};

export default NewsLetter;
