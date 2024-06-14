import React, { useState, useEffect } from 'react';
import axe from '../images/axe1.jpg'
import axe2 from '../images/twinaxe_art.jpeg'

const products = [
    {id: 1, image: axe, name: "Axe", description: "description", price: "99.99"},
    {id: 2, image: axe2, name: "Axe_logo", description: "description", price: "7.99"}
]

class Products extends React.Component{
    constructor (props){
        super(props);
    }

    render() {
        return (
            <div>
                {products.map(product => (
                    <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-start">
                                <button>
                                    <img src={product.image} alt="Axe"
                                         className="w-72 h-48 border-2 rounded"/>

                                </button>
                                <div className="ml-4">
                                    <button className="text-black font-bold p-2 text-2xl">
                                        {product.name}
                                    </button>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-black font-bold text-3xl">{product.price} PLN</p>
                                <button
                                    className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400">
                                    <p className="text-black font-bold text-2xl">ADD</p>
                                    <p className="text-black font-bold text-2xl">TO</p>
                                    <p className="text-black font-bold text-2xl">CART</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Products;
