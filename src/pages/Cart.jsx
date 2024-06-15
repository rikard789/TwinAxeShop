import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = typeof item.price === "number" ? item.price : 0;
            return total + price * item.quantity;
        }, 0).toFixed(2);
    };

    const getTotalAmount = () => {
        return cart.reduce((totalquantity, item) => {
            const quantity = typeof item.quantity === "number" ? item.quantity : 0;
            return totalquantity + quantity;
        }, 0);
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handleIncrement = (itemId) => {
        updateQuantity(itemId, 1); // Increment by 1
    };

    const handleDecrement = (itemId) => {
        updateQuantity(itemId, -1); // Decrement by 1
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl mb-2">Shopping Cart</h1>
            <div className="text-xl mb-2">You have {getTotalAmount()} items in your cart
                <h2 className="text-xl mb-2">Total: ${getTotalPrice()}</h2>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between border-b pb-4">
                </div>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id} className="flex items-center py-4 border-b">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                            <div className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div>{item.name}</div>
                                        <div className="text-sm">{item.description}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-4">{item.quantity}</div>
                                        <div className="flex flex-col">
                                            <button onClick={() => handleIncrement(item.id)}>
                                                ▲
                                            </button>
                                            <button onClick={() => handleDecrement(item.id)}>
                                                ▼
                                            </button>
                                        </div>
                                    </div>
                                    <div>${(item.price * item.quantity).toFixed(2)}</div>
                                    <button onClick={() => handleRemove(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>


                    ))
                ) : (
                    <p className="text-center text-gray-600">Your cart is empty</p>
                )}
                <div className="flex justify-end mt-6">
                    <a href="/payment">
                        <button className="px-6 py-3">
                            Payment and Delivery >
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cart;
