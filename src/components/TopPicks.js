import React, { useState } from 'react';
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const TopPicks = ({ addToCart }) => {
  const [cartCount, setCartCount] = useState(0); // Initialize cartCount state

  const handleAddToCart = (item) => {
    addToCart(item); // Call the addToCart function from props
    setCartCount(cartCount + 1); // Increment cartCount when an item is added
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-6">
        Top Picks
      </h1>
      <div className="lg:hidden px-4 mb-6">
        <Splide options={{ perPage: 1, gap: '1rem', drag: true, arrows: false }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  className="h-60 w-full object-cover rounded-t-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={item.img}
                  alt={item.title}
                />
                <div className="p-4">
                  <p className="font-semibold text-lg mb-2">{item.title}</p>
                  <p className="text-gray-600">Rs. {item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)} // Use handleAddToCart to update cartCount
                    className="bg-orange-500 text-white mt-4 py-2 px-4 rounded-full block w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="hidden lg:flex justify-center">
        <Splide options={{ perPage: 4, gap: '1rem', drag: true, arrows: false }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  className="h-60 w-full object-cover rounded-t-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={item.img}
                  alt={item.title}
                />
                <div className="p-4">
                  <p className="font-semibold text-lg mb-2">{item.title}</p>
                  <p className="text-gray-600">Rs. {item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)} // Use handleAddToCart to update cartCount
                    className="bg-orange-500 text-white mt-4 py-2 px-4 rounded-full block w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Link to="/cart">
        <div className="bg-orange-500 text-white rounded-full p-2 px-4 absolute top-4 right-4">
          <span>{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default TopPicks;
