import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./navbar/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

function App() {

   // const [cartItems, setCartItems] = useState([]);

   // const addToCart = (product) => {
   //    setCartItems(prevItems => {
   //      const itemExists = prevItems.find(item => item.id === product.id);
   //      if (itemExists) {
   //        return prevItems.map(item =>
   //          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
   //        );
   //      }
   //      return [...prevItems, { ...product, quantity: 1 }];
   //    });
   //  };
  
   //  const removeFromCart = (productId) => {
   //    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
   //  };



    return (
      <React.Fragment>
         <Navbar />
         <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/payment" element={<Payment />} />
            </Routes>
         </BrowserRouter>
      </React.Fragment>
    )
}

export default App;
