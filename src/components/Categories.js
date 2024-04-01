import React from 'react';
import { categories } from '../data/data';
import { FaPizzaSlice, FaHamburger, FaCarrot, FaIceCream, FaCoffee, FaCocktail } from 'react-icons/fa';

const iconMapping = {
    "Pizza": <FaPizzaSlice />,
    "Burger": <FaHamburger />,
    "Salad": <FaCarrot />,
    "Ice Cream": <FaIceCream />,
    "Coffee": <FaCoffee />,
    "Cocktail": <FaCocktail />
};

const Categories = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-8'>
            <h1 className='text-orange-500 font-bold text-3xl text-center mb-6'>
                Trending Categories
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {categories.map((item) => (
                    <div key={item.id} className='flex flex-col items-center transform transition-transform hover:scale-105'>
                        <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center'>
                            {iconMapping[item.name]}
                        </div>
                        <p className='mt-2 text-center'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
