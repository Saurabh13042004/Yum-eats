import React from 'react';

const Delivery = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-white py-16 px-8 overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-orange-500 font-bold text-3xl md:text-4xl text-center mb-8">
                Quick Delivery App
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center p-6 md:p-10 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg shadow-lg">
                    <p className="text-[#00df9a] font-bold text-lg mb-2">Get The App</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Limitless Convenience on Demand
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Experience the convenience of having your favorite meals delivered right to your doorstep. Our app offers a wide variety of options to choose from, ensuring there's always something for everyone. Whether you're craving pizza, salad, or a burger, we've got you covered. Plus, with our easy-to-use interface, ordering is a breeze. So why wait? Start enjoying the benefits of on-demand food delivery today.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-[200px] rounded-md font-medium py-3 shadow-md transition duration-300 ease-in-out focus:outline-none">
                        Get Started
                    </button>
                </div>
                <img
                    className="w-full md:w-auto mx-auto my-4 max-w-[550px] rounded-lg shadow-lg"
                    src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
                    alt="Image of mobile phones with the app"
                />
            </div>
        </div>
    );
};

export default Delivery;
