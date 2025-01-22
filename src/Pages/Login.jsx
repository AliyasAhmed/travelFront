
// new code
import React, { useContext, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom"; // Updated import for navigation
import axios from "axios"; // Import axios
// import { Context } from "../App";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const { signedIn, setSignedIn, user, setUser, userName, setUserName } = useContext(AppContext)

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/users/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log("hello response ", response.data.data);
            // console.log("response email", response.data.data.data.email);
            if (response.status === 200) {
                // Save the token to localStorage
                localStorage.setItem('authToken', response.data.data.access_token);
                toast.success('Login successful!');
                console.log(response.data.data)
                setSignedIn(true)
                const userEmail= response.data.data.data.email.split("@")[0];
                setUserName(userEmail)
                setEmail('')
                setPassword('')

                // Redirect to the dashboard or home page
                setTimeout(() => {
                    navigate('/userConvo'); // navigate to dashboard
                }, 2000)

            } else {
                setError(response.data.message); // Display error message from the API
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
            setEmail('')
            setPassword('')
        }
    };

    // console.log("final name",userName)

    return (
        <section className="p-5 flex items-center justify-center text-white">
            <ToastContainer />
            <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4 ">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Log In</h2>
                    <p className="text-gray-400 mt-2">Welcome! Please enter your details</p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="Email" className="block text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="Password" className="block text-sm mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                            />
                        </div>

                        {error && <div className="text-red-500">{error}</div>}

                        <div className="flex justify-end text-sm">
                            <a href="/forgotPassword" className="text-green-400 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition"
                    >
                        Log In
                    </button>
                    <div className="flex items-center gap-4 mt-6">
                        <hr className="flex-grow border-gray-700" />
                        <p className="text-gray-400">or</p>
                        <hr className="flex-grow border-gray-700" />
                    </div>
                    {/* // forgot password */}
                    <button
                        type="button"
                        className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-800 py-2 rounded-lg hover:bg-gray-700 transition" onClick={() => navigate("/forgotPassword")}
                    >
                        <MdOutlinePassword className="text-2xl" />
                        Forgot Password
                    </button>
                    <div className="text-center mt-6 text-sm">
                        <p>
                            Don't have an account?{" "}
                            <a href="/signup" className="text-green-400 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

