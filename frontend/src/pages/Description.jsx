import React, { useState, useEffect } from 'react';
import axe from '../images/axe1.jpg'
import axe2 from '../images/twinaxe_art.jpeg'

const products = [
    {id: 1, image: axe, name: "Axe", specifications: "specifications", description: "description", price: "99.99"}
]

class Products extends React.Component{
    constructor (props){
        super(props);
    }

    render() {
        const [product] = products;

        return (
            <div className="flex items-start justify-between w-full h-full">
                <div className="flex mr-2 ml-2 mt-2 items-start w-full h-full">
                    <div className="mr-2 flex flex-col w-1/2 h-full">
                        <div className="bg-gray-200 p-4 flex-grow flex flex-col">
                            <div className="text-black text-center font-bold text-2xl">
                                {product.name}
                            </div>
                            <div className="flex justify-center items-center flex-grow">
                                <img src={product.image} alt="Axe" className="rounded h-full"/>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 mt-2 flex-grow">
                            <div className="text-black text-2xl">
                                Product specifications
                            </div>
                            {product.specifications}
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 w-1/2 flex flex-col h-full">
                        <div className="text-black text-center font-bold text-2xl">
                            Description
                        </div>
                        <div className="text-black flex-grow">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Products;