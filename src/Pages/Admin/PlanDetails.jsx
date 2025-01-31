
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { PlusCircle, Edit2, Trash2, BookOpenText, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlanDetails = () => {
    const [plans, setPlans] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
        const [token, setToken] = useState('');


    const navigate = useNavigate();

    // Create a single state object to hold all the form data
    const [formData, setFormData] = useState({
        plan_name: '',
        plan_description: '',
        plan_price: '',
        plan_duration: '',
        plan_type: '',
        plan_status: '',
        user_id: ''
    });

    // Handle form field changes and update the state object
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.plan_name || !formData.plan_description || !formData.plan_price || !formData.plan_duration || !formData.plan_type || !formData.plan_status || !formData.user_id) {
            alert("Please fill in all fields.");
            return;
        }

        if (formData.plan_price <= 0 || formData.plan_duration <= 0) {
            alert("Price and duration should be positive numbers.");
            return;
        }

        setLoading(true);

        try {
            if (isEditing) {
                // Make PUT request for editing
                const response = await axios.put(
                    `https://api.maizbaan.ai/api/v1/plans/plans/${formData.id}`,
                    {
                        ...formData,
                        plan_price: Number(formData.plan_price),
                        plan_duration: Number(formData.plan_duration),
                        user_id: Number(formData.user_id),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );

                if (response.data.message === 'Plan updated successfully') {
                    alert("Plan updated successfully!");
                    setPlans((prevPlans) =>
                        prevPlans.map((plan) =>
                            plan.id === formData.id ? { ...formData } : plan
                        )
                    );
                } else {
                    setError(response.data.message);
                }
            } else {
                // Make POST request for adding a new plan
                const response = await axios.post(
                    "https://api.maizbaan.ai/api/v1/plans/plans",
                    {
                        ...formData,
                        plan_price: Number(formData.plan_price),
                        plan_duration: Number(formData.plan_duration),
                        user_id: Number(formData.user_id),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );

                if (response.data.message === 'Plan created successfully') {
                    alert("Plan added successfully!");
                    fetchPlans();
                } else {
                    setError(response.data.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            setFormData({
                plan_name: '',
                plan_description: '',
                plan_price: '',
                plan_duration: '',
                plan_type: '',
                plan_status: '',
                user_id: '',
            });
            setIsEditing(false);
        }
    };

    useEffect(() => { 
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.warn('No auth token found in localStorage');
            return;
        }

        setToken(token);
        fetchPlans() }, [])



    // Handle plan deletion
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this plan?");
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`https://api.maizbaan.ai/api/v1/plans/plans/${id}`);
            if (response.data.message === 'Plan deleted successfully') {
                alert("Plan deleted successfully");
                setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
                fetchPlans();
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while deleting the plan.');
        }
    };

    // Handle plan editing
    const handleEdit = (id) => {

        const planToEdit = plans.find((plan) => plan.id === id);
        if (planToEdit) {
            setFormData({
                ...planToEdit,
                plan_price: planToEdit.plan_price,
                plan_duration: planToEdit.plan_duration,
                user_id: planToEdit.user_id
            });
            setIsEditing(true);
        }
    };

    // Handle plan view
    const handleView = (id) => {
        navigate(`/admin/planDetailsPlan/${id}`);
        // console.log(`View plan with ID: ${id}`);
    };

    // Memoize the rendering of plans
    const renderedPlans = useMemo(() => plans.map((v, i) => (
        <li key={i} className="py-4 flex justify-between items-center">
            <span className="text-lg text-gray-200">{v.id} {v.plan_name}</span>
            <div>
                <button onClick={() => handleView(v.id)} className="bg-blue text-white rounded-md p-2 mr-2 hover:bg-yellow-900 transition duration-300">
                    <BookOpenText size={18} />
                </button>
                <button onClick={() => handleEdit(v.id)} className="bg-yellow-500 text-white rounded-md p-2 mr-2 hover:bg-yellow-600 transition duration-300">
                    <Edit2 size={18} />
                </button>
                <button onClick={() => handleDelete(v.id)} className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition duration-300">
                    <Trash2 size={18} />
                </button>
            </div>
        </li>
    )), [plans]);

    // Fetch existing plans

    const fetchPlans = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.maizbaan.ai/api/v1/plans/plans');
            setPlans(response.data.data);
        } catch (error) {
            console.error('Error fetching plans:', error);
            setError('An error occurred while fetching plans.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            {/* Loading Indicator */}
            {loading && <div className="text-center text-white">Loading...</div>}

            {/* Form Section */}
            <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mb-4">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Plan Details</h2>
                <form onSubmit={handleSubmit}>
                    {/* Plan Name */}
                    <div className="mb-4">
                        <label htmlFor="plan_name" className="block text-sm font-medium text-white">Plan Name</label>
                        <input
                            type="text"
                            name="plan_name"
                            id="plan_name"
                            value={formData.plan_name}
                            onChange={handleInputChange}
                            placeholder="Enter plan name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Plan Description */}
                    <div className="mb-4">
                        <label htmlFor="plan_description" className="block text-sm font-medium text-white">Plan Description</label>
                        <input
                            type="text"
                            name="plan_description"
                            id="plan_description"
                            value={formData.plan_description}
                            onChange={handleInputChange}
                            placeholder="Enter plan description"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Plan Price */}
                    <div className="mb-4">
                        <label htmlFor="plan_price" className="block text-sm font-medium text-white">Plan Price</label>
                        <input
                            type="number"
                            name="plan_price"
                            id="plan_price"
                            value={formData.plan_price}
                            onChange={handleInputChange}
                            placeholder="Enter plan price"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Plan Duration */}
                    <div className="mb-4">
                        <label htmlFor="plan_duration" className="block text-sm font-medium text-white">Plan Duration</label>
                        <input
                            type="number"
                            name="plan_duration"
                            id="plan_duration"
                            value={formData.plan_duration}
                            onChange={handleInputChange}
                            placeholder="Enter plan duration"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Plan Type */}
                    <div className="mb-4">
                        <label htmlFor="plan_type" className="block text-sm font-medium text-white">Plan Type</label>
                        <input
                            type="text"
                            name="plan_type"
                            id="plan_type"
                            value={formData.plan_type}
                            onChange={handleInputChange}
                            placeholder="Enter plan Type"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Plan Status */}
                    <div className="mb-4">
                        <label htmlFor="plan_status" className="block text-sm font-medium text-white">Plan Status</label>
                        <input
                            type="text"
                            name="plan_status"
                            id="plan_status"
                            value={formData.plan_status}
                            onChange={handleInputChange}
                            placeholder="Enter plan Status"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* User ID */}
                    <div className="mb-4">
                        <label htmlFor="user_id" className="block text-sm font-medium text-white">User ID</label>
                        <input
                            type="number"
                            name="user_id"
                            id="user_id"
                            value={formData.user_id}
                            onChange={handleInputChange}
                            placeholder="Enter user_id"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isEditing ? 'Update Plan' : 'Save Plan'}
                        </button>

                    </div>
                </form>
            </section>

            {/* Existing Plans Section */}
            <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mt-4">
                <div className="border border-gray-300 p-6 rounded-lg bg-opacity-50">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-white">Existing Plans</h2>

                    {/* Displaying Existing Plans */}
                    {loading ? (
                        <div className="text-center text-white">Loading plans...</div>
                    ) : plans?.length === 0 ? (
                        <div className="text-center text-white">No plans available</div>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {renderedPlans}
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export default PlanDetails;
