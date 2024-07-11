import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './LogIn.css';
import {AuthContext} from "../AuthContext";

const LogIn = () => {
    const { setToken } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        setErrorMessage('');  
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please fill in both email and password.');
            return;
        }

        try {
            const response = await fetch('/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const result = await response.json();
            console.log('Successfully signed up:', result);
            setToken(result.token);
            navigate('/');

        } catch (error) {
            console.error('There was a problem with the login:', error);
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleLogin}>
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Log in form</h1>
                    {errorMessage && (
                        <div className="text-red-500 text-center mb-3">{errorMessage}</div>
                    )}
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
                               name="email" id="email" placeholder="Email" value={email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password"
                               name="password" id="password" placeholder="Password" value={password} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;