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
                        quantity: Math.max(1, item.quantity + amount)
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

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <Router>
            <React.Fragment>
                <Navbar clearCart={clearCart} />
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route
                        path="/cart"
                        element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
                    />
                    <Route path="/products" element={<Products addToCart={addToCart} />} />
                    <Route path="/productdescription/:productId" element={<ProductDescription />} />
                    {/* Pass clearCart function to Payment component */}
                    <Route path="/payment" element={<Payment clearCart={clearCart} />} />
                </Routes>
            </React.Fragment>
        </Router>
    );
}

export default App;
