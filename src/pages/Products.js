import React, { useState, useEffect } from 'react';
import axe from '../images/axe1.webp'
import axe2 from '../images/twinaxe_art.jpeg'

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const [products, setProducts] = useState<Product[]>([]);


// const url = "https://jsonplaceholder.typicode.com/users";
// const [products, setProducts] = useState([]);

// const fetchProducts = () => {
// return fetch(url)
//     .then((res) => res.json())
//     .then((d) => setProducts(d))
// }

// useEffect(() => {
//     fetchProducts();
// }, []);


// const [cartItems, setCartItems] = useState([]);

// const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const itemExists = prevItems.find(item => item.id === product.id);
//       if (itemExists) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };



const products = [
    {id: 1, image: axe, name: "Axe", description: "description", price: "99.99"},
    {id: 2, image: axe2, name: "Axe_logo", description: "description", price: "7.99"}
]


class Products extends React.Component{
    constructor (props){
        super(props);
    }

//   useEffect(() => {
//     // Simulating fetching products from an API
//     fetch('https://api.example.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

  render() {
        return (
            // <div className="container mx-auto py-8">
            // <h1 className="text-2xl font-bold mb-4">Products</h1>
            // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            //     {products.map(product => (
            //         <div key={product.id} className="border rounded-lg p-4">
            //             <h2 className="text-lg font-semibold">{product.name}</h2>
            //             <p className="text-gray-600">${product.price.toFixed(2)}</p>
            //         </div>
            //     ))}
            // </div>
            // </div>
            <div className="container mx-auto py-8">
                {/* <h1 className="text-2xl font-bold mb-4">Products</h1> */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                        {products.map(product => (
                        <div className="border-8 border-sky-500 p-3 mt-4">
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-start">
                                    <button>
                                        <img src={product.image} alt="Axe" className="w-72 h-48 border-2 rounded border-green-500" />
                                    </button>
                                    <div className="ml-4">
                                        <button className="text-black font-bold p-2 text-2xl">
                                            product.name
                                        </button>
                                        <p>product.description</p>
                                        {/* <p className="ml-2 text-black text-xl">• Product spec 1</p>
                                        <p className="ml-2 mt-2 text-black text-xl">• Product spec 2</p>
                                        <p className="ml-2 mt-2 text-black text-xl">• Product spec 3</p>
                                        <p className="ml-2 mt-2 text-black text-xl">• Product spec 4</p> */}
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-black font-bold text-3xl">${product.price}</p>
                                    <button className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400">
                                        <p className="text-black font-bold text-2xl">ADD</p>
                                        <p className="text-black font-bold text-2xl">TO</p>
                                        <p className="text-black font-bold text-2xl">CART</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>    
            </div>
        )
    }
}

export default Products;


{/* <div key={product.id} className="border rounded-lg p-4 flex items-center"> */}
                        {/* Image Section
                        <div className="w-1/4 mr-4">
                        <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                        </div>
                        {/* Name and Description Section */}
                        // <div className="w-1/2">
                        // <h2 className="text-lg font-semibold">{product.name}</h2>
                        // <p className="text-gray-600">{product.description}</p>
                        // </div>
                        {/* Price and Add to Cart Section */}
                        // <div className="w-1/4">
                        // <p className="text-lg font-semibold">${product.price.fixed(2)}</p>
                        {/* <button onClick={() => addToCart(product.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> */}
                        // <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        //     Add to Cart
                        // </button> */}
                        // </div>