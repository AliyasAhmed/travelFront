import React, { useContext, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import { auth, provider, signInWithPopup } from "../../firebaseConfig"; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const { signedIn, setSignedIn, user, setUser, userName, setUserName ,userId, setUserId,userNumber, setUserNumber} = useContext(AppContext)

    

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(
    //             'http://127.0.0.1:8000/api/v1/users/login',
    //             { email, password },
    //             { headers: { 'Content-Type': 'application/json' } }
    //         );

    //         if (response.status === 200) {
    //             localStorage.setItem('authToken', response.data.data.access_token);
    //             toast.success('Login successful!')
    //             console.log(response.data.data)
    //             setSignedIn(true)
    //             const userEmail= response.data.data.data.email.split("@")[0];
    //             setUserId(response.data.data.data.id)
    //             setUserNumber(response.data.data.data.phonenumber)
    //             setUserName(userEmail)
    //             setEmail('')
    //             setPassword('')

                
    //             // Redirect to the dashboard or home page
    //             setSignedIn(true);
    //             const userEmail = response.data.data.data.email.split("@")[0];
    //             setUserName(userEmail);
    //             setEmail('');
    //             setPassword('');
 
    //             setTimeout(() => {
    //                 navigate('/userConvo');
    //             }, 2000);
    //         } else {
    //             setError(response.data.message);
    //             setEmail('');
    //             setPassword('');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setError('An error occurred. Please try again.');
    //         setEmail('');
    //         setPassword('');
    //     }
    // };

    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/users/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            if (response.status === 200) {
                localStorage.setItem('authToken', response.data.data.access_token);
                localStorage.setItem('UserId', response.data.data.data.id);
                localStorage.setItem('UserNumber', response.data.data.data.phonenumber);
                toast.success('Login successful!');
                console.log(response.data.data);
    
                setSignedIn(true);
                const userEmail = response.data.data.data.email.split("@")[0]; // Declare once
                setUserId(response.data.data.data.id);
                setUserNumber(response.data.data.data.phonenumber);
                setUserName(userEmail); // Use the declared variable
                setEmail('');
                setPassword('');
    
                // Redirect to the dashboard or home page
                setTimeout(() => {
                    navigate('/userConvo');
                }, 2000);
            } else {
                setError(response.data.message);
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
            setEmail('');
            setPassword('');
        }
    };
    

// google login made by iliyaas
    // const handleGoogleLogin = async () => {
    //     try {
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    //         console.log("Google user data:", user);

    //         setSignedIn(true);
    //         setUserName(user.displayName);
    //         setUser(user);

    //         toast.success(`Welcome, ${user.displayName}!`);
    //         setTimeout(() => {
    //             navigate('/userConvo');
    //         }, 2000);
    //     } catch (error) {
    //         console.error("Google Login Error:", error);
    //         toast.error("Google login failed. Please try again.");
    //     }
    // };

   
   // google login made by me
   const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Google user data:", user);

        // Assuming your backend provides an endpoint to handle Google authentication and issue a token
        const googleAuthResponse = await axios.post(
            'http://127.0.0.1:8000/api/v1/users/google-login', // Replace with your backend endpoint
            { email: user.email, googleId: user.uid },
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (googleAuthResponse.status === 200) {
            const token = googleAuthResponse.data.data.access_token;
            localStorage.setItem('authToken', token);
            toast.success(`Login successful! Welcome, ${user.displayName}.`);
            console.log("Auth Token:", token);

            setSignedIn(true);
            const userEmail = user.email.split("@")[0];
            setUserId(googleAuthResponse.data.data.id);
            setUserNumber(googleAuthResponse.data.data.phonenumber);
            setUserName(userEmail); // Setting userName from Google data
            setUser(user);

            // Redirect to the dashboard or home page
            setTimeout(() => {
                navigate('/userConvo');
            }, 2000);
        } else {
            toast.error("Google login failed on the server. Please try again.");
        }
    } catch (error) {
        console.error("Google Login Error:", error);
        toast.error("Google login failed. Please try again.");
    }
};

    return (
        <section className="p-5 flex items-center justify-center text-white">
            <ToastContainer />
            <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4">
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
                </form>
                <div className="flex items-center gap-4 mt-6">
                    <hr className="flex-grow border-gray-700" />
                    <p className="text-gray-400">or</p>
                    <hr className="flex-grow border-gray-700" />
                </div>
                <button
                    type="button"
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition"
                    onClick={handleGoogleLogin}
                >
                    <MdOutlinePassword className="text-2xl" />
                    Log In with Google
                </button>
                <div className="text-center mt-6 text-sm">
                    <p>
                        Don't have an account?{" "}
                        <a href="/signup" className="text-green-400 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
