import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./navbar/navbar";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import ProductDescription from "./pages/ProductDescription";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/productdescription" element={<ProductDescription />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
