import React from "react";
import './navbar.css';
import logo from '../images/twinaxe_art.jpeg'

class Navbar extends React.Component {
    
    render() {
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
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
                        <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                        <a href="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</a>
                    </div>
                </div>
            </nav>
        )
      }
}

export default Navbar;