import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const newIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        setCurrentIndex(newIndex);
    };

    const nextSlider = () => {
        const newIndex = (currentIndex + 1) % sliders.length;
        setCurrentIndex(newIndex);
    };

    const moveToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-[1520px] h-[400px] relative mx-auto">
            <div
                className="w-full h-full rounded-2xl bg-cover duration-500"
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-5 text-3xl cursor-pointer bg-gray-200 rounded-full p-2">
                <BsChevronLeft onClick={prevSlider} className="text-orange-500" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-5 text-3xl cursor-pointer bg-gray-200 rounded-full p-2">
                <BsChevronRight onClick={nextSlider} className="text-orange-500" />
            </div>
            <div className="absolute bottom-4 flex justify-center w-full">
                {sliders.map((_, index) => (
                    <div
                        key={index}
                        className={`text-2xl mx-1 cursor-pointer ${
                            index === currentIndex ? 'text-orange-500' : 'text-gray-300'
                        }`}
                        onClick={() => moveToSlide(index)}
                    >
                        &bull;
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
