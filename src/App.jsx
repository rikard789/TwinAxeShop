import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./navbar/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Payment from "./pages/Payment";
import ProductDescription from "./pages/ProductDescription";
import Products from "./pages/Products";

function App() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const productIndex = updatedCart.findIndex(item => item.id === product.id);
            if (productIndex >= 0) {
                updatedCart[productIndex].quantity += 1;
            } else {
                updatedCart.push({ ...product, quantity: 1 });
            }
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== itemId);
            return updatedCart;
        });
    };

    const updateQuantity = (itemId, amount) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        quantity: Math.max(1, item.quantity + amount) // Ensure quantity does not go below 1
                    };
                }
                return item;
            });
            return updatedCart;
        });
    };


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <React.Fragment>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route
                        path="/cart"
                        element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
                    />
                    <Route path="/productdescription" element={<ProductDescription />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
