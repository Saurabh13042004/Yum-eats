import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { mealData } from '../data/data';

const Meal = () => {
    const [foods, setFoods] = useState(mealData);

    const filterCat = (category) => {
        setFoods(
            mealData.filter((item) => item.category === category)
        );
    };

    return (
        <div className='max-w-screen-xl mx-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-3xl text-center py-2'>
                Our Meals
            </h1>
            <div className='flex justify-center mb-8'>
                <button onClick={() => setFoods(mealData)} className='mx-2 px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none'>
                    All
                </button>
                <button onClick={() => filterCat("pizza")} className='mx-2 px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none'>
                    Pizza
                </button>
                <button onClick={() => filterCat("chicken")} className='mx-2 px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none'>
                    Chicken
                </button>
                <button onClick={() => filterCat("salad")} className='mx-2 px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none'>
                    Salad
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {foods.map((item) => (
                    <div key={item.id} className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300'>
                        <img src={item.image} className='w-full h-48 object-cover' alt={item.name} />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold mb-2'>{item.name}</h3>
                            <div className='flex justify-between items-center'>
                                <p className='text-orange-600 font-bold'>{item.price}</p>
                                <button className='flex items-center text-orange-600 font-semibold'>
                                    Add to Cart <AiOutlineArrowRight className='ml-1' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meal;
