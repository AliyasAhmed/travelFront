import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/forget-password",
        { email }, // Payload
        { headers: { "Content-Type": "application/json" } }
      );
  
      if (response.status === 200) {
        setSuccess("Mail sent successfully, please check your email.");
        toast.success("Mail sent successfully,")
      } else {
        setError(response.data.message || "Something went wrong.");
        
      }
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
  
      // Set a user-friendly error message
      if (error.response) {
        // Server responded with a status outside the 2xx range
        setError(error.response.data.message || "Invalid request. Please try again.");
        toast.warning("Invalid request. Please try again.")
      } else if (error.request) {
        // Request was made but no response received
        setError("No response from server. Please try again later.");
        toast.warning("No response from server. Please try again later.")
      } else {
        // Something happened while setting up the request
        setError("An error occurred. Please try again.");
        toast.warning("An error occurred. Please try again.")
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="h-screen flex justify-center items-center bg-gray-900">
      <ToastContainer/>
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-sm text-gray-400 text-center mb-4">
          Enter your email address below, and we'll send you a verification code to reset your password.
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}

        <form onSubmit={handleForgot}>
          <div className="mb-4">
            <label
              htmlFor="forgotPassword"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="forgotPassword"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            Remember your password?{" "}
            <a href="/login" className="text-green-400 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
