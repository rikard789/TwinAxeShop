import React from "react";

const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

class Cart extends React.Component {
    constructor(props) {
      super(props);
    }

      render() {
          return (
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between border-b pb-4">
                        <h2 className="text-xl font-semibold">Items</h2>
                        <h2 className="text-xl font-semibold">Total: ${getTotalPrice()}</h2>
                    </div>
                    {cartItems.map(item => (
                    <div key={item.id} className="flex items-center py-4 border-b">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="ml-4 flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="ml-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
                        </div>
                    </div>
                    ))}
                    <div className="flex justify-end mt-6">
                        <a href="/payment">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                                Proceed to Checkout
                            </button>
                        </a>
                    </div>
                </div>
            </div>
          ) 
        }
  }
  
  export default Cart;