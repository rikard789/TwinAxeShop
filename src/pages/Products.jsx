import React, { useState, useEffect } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const [products, setProducts] = useState<Product[]>([]);
const url = "https://jsonplaceholder.typicode.com/users";
const [products, setProducts] = useState([]);

const fetchProducts = () => {
return fetch(url)
    .then((res) => res.json())
    .then((d) => setProducts(d))
}


useEffect(() => {
    fetchProducts();
}, []);

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
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="grid grid-cols-1 gap-4">
                    {products.map(product => (
                    <div key={product.id} className="border rounded-lg p-4 flex items-center">
                        {/* Image Section */}
                        <div className="w-1/4 mr-4">
                        <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                        </div>
                        {/* Name and Description Section */}
                        <div className="w-1/2">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        </div>
                        {/* Price and Add to Cart Section */}
                        <div className="w-1/4">
                        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Add to Cart
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Products;