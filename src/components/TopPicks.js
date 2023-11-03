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
    <div>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide options={{ perPage: 4, gap: '0.5rem', drag: true, arrows: false }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-2 pt-4 font-bold text-2xl">{item.title}</p>
                  <p className="px-2">Rs. {item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)} // Use handleAddToCart to update cartCount
                    className="border-dotted border-white text-white mx-2 absolute bottom-4"
                  >
                    Add to Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Link to="/cart">
        <div className="bg-orange-500 text-white rounded-full p-1 px-3 absolute top-1 right-2">
          <span>{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default TopPicks;
