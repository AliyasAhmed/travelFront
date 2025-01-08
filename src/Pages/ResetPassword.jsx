import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Extract the token from the query string
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setError("Token is missing or invalid.");
    }
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if(password!== confirmPassword){
        setError("Passwords do not match!")
        setLoading(false)
        return ;
    }

    if (!token) {
      setError("Invalid token. Please try the password reset process again.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/reset-password",
        { token, new_password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setSuccess("Password reset successful. You can now log in with your new password.");
        setTimeout(()=>{
            navigate("/Login");
        },2000)
      } else {
        setError(response.data.message || "Something went wrong.");
        
      }
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);

      if (error.response) {
        setError(error.response.data.message || "Invalid request. Please try again.");
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <p className="text-sm text-gray-400 text-center mb-4">
          Enter your new password below to reset it.
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}

        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label
              htmlFor="resetPassword"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="resetPassword"
              placeholder="Enter your new password"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             <input
              type="password"
              id="confirmPassword"
              placeholder="confirm your new password"
              className="w-full my-2 px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Changing Password..." : "Reset Password"}
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

export default ResetPassword;
