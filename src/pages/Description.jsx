import React, { useState, useEffect } from 'react';
import axe from '../images/axe1.jpg'
import axe2 from '../images/twinaxe_art.jpeg'

const products = [
    {id: 1, image: axe, name: "Axe", specifications: "specifications", description: "description", price: "99.99"},
    {id: 2, image: axe2, name: "Axe_logo", specifications: "specifications", description: "description", price: "7.99"}
]

class Products extends React.Component{
    constructor (props){
        super(props);
    }

    render() {
        const [product] = products;

        return (
            <div>

                <div className="flex items-start justify-between w-full">
                    <div className="flex items-start">
                        <div>
                            <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2 h-64">
                                <div className="text-black text-center font-bold text-2xl">
                                    {product.name}
                                </div>
                                <div>
                                    <img src={product.image} alt="Axe"
                                         className="w-72 h-48 border-2 rounded"/>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-4 ml-2 mr-2 mt-4 h-48">
                                <div className="text-black text-2xl">
                                    Product specifications
                                </div>
                                {product.specifications}
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 mr-2 mt-2">
                            <div className="text-black text-center font-bold text-2xl">
                                Description
                            </div>
                            <div className="text-black w-96 h-96 mt-4">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Products;
