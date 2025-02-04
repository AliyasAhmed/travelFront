// import React, { useState, useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { auth, provider } from "../firebaseConfig"; // Import Firebase auth and provider
// import { signInWithPopup } from "firebase/auth";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phonenumber: "",
//     agency_id: "",
//     agentName: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [agencies, setAgencies] = useState([]);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fetch agencies from the API
//   const fetchAgencies = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("https://api.maizbaan.ai/api/v1/users/agencies");
//       setAgencies(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching agencies:", error);
//       setError("Error fetching agencies.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAgencies();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       toast.warning("Passwords do not match");
//       return;
//     }

//     if (!formData.agency_id) {
//       setError("Please select a travel agency.");
//       toast.warning("Please select a travel agency.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const payload = {
//         email: formData.email,
//         password: formData.password,
//         phonenumber: formData.phonenumber,
//         agency_id: formData.agency_id, // Ensure ID is sent
//         agentName: formData.agentName,
//       };

//       const response = await axios.post(
//         "https://api.maizbaan.ai/api/v1/users/signup",
//         payload
//       );
//       console.log("respnse " , response);
//       setSuccess("Signup successful! Welcome to the platform.");
//       toast.success("Signup successful! Welcome to the platform.");
//       setFormData({
//         email: "",
//         password: "",
//         confirmPassword: "",
//         phonenumber: "",
//         agency_id: "",
//         agentName: "",
//       });

//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong. Try again!");
//       toast.error(err.response?.data?.message || "Something went wrong. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleGoogleSignup = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const result = await signInWithPopup(auth, provider);
//   //     const user = result.user;

//   //     // You can get user info from here (e.g., user.email, user.displayName)
//   //     console.log(user);

//   //     toast.success("Signup successful! Welcome to the platform.");

//   //     // Redirect to another page or call your backend to store user data
//   //     navigate("/dashboard");
//   //   } catch (error) {
//   //     console.error("Error during Google signup:", error);
//   //     toast.error("Something went wrong. Try again!");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <section className="p-5 flex items-center justify-center text-white">
//       <ToastContainer />
//       <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl font-bold">Create your Account</h2>
//           <p className="text-gray-400 mt-2">Welcome! Please enter your details</p>
//         </div>
        
//         {/* Google Signup Button */}
//         {/* <button
//           onClick={handleGoogleSignup}
//           className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition"
//           disabled={loading}
//         >
//           {loading ? "Signing Up..." : (
//             <div className="flex justify-center items-center gap-3">
//               <FcGoogle size={24} />
//               Sign Up with Google
//             </div>
//           )}
//         </button> */}

//         {/* Or Regular Form Signup */}
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-4 mt-6">
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             {success && <p className="text-green-500 text-sm">{success}</p>}

//             <div>
//               <label htmlFor="email" className="block text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="phonenumber" className="block text-sm mb-1">Phone Number</label>
//               <input
//                 type="text"
//                 id="phonenumber"
//                 name="phonenumber"
//                 placeholder="Enter your phone number"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
//                 value={formData.phonenumber}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="agency_id" className="block text-sm mb-1">Travel Agency</label>
//               <select
//                 id="agency_id"
//                 name="agency_id"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-white"
//                 value={formData.agency_id}
//                 onChange={handleChange}
//               >
//                 <option value="" disabled>Select your travel agency</option>
//                 {agencies.map((agency) => (
//                   <option key={agency.id} value={agency.id}>
//                     {agency.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label htmlFor="agentName" className="block text-sm mb-1">Agent Name</label>
//               <input
//                 type="text"
//                 id="agentName"
//                 name="agentName"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
//                 value={formData.agentName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm mb-1">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder-gray-500"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition"
//             disabled={loading}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Signup;



import React, { useState, useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext"; // <--- Make sure you have the correct path to your context
import apiClient from "./apiClient";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    agency_id: "",
    agentName: "",
  });

  const [loading, setLoading] = useState(false);
  const [agencies, setAgencies] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Pull in context states (like setSignedIn, setUserId, etc.)
  const {
    setSignedIn,
    setUserId,
    setUserNumber,
    setUserName,
  } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch agencies from the API
  const fetchAgencies = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get("/api/v1/users/agencies");
      // In case response.data isn't an array, fallback to []
      setAgencies(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching agencies:", error);
      setError("Error fetching agencies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic checks before submitting
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.warning("Passwords do not match");
      return;
    }

    if (!formData.agency_id) {
      setError("Please select a travel agency.");
      toast.warning("Please select a travel agency.");
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
        agency_id: formData.agency_id,
        agentName: formData.agentName,
      };

      const response = await apiClient.post("/api/v1/users/signup",
        payload
      );

      // If signup successful, response.status should be 200
      const { access_token, data } = response.data.data; 
      // "data" is the user object from the backend

      // 1) Store the token in localStorage
      localStorage.setItem("authToken", access_token);

      // 2) Update context to reflect the user is signed in
      setSignedIn(true);

      // 3) Set the rest of the user info (ID, phone, name)
      setUserId(data.id);
      setUserNumber(data.phonenumber);

      // Parse the email to get the user name if you want
      const userEmail = data.email?.split("@")[0] || "User";
      setUserName(userEmail);

      // 4) Show success toast & optionally a message
      setSuccess("Signup successful! Welcome to the platform.");
      toast.success("Signup successful! Welcome to the platform.");

      // 5) Clear form inputs
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        phonenumber: "",
        agency_id: "",
        agentName: "",
      });

      // 6) Redirect to your "dashboard" or userConvo route
      setTimeout(() => {
        navigate("/userConvo");
      }, 2000);

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

        {/* If you have a Google Signup button, it would go here */}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
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
              <label htmlFor="phonenumber" className="block text-sm mb-1">Phone Number</label>
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
              <label htmlFor="agency_id" className="block text-sm mb-1">Travel Agency</label>
              <select
                id="agency_id"
                name="agency_id"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-white"
                value={formData.agency_id}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your travel agency</option>
                {agencies.map((agency) => (
                  <option key={agency.id} value={agency.id}>
                    {agency.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="agentName" className="block text-sm mb-1">Agent Name</label>
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
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
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
              <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirm Password</label>
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
        </form>
      </div>
    </section>
  );
};

export default Signup;
