import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axe from '../images/axe1.jpg';
import axe2 from '../images/twinaxe_art.jpeg';
import { AuthContext } from "../AuthContext";

const products = [
    { id: 1, image: axe, name: "Axe", description: "description", price: 100 },
    { id: 2, image: axe2, name: "Axe_logo", description: "description", price: 10 },
    { id: 3, image: axe, name: "Axe 3", description: "description", price: 1 }
];

const Products = (props) => {
    const { token } = useContext(AuthContext);

    const handleAddToCart = (product) => {
        props.addToCart(product);
        console.log("New product added:", product.id);
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id} className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start">
                            <Link to={`/productdescription/${product.id}`}>
                                <img src={product.image} alt={product.name}
                                     className="w-72 h-48 border-2 rounded"/>
                            </Link>
                            <div className="ml-4">
                                <Link to={`/productdescription/${product.id}`}>
                                    <button className="text-black font-bold p-2 text-2xl">
                                        {product.name}
                                    </button>
                                </Link>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-black font-bold text-3xl">{product.price} PLN</p>
                            {token && (
                                <button
                                    className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <p className="text-black font-bold text-2xl">ADD</p>
                                    <p className="text-black font-bold text-2xl">TO</p>
                                    <p className="text-black font-bold text-2xl">CART</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
