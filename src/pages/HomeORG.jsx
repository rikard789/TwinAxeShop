import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                {products.map(product => (
                    <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-start">
                                <button>
                                    <img src={product.image} alt="Axe"
                                         className="w-72 h-48 border-2 rounded border-green-500"/>

                                </button>
                                <div className="ml-4">
                                    <button className="text-black font-bold p-2 text-2xl">
                                        Product name
                                    </button>
                                    <p className="ml-2 text-black text-xl">• Product spec 1</p>
                                    <p className="ml-2 mt-2 text-black text-xl">• Product spec 2</p>
                                    <p className="ml-2 mt-2 text-black text-xl">• Product spec 3</p>
                                    <p className="ml-2 mt-2 text-black text-xl">• Product spec 4</p>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-black font-bold text-3xl">499.99 PLN</p>
                                <button className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400">
                                    <p className="text-black font-bold text-2xl">ADD</p>
                                    <p className="text-black font-bold text-2xl">TO</p>
                                    <p className="text-black font-bold text-2xl">CART</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start">
                            <button>
                                <img src='src/images/axe1.jpg' alt="Axe" className="w-72 h-48"/>
                            </button>
                            <div className="ml-4">
                                <button className="text-black font-bold p-2 text-2xl">
                                    Product name
                                </button>
                                <p className="ml-2 text-black text-xl">• Product spec 1</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 2</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 3</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 4</p>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-black font-bold text-3xl">499.99 PLN</p>
                            <button className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400">
                                <p className="text-black font-bold text-2xl">ADD</p>
                                <p className="text-black font-bold text-2xl">TO</p>
                                <p className="text-black font-bold text-2xl">CART</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 p-4 ml-2 mr-2 mt-2">
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start">
                            <button>
                                <img src='src/images/axe1.jpg' alt="Axe" className="w-72 h-48"/>
                            </button>
                            <div className="ml-4">
                                <button className="text-black font-bold p-2 text-2xl">
                                    Product name
                                </button>
                                <p className="ml-2 text-black text-xl">• Product spec 1</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 2</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 3</p>
                                <p className="ml-2 mt-2 text-black text-xl">• Product spec 4</p>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-black font-bold text-3xl">499.99 PLN</p>
                            <button className="bg-gray-300 w-40 h-36 text-black font-bold p-2 mt-2 hover:bg-gray-400">
                                <p className="text-black font-bold text-2xl">ADD</p>
                                <p className="text-black font-bold text-2xl">TO</p>
                                <p className="text-black font-bold text-2xl">CART</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
