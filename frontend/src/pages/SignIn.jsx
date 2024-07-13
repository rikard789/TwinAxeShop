import React, { useState, useContext } from "react";
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm: '',
        errorMessage: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignIn = async (event) => {
        event.preventDefault();

        const { firstname, lastname, email, password, confirm } = formData;

        if (!firstname || !lastname || !email || !password || !confirm) {
            setFormData({
                ...formData,
                errorMessage: "All fields are required."
            });
            return;
        }

        if (password !== confirm) {
            setFormData({
                ...formData,
                errorMessage: "Passwords do not match."
            });
            return;
        }

        setFormData({
            ...formData,
            errorMessage: ''
        });

        const data = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };

        try {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Successfully signed up:', result);
            setToken(result.token);
            navigate('/');

        } catch (error) {
            console.error('There was a problem with the sign-up:', error);
            setFormData({
                ...formData,
                errorMessage: 'Sign-up failed. Please try again later.'
            });
        }
    };

    return (
        <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSignIn}>
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register form</h1>
                    {formData.errorMessage && (
                        <div className="mb-4 text-red-500 text-center">{formData.errorMessage}</div>
                    )}
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="firstname">First name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
                               name="firstname" id="firstname" placeholder="First name" value={formData.firstname} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="lastname">Last name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
                               name="lastname" id="lastname" placeholder="Last name" value={formData.lastname} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email"
                               name="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password"
                               name="password" id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirm password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password"
                               name="confirm" id="confirm" placeholder="Confirm password" value={formData.confirm} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;