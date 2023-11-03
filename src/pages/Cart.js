import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems }) {
    // Calculate the total bill
    const totalBill = cartItems.reduce((total, item) => total + (typeof item.price === 'number' ? item.price : 0), 0);

    const [isOrderPlaced, setOrderPlaced] = useState(false);

    function handlePayNow() {
        // Handle the "Pay Now" button click event here.
        // You can implement the payment logic as per your requirements.
        // For simplicity, this example just displays an alert.
        // You can replace this with actual payment processing code.
        alert('Confirm your order');
        setOrderPlaced(true);
    }

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-2xl font-bold text-center text-orange-500">Cart</h2>
            <ul className="mt-4">
                {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                        <div className="flex items-center">
                            <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded-full mr-4" />
                            <span>{item.title}</span>
                        </div>
                        <span className="font-bold">Rs {(typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A')}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 text-right">
                <span className="text-lg font-semibold">Total Bill: Rs {totalBill.toFixed(2)}</span>

            </div>
            <div className='text-center m-4'>
                {cartItems.length > 0 && !isOrderPlaced ? (
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-2" onClick={handlePayNow}>
                        Pay Now
                    </button>
                ) : isOrderPlaced ? (
                    <div>
                        <p>Your order has been placed.</p>
                        {cartItems.splice(0, cartItems.length)
}
                        {cartItems.length === 0  && (
                            <Link to="/">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-2" >
                                Order Now
                            </button>
                            </Link>
                        )}

                    </div>
                ) : null}

                {cartItems.length === 0 && <p className="text-center">No items in the cart.</p>}
            </div>
        </div>
    );
}

export default Cart;
