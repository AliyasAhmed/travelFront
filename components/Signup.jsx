

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
// import { Navigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    travel_agency: "",
    agentName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.warning("Passwords do not match")
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/signup",
        {
          email: formData.email,
          password: formData.password,
          phonenumber: formData.phonenumber,
          travel_agency: formData.travel_agency,
          agentName: formData.agentName,
          conversations: [],
        }
      );
      setSuccess("Signup successful! Welcome to the platform.");
      toast.success("Signup successful! Welcome to the platform.")
      setFormData(
        {
          email: "",
          password: "",
          confirmPassword: "",
          phonenumber: "",
          travel_agency: "",
          agentName: ""
        })
      // console.log(response.data); // For debugging purposes

      setTimeout(()=>{
        navigate('/Login');  // Navigate('/Login'); 
      },2000)
      
     
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again!");
      toast.error(err.response?.data?.message || "Something went wrong. Try again!")
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-5 flex items-center justify-center text-white">
      <ToastContainer/>
      <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4 ">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Create your Account</h2>
          <p className="text-gray-400 mt-2">Welcome! Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phonenumber" className="block text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.phonenumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="travel_agency" className="block text-sm mb-1">
                Travel Agency
              </label>
              <input
                type="text"
                id="travel_agency"
                name="travel_agency"
                placeholder="Enter your travel agency name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.travel_agency}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="agentName" className="block text-sm mb-1">
                Agent Name
              </label>
              <input
                type="text"
                id="agentName"
                name="agentName"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.agentName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
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
              Already have an account?{" "}
              <a href="/login" className="text-green-400 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
