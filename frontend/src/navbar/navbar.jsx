import React, { useContext } from "react";
import { AuthContext } from '../AuthContext';
import './navbar.css';
import logo from '../images/twinaxe_art.jpeg';
import cart from '../images/cart-svgrepo-com.svg';
import { useNavigate } from "react-router-dom";

const Navbar = ({ clearCart }) => { 
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
        clearCart(); 
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo and Company Name */}
                <div className="flex items-center navbar-logoname">
                    <img className="h-12 w-auto mr-2" src={logo} alt="Company Logo" />
                    <span className="text-white text-lg font-semibold">TWINAXE WORKS</span>
                </div>
                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <a href="/" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    {!token ? (
                        <>
                            <a href="/signin" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
                            <a href="/login" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleLogout}
                                className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Log Out
                            </button>
                            <a href="/cart" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <img className="h-8 w-auto mr-2" src={cart} alt="Cart Icon" />
                                <span>Cart</span>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
