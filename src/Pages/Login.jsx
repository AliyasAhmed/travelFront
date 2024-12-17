import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <section className="p-5 flex items-center justify-center text-white">
            <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4 ">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Log In</h2>
                    <p className="text-gray-400 mt-2">Welcome! Please enter your details</p>
                </div>
                <form>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="Email" className="block text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
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
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                            />
                        </div>
                       
                        <div className="flex justify-end text-sm">
                            <a href="/forgotPass" className="text-green-400 hover:underline">
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
                    <button
                        type="button"
                        className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-800 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        <FcGoogle className="text-2xl" />
                        Login with Google
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
