
import React, { useState, useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    agentName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAgent, setIsAgent] = useState(false); 

  const navigate = useNavigate();
  const { setSignedIn, setUserId, setUserNumber, setUserName } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setIsAgent(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.warning("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        phonenumber: formData.phonenumber,
        agentName: formData.agentName,
        is_travel_agency: isAgent, 
      };

      const response = await axios.post("http://127.0.0.1:8000/api/v1/users/signup", payload);

      const { access_token, data } = response.data.data;
      localStorage.setItem("authToken", access_token);

      setSignedIn(true);
      setUserId(data.id);
      setUserNumber(data.phonenumber);
      setUserName(data.email?.split("@")[0] || "User");

      setSuccess("Signup successful! Welcome to the platform.");
      toast.success("Signup successful! Welcome to the platform.");

      setFormData({ email: "", password: "", confirmPassword: "", phonenumber: "", agentName: "" });

      // Redirect based on agent status
      if (isAgent) {
        setTimeout(() => navigate("/agentdetails"), 2000);  // Redirect to agent details page
      } else {
        setTimeout(() => navigate("/userConvo"), 2000);  // Redirect to user conversation page
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong. Try again!");
      toast.error(err.response?.data?.message || "Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-5 flex items-center justify-center text-white">
      <ToastContainer />
      <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Create your Account</h2>
          <p className="text-gray-400 mt-2">Welcome! Please enter your details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-800 rounded-lg" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phonenumber" placeholder="Phone Number" className="w-full px-4 py-2 bg-gray-800 rounded-lg" value={formData.phonenumber} onChange={handleChange} />
            <input type="text" name="agentName" placeholder="Agent Name" className="w-full px-4 py-2 bg-gray-800 rounded-lg" value={formData.agentName} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 bg-gray-800 rounded-lg" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 bg-gray-800 rounded-lg" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <div className="flex justify-start gap-2 p-2">
            <input type="checkbox" id="agent" name="agent" checked={isAgent} onChange={handleCheckboxChange} />
            <p>Are you a Travel Agent?</p>
          </div>

          <button type="submit" className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;