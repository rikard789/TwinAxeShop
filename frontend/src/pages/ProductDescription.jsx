import React from 'react';
import { useParams } from 'react-router-dom';
import axe from '../images/axe1.jpg';
import axe2 from '../images/twinaxe_art.jpeg';

const products = [
    { id: 1, image: axe, name: "Axe", description: "description", price: 100 },
    { id: 2, image: axe2, name: "Axe_logo", description: "description", price: 10 },
    { id: 3, image: axe, name: "Axe 3", description: "description", price: 1 }
];

const ProductDescription = () => {
    const { productId } = useParams();
    const product = products.find(prod => prod.id === parseInt(productId));

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="h-screen">
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
        </div>
    );
};

export default ProductDescription;
